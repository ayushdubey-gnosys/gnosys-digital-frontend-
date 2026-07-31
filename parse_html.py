import json
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script = False
        self.in_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'noscript'):
            self.in_script = True
        elif tag == 'style':
            self.in_style = True

    def handle_endtag(self, tag):
        if tag in ('script', 'noscript'):
            self.in_script = False
        elif tag == 'style':
            self.in_style = False

    def handle_data(self, data):
        if not self.in_script and not self.in_style:
            clean = data.strip()
            if clean:
                self.text.append(clean)

def extract_text_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    extractor = TextExtractor()
    extractor.feed(html_content)
    
    return '\n'.join(extractor.text)

if __name__ == '__main__':
    file_path = r'C:\Users\HP\.gemini\antigravity-ide\brain\14304a98-2502-4f84-a4ca-98f17fb40b20\.system_generated\steps\42\content.md'
    text = extract_text_from_html(file_path)
    
    with open('parsed_content.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    
    print("Parsing complete. Check parsed_content.txt")
