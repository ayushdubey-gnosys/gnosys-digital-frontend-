const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;
            
            const lines = content.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (/<h[1-6]/.test(lines[i])) {
                    if (/text-zinc-\d+/.test(lines[i])) {
                        lines[i] = lines[i].replace(/text-zinc-\d+/g, 'text-[#00477b]');
                        updated = true;
                    }
                }
            }
            
            if (updated) {
                fs.writeFileSync(fullPath, lines.join('\n'));
                console.log('Updated ' + fullPath);
            }
        }
    }
}

const targetDir = path.resolve(__dirname, 'resources/js/pages');
console.log('Updating heading colors in:', targetDir);
processDir(targetDir);
console.log('Done');
