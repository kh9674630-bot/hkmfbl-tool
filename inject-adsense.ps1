# Inject AdSense script into all static HTML files
$adsenseScript = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5307254219688460" crossorigin="anonymous"></script>'
$outDir = "D:\Codex文件存放\hkmfbl-tool\out"
Get-ChildItem $outDir -Filter "*.html" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    if ($content -notmatch 'ca-pub-5307254219688460') {
        $newContent = $content -replace '(?i)(</head>)', "$adsenseScript`$1"
        [System.IO.File]::WriteAllText($_.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Injected: $($_.Name)"
    }
}
Write-Host "Done"
