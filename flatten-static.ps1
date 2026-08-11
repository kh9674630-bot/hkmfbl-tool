$src = "D:\Codex文件存放\hkmfbl-tool\out\_next\static"
$dst = "D:\Codex文件存放\hkmfbl-tool\out\_next-static"
if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
New-Item -ItemType Directory -Path $dst -Force | Out-Null
Get-ChildItem $src -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring($src.Length + 1)
  $destDir = Join-Path $dst (Split-Path $rel -Parent)
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
  Copy-Item $_.FullName (Join-Path $dst $rel) -Force
}
Write-Host "Done: flattened static files"
Get-ChildItem $dst -Recurse -File | Measure-Object | Select-Object -ExpandProperty Count
