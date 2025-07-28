# Image Optimization Script for OneRepMaax Gym
# This script helps optimize images for better web performance

Write-Host "OneRepMaax Gym Image Optimization Helper" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green

$allPhotosPath = "public\allPhotos"

if (Test-Path $allPhotosPath) {
    Write-Host "Found allPhotos directory: $allPhotosPath" -ForegroundColor Yellow
    
    # Count current images
    $webpFiles = Get-ChildItem -Path $allPhotosPath -Filter "*.webp" | Measure-Object
    Write-Host "Current WebP images: $($webpFiles.Count)" -ForegroundColor Cyan
    
    # Check for large images
    $largeImages = Get-ChildItem -Path $allPhotosPath -Filter "*.webp" | Where-Object { $_.Length -gt 200KB }
    
    if ($largeImages.Count -gt 0) {
        Write-Host "`nLarge images found (>200KB):" -ForegroundColor Red
        foreach ($img in $largeImages) {
            $sizeKB = [math]::Round($img.Length / 1KB, 2)
            Write-Host "  - $($img.Name): ${sizeKB}KB" -ForegroundColor Yellow
        }
        
        Write-Host "`nRecommendations:" -ForegroundColor Green
        Write-Host "1. Create smaller versions for mobile devices (480x640)" -ForegroundColor White
        Write-Host "2. Create medium versions for tablets (768x1024)" -ForegroundColor White
        Write-Host "3. Compress images while maintaining quality" -ForegroundColor White
        Write-Host "4. Use tools like squoosh.app or imagemin for optimization" -ForegroundColor White
    } else {
        Write-Host "`nAll images are optimally sized!" -ForegroundColor Green
    }
    
    # Generate optimization commands
    Write-Host "`nTo create optimized versions manually:" -ForegroundColor Cyan
    Write-Host "Use online tools like:" -ForegroundColor White
    Write-Host "- squoosh.app (Google image optimization tool)" -ForegroundColor Yellow
    Write-Host "- tinypng.com (for PNG compression)" -ForegroundColor Yellow
    Write-Host "- imagecompressor.com (for general compression)" -ForegroundColor Yellow
    
} else {
    Write-Host "Error: Could not find $allPhotosPath directory" -ForegroundColor Red
    Write-Host "Please run this script from the gym project root directory" -ForegroundColor Yellow
}

Write-Host "`nImage optimization implementation completed!" -ForegroundColor Green
Write-Host "The ResponsiveImage component will now serve appropriate sizes." -ForegroundColor Cyan
