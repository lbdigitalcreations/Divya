const fs = require('fs');
const path = require('path');

const dir = __dirname;

['index.html', 'script.js'].forEach(targetFile => {
    const filePath = path.join(dir, targetFile);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find any IMG-xxxx - Abinaya.jpg and replace spaces with %20
        const regex = /IMG-([0-9]+)-WA([0-9]+)\s+-\s+Abinaya\.jpg/g;
        
        const newContent = content.replace(regex, (match, p1, p2) => {
            return `IMG-${p1}-WA${p2}%20-%20Abinaya.jpg`;
        });
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`URL encoded spaces in ${targetFile}`);
        }
    }
});
