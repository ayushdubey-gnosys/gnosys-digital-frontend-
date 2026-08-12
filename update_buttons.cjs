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
            let originalContent = content;
            
            // Match any <Button, <button, <a, <Link
            content = content.replace(/<(Button|button|a|Link)[^>]*>/g, (match) => {
                let replaced = match;
                replaced = replaced.replace(/bg-zinc-[89]00/g, 'bg-[#00477b]');
                replaced = replaced.replace(/hover:bg-zinc-[78]00/g, 'hover:bg-[#00335e]');
                replaced = replaced.replace(/text-zinc-[89]00/g, 'text-[#00477b]');
                replaced = replaced.replace(/hover:text-zinc-[89]00/g, 'hover:text-[#00477b]');
                replaced = replaced.replace(/border-zinc-[89]00/g, 'border-[#00477b]');
                replaced = replaced.replace(/shadow-zinc-[89]00/g, 'shadow-[#00477b]');
                return replaced;
            });
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

const targetDir = path.resolve(__dirname, 'resources/js/pages');
console.log('Updating button colors in:', targetDir);
processDir(targetDir);
console.log('Done');
