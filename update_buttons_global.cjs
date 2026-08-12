const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('vendor')) {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Regex to find Button, a, or Link tags
            const tagRegex = /<(Button|a|Link)([^>]+)>/g;
            
            content = content.replace(tagRegex, (match, tag, attributes) => {
                let originalAttributes = attributes;
                
                // Only modify if it has a class attribute with zinc/gray backgrounds
                if (attributes.match(/bg-(zinc|gray)-(800|900)/)) {
                    // Replacements
                    attributes = attributes
                        .replace(/\bbg-(zinc|gray)-(800|900)\b/g, 'bg-[#00477b]')
                        .replace(/\bhover:bg-(zinc|gray)-(700|800|900|950)\b/g, 'hover:bg-[#00335e]')
                        .replace(/\bborder-(zinc|gray)-(800|900)\b/g, 'border-[#00335e]')
                        .replace(/\bhover:border-(zinc|gray)-950\b/g, 'hover:border-[#002646]')
                        .replace(/\bshadow-(zinc|gray)-(800|900)\/20\b/g, 'shadow-blue-900/20')
                        .replace(/\bhover:shadow-(zinc|gray)-(800|900)\/30\b/g, 'hover:shadow-blue-900/30');
                        
                    if (attributes !== originalAttributes) {
                        updated = true;
                    }
                }
                
                return `<${tag}${attributes}>`;
            });

            if (updated) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated buttons in ' + fullPath);
            }
        }
    }
}

console.log('Starting button styles update...');
processDir(path.join(__dirname, 'resources', 'js'));
console.log('Update complete.');
