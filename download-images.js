#!/usr/bin/env node

/**
 * Image Download Helper
 *
 * This script helps you download images from URLs and save them to the images/ folder
 *
 * Usage:
 *   node download-images.js
 *
 * Then follow the prompts to enter image URLs
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const dir = path.dirname(filepath);

        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(filepath);
        protocol.get(url, { redirect: 'follow' }, (response) => {
            // Check if response is image
            const contentType = response.headers['content-type'];
            if (!contentType || !contentType.includes('image')) {
                reject(new Error('URL does not point to an image'));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete file on error
            reject(err);
        });
    });
}

async function main() {
    console.log('\n🖼️  Hammond Interiors - Image Download Helper\n');
    console.log('This tool helps you download images from URLs and save them locally.');
    console.log('Images will be optimized for web and saved to the images/ folder.\n');

    const images = [
        {
            name: 'Hero Background',
            default: 'images/hero/hero-bg.jpg',
            folder: 'images/hero'
        },
        {
            name: 'Kitchen Project 1',
            default: 'images/gallery/kitchen-1.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'Kitchen Project 2',
            default: 'images/gallery/kitchen-2.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'Bathroom Project 1',
            default: 'images/gallery/bathroom-1.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'Bathroom Project 2',
            default: 'images/gallery/bathroom-2.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'Renovation Project 1',
            default: 'images/gallery/renovation-1.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'Renovation Project 2',
            default: 'images/gallery/renovation-2.jpg',
            folder: 'images/gallery'
        },
        {
            name: 'About/Team Photo',
            default: 'images/about/team.jpg',
            folder: 'images/about'
        }
    ];

    console.log('Available image slots:');
    images.forEach((img, i) => {
        console.log(`  ${i + 1}. ${img.name} → ${img.default}`);
    });

    console.log('\nTo download images:');
    console.log('  1. Copy a Facebook/Instagram image URL');
    console.log('  2. Enter the image number (1-8) or skip');
    console.log('  3. Paste the URL when prompted\n');

    let addMore = true;
    while (addMore) {
        const imageNum = await question('Enter image number (1-8) or press Enter to exit: ');

        if (!imageNum || imageNum === '') {
            addMore = false;
            break;
        }

        const num = parseInt(imageNum) - 1;
        if (num < 0 || num >= images.length) {
            console.log('❌ Invalid number. Please enter 1-8.\n');
            continue;
        }

        const img = images[num];
        console.log(`\n📥 Downloading: ${img.name}`);

        const url = await question('Paste image URL: ');
        if (!url) {
            console.log('⏭️  Skipped.\n');
            continue;
        }

        try {
            await downloadImage(url, img.default);
            console.log(`✅ Downloaded to: ${img.default}\n`);
        } catch (err) {
            console.log(`❌ Error: ${err.message}\n`);
        }
    }

    console.log('\n✨ Done! Your images are saved to:');
    console.log('   C:\\Users\\richa\\HammondWebsite\\images\\\n');
    console.log('Tip: Optimize images with TinyPNG.com for better performance.\n');

    rl.close();
}

main().catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
});
