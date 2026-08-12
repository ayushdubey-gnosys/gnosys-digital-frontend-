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

            // Regex to match the span tags for badges that have text-zinc-\d+
            const regex = /(<span[^>]*class(?:Name)?=["'][^"']*rounded-full[^"']*?)text-zinc-\d+([^"']*["']>)/g;
            
            if (regex.test(content)) {
                content = content.replace(regex, (match, p1, p2) => {
                    return p1 + 'text-[#00477b]' + p2;
                });
                updated = true;
            }

            if (updated) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated badges in ' + fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'resources', 'js', 'pages'));
