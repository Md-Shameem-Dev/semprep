# Stops the background SemPrep server (only the process listening on the SemPrep port).
param([int]$Port = 5178)
$conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $conns) { Write-Host "SemPrep server isn't running."; exit 0 }
foreach ($c in $conns) {
  $p = Get-Process -Id $c.OwningProcess -ErrorAction SilentlyContinue
  if ($p -and $p.ProcessName -match "^node") { Stop-Process -Id $p.Id -Force; Write-Host "Stopped SemPrep server (pid $($p.Id))." }
  else { Write-Host "Port $Port is used by '$($p.ProcessName)', not Node. Left it alone." }
}
