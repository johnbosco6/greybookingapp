const fs = require('fs');
const path = require('path');

const destinations = [
    { name: 'Mazury', file: 'mazury.svg', color1: '#1a5f7a', color2: '#57c5b6' },
    { name: 'Bieszczady', file: 'bieszczady.svg', color1: '#2d5016', color2: '#86a873' },
    { name: 'Sopot', file: 'sopot.svg', color1: '#0077be', color2: '#ffd700' },
    { name: 'Lublin', file: 'lublin.svg', color1: '#8b4513', color2: '#daa520' }
];

const experiences = [
    { name: 'Krakow Tour', file: 'krakow-tour.svg', color1: '#8b0000', color2: '#ffd700' },
    { name: 'Kayaking', file: 'kayaking.svg', color1: '#006994', color2: '#4cb5f5' },
    { name: 'Gingerbread', file: 'gingerbread.svg', color1: '#8b4513', color2: '#d2691e' },
    { name: 'Salt Mine', file: 'salt-mine.svg', color1: '#4a4a4a', color2: '#a9a9a9' },
    { name: 'Boat Tour', file: 'boat-tour.svg', color1: '#1e3a8a', color2: '#60a5fa' },
    { name: 'Giewont', file: 'giewont.svg', color1: '#374151', color2: '#9ca3af' },
    { name: 'Pottery', file: 'pottery.svg', color1: '#92400e', color2: '#d97706' },
    { name: 'Warsaw Night', file: 'warsaw-night.svg', color1: '#1f2937', color2: '#edff23' }
];

const createSvg = (name, color1, color2) => {
    return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle" text-shadow="2px 2px 4px rgba(0,0,0,0.5)">
            ${name}
        </text>
    </svg>`;
};

// Create directories if they don't exist
const destDir = path.join('public', 'images', 'destinations');
const expDir = path.join('public', 'images', 'experiences');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
if (!fs.existsSync(expDir)) fs.mkdirSync(expDir, { recursive: true });

// Generate destination images
destinations.forEach(item => {
    fs.writeFileSync(path.join(destDir, item.file), createSvg(item.name, item.color1, item.color2));
    console.log(`Created ${item.file}`);
});

// Generate experience images
experiences.forEach(item => {
    fs.writeFileSync(path.join(expDir, item.file), createSvg(item.name, item.color1, item.color2));
    console.log(`Created ${item.file}`);
});
