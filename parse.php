<?php
$content = file_get_contents('C:\Users\HP\.gemini\antigravity-ide\brain\14304a98-2502-4f84-a4ca-98f17fb40b20\.system_generated\steps\42\content.md');

// Extract text within body tags if possible
if (preg_match('/<body[^>]*>(.*?)<\/body>/is', $content, $matches)) {
    $body = $matches[1];
} else {
    $body = $content;
}

// Remove scripts and styles
$body = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', "", $body);
$body = preg_replace('/<style\b[^>]*>(.*?)<\/style>/is', "", $body);

// Strip all HTML tags
$text = strip_tags($body);

// Replace multiple whitespace/newlines with single newlines
$text = preg_replace("/\s*\n\s*/", "\n", $text);
$text = preg_replace("/[ \t]+/", " ", $text);
$text = preg_replace("/\n{3,}/", "\n\n", $text);

file_put_contents('parsed.txt', trim($text));
echo "Done";
