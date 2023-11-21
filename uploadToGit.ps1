

Param ($unique_id = $(throw "unique_id parameter is required."))
$ErrorActionPreference = "Stop" 
$currRepo = "generic-cards"
$repoURL = git remote get-url --push origin

if($repoURL -eq $null -or $repoURL -eq "")
{
    git remote add origin "https://github.com/madortill/$currRepo.git"
}


function Invoke-Utility {
  $exe, $argsForExe = $Args
  # Workaround: Prevents 2> redirections applied to calls to this function
  #             from accidentally triggering a terminating error.
  #             See bug report at https://github.com/PowerShell/PowerShell/issues/4002
  $ErrorActionPreference = 'Continue'
  try { & $exe $argsForExe } catch { Throw } # catch is triggered ONLY if $exe can't be found, never for errors reported by $exe itself
  if ($LASTEXITCODE) { Throw "$exe indicated failure (exit code $LASTEXITCODE; full command: $Args)." } else {}
}

Set-Alias iu Invoke-Utility

Set-Clipboard -Value "https://madortill.github.io/$currRepo/code/?path=$unique_id"
iu git add "./data/$unique_id/"
git commit -m "adding data number $unique_id"
iu git push origin master
echo ''
echo 'success!'
