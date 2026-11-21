param([string]$PptxPath = (Join-Path $PSScriptRoot 'project_report_15min.pptx'))
$ErrorActionPreference = 'Stop'
$taskPresentationPath = (Resolve-Path -LiteralPath $PptxPath).Path
$taskRenderRoot = Join-Path $PSScriptRoot 'powerpoint_png'
New-Item -ItemType Directory -Path $taskRenderRoot -Force | Out-Null
$taskPowerPoint = New-Object -ComObject PowerPoint.Application
$taskInitialPresentationCount = $taskPowerPoint.Presentations.Count
$taskDeck = $null
try {
    # Read-only, no visible document window, no changes to the source file.
    $taskDeck = $taskPowerPoint.Presentations.Open($taskPresentationPath, -1, 0, 0)
    $taskSlideCount = $taskDeck.Slides.Count
    for ($taskIndex = 1; $taskIndex -le $taskSlideCount; $taskIndex++) {
        $taskImagePath = Join-Path $taskRenderRoot ('slide-{0:D2}.png' -f $taskIndex)
        $taskDeck.Slides.Item($taskIndex).Export($taskImagePath, 'PNG', 1600, 900)
    }
    Write-Output ('PowerPoint opened successfully; rendered {0} slides to {1}' -f $taskSlideCount, $taskRenderRoot)
} finally {
    if ($null -ne $taskDeck) { $taskDeck.Close(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskDeck) }
    # Never close presentations that were already open in the user's app.
    if ($taskInitialPresentationCount -eq 0 -and $taskPowerPoint.Presentations.Count -eq 0) { $taskPowerPoint.Quit() }
    [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskPowerPoint)
}

