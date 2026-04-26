const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');
const files = fs.readdirSync('.');

const regex = /IMG-[^'"]+\.jpg/g;
let match;
const imgs = new Set();

while ((match = regex.exec(html)) !== null) { imgs.add(match[0]); }
while ((match = regex.exec(js)) !== null) { imgs.add(match[0]); }

imgs.forEach(img => {
    if (!files.includes(img)) {
        console.log('Missing in filesystem:', img);
    } else {
        console.log('Found:', img);
    }
});
