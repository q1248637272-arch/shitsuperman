$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$PublishDir = Join-Path $ProjectRoot "cloudflare-pages"
$NodeDir = "D:\node"
$NodeExe = Join-Path $NodeDir "node.exe"
$NpxCmd = Join-Path $NodeDir "npx.cmd"
$DeployScript = Join-Path $ProjectRoot "deploy-cloudflare.mjs"

if (-not (Test-Path -LiteralPath $NodeExe)) {
  throw "Node.js was not found at $NodeExe"
}

New-Item -ItemType Directory -Force -Path $PublishDir | Out-Null
$AssetSourceDir = Join-Path $ProjectRoot "assets"
$AssetPublishDir = Join-Path $PublishDir "assets"
$ExcludedAssetPattern = "(-raw|-source|-alpha)\.png$"
New-Item -ItemType Directory -Force -Path $AssetPublishDir | Out-Null

Copy-Item -LiteralPath (Join-Path $ProjectRoot "index.html") -Destination (Join-Path $PublishDir "index.html") -Force
Copy-Item -LiteralPath (Join-Path $ProjectRoot "main.js") -Destination (Join-Path $PublishDir "main.js") -Force
Copy-Item -LiteralPath (Join-Path $ProjectRoot "styles.css") -Destination (Join-Path $PublishDir "styles.css") -Force

$AllowedAssetNames = @{}
Get-ChildItem -LiteralPath $AssetSourceDir -File | Where-Object { $_.Name -notmatch $ExcludedAssetPattern } | ForEach-Object {
  $AllowedAssetNames[$_.Name] = $true
  Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $AssetPublishDir $_.Name) -Force
}
Get-ChildItem -LiteralPath $AssetPublishDir -File | Where-Object { -not $AllowedAssetNames.ContainsKey($_.Name) } | ForEach-Object {
  Remove-Item -LiteralPath $_.FullName -Force
}
foreach ($staleFile in @("preview.png", "README.md")) {
  Remove-Item -LiteralPath (Join-Path $PublishDir $staleFile) -Force -ErrorAction SilentlyContinue
}

& $NodeExe --check (Join-Path $ProjectRoot "main.js")
if ($LASTEXITCODE -ne 0) {
  throw "main.js syntax check failed"
}
$env:Path = "$NodeDir;$env:Path"
& $NodeExe $DeployScript
if ($LASTEXITCODE -ne 0) {
  throw "Cloudflare deployment failed"
}
