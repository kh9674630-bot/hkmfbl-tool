$outDir = "D:\Codex文件存放\hkmfbl-tool\out"
$oldPath = "/_next/static/"
$newPath = "/_next-static/"

# Replace in all HTML files
Get-ChildItem $outDir -Include "*.html" -Recurse | ForEach-Object {
  $content = Get-Content $_.FullName -Raw -Encoding UTF8
  $content = $content -replace [regex]::Escape($oldPath), $newPath
  [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.UTF8Encoding]::new($false))
}

Write-Host "Replaced paths in HTML files"

# Update _redirects
$redirects = @"
# Cloudflare Pages redirects

# Static files
/ads.txt    /ads.txt  200
/robots.txt /robots.txt  200
/sitemap.xml /sitemap.xml  200
/manifest.json /manifest.json  200
/favicon.ico /favicon.ico  200
/cookie-consent.js /cookie-consent.js  200

# Client-side routing
/*  /index.html  200
"@
[System.IO.File]::WriteAllText("$outDir\_redirects", $redirects, [System.Text.UTF8Encoding]::new($false))
Write-Host "Updated _redirects"
