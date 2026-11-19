# Creates a "SemPrep" shortcut on your Desktop that starts the server (if needed)
# and opens the app window. Re-run it if you move the project folder.
$root    = Split-Path -Parent $PSScriptRoot
$script  = Join-Path $PSScriptRoot "start-semprep.ps1"
$icon    = Join-Path $root "icons\semprep.ico"
$desktop = [Environment]::GetFolderPath("Desktop")
$lnkPath = Join-Path $desktop "SemPrep.lnk"

$sh = New-Object -ComObject WScript.Shell
$lnk = $sh.CreateShortcut($lnkPath)
$lnk.TargetPath       = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
$lnk.Arguments        = "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$script`""
$lnk.WorkingDirectory = $root
$lnk.IconLocation     = "$icon,0"
$lnk.WindowStyle      = 7   # minimized, so no console flash
$lnk.Description      = "SemPrep: semester exam study guides"
$lnk.Save()
Write-Host "Created $lnkPath"
