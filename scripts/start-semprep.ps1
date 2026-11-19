# Starts the SemPrep server in the background (if it isn't already running) and
# opens the app in its own window (Edge/Chrome "app" mode, no tabs or address bar).
#   -Port   default 5178
#   -NoOpen only make sure the server is running (used for testing)
param([int]$Port = 5178, [switch]$NoOpen)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$url  = "http://localhost:$Port/"

function Show-Problem([string]$text) {
  try { Add-Type -AssemblyName PresentationFramework; [void][System.Windows.MessageBox]::Show($text, "SemPrep") }
  catch { Write-Host $text }
}
function Test-Port {
  try { $c = New-Object System.Net.Sockets.TcpClient; $c.Connect("127.0.0.1", $Port); $c.Close(); return $true } catch { return $false }
}

if (-not (Test-Port)) {
  $node = (Get-Command node -ErrorAction SilentlyContinue).Source
  if (-not $node) { Show-Problem "SemPrep needs Node.js, which isn't installed.`nInstall it from nodejs.org, then open SemPrep again."; exit 1 }

  # server logs go outside OneDrive so they don't sync
  $logDir = Join-Path $HOME ".semprep"
  New-Item -ItemType Directory -Force -Path $logDir | Out-Null
  $env:PORT = "$Port"
  Start-Process -FilePath $node -ArgumentList "server.mjs" -WorkingDirectory $root -WindowStyle Hidden `
    -RedirectStandardOutput (Join-Path $logDir "server.log") -RedirectStandardError (Join-Path $logDir "server-error.log")

  for ($i = 0; $i -lt 80 -and -not (Test-Port); $i++) { Start-Sleep -Milliseconds 250 }
  if (-not (Test-Port)) {
    Show-Problem "SemPrep's server didn't start.`nDetails: $(Join-Path $logDir 'server-error.log')"
    exit 1
  }
}

if ($NoOpen) { Write-Host "SemPrep server is running at $url"; exit 0 }

# Prefer an app-style window; fall back to the default browser.
$candidates = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles (x86)\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
if ($browser) { Start-Process -FilePath $browser -ArgumentList "--app=$url" }
else { Start-Process $url }
