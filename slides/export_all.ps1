# 批量导出所有论文幻灯片为 PDF

$files = @(
    @{src="slides/paper-reading.md"; out="slides/output/00-paper-reading.pdf"},
    @{src="slides/papers/dspy.md"; out="slides/output/01-dspy.pdf"},
    @{src="slides/papers/metacognitive-prompting.md"; out="slides/output/02-metacognitive-prompting.pdf"},
    @{src="slides/papers/johnny-prompt.md"; out="slides/output/03-johnny-prompt.pdf"},
    @{src="slides/papers/genai-metacognition.md"; out="slides/output/04-genai-metacognition.pdf"},
    @{src="slides/papers/human-ai-essay-scoring.md"; out="slides/output/05-human-ai-essay-scoring.pdf"},
    @{src="slides/papers/cognition-human-ai-alignment.md"; out="slides/output/06-cognition-human-ai-alignment.pdf"},
    @{src="slides/papers/personalising-ai-overreliance.md"; out="slides/output/07-personalising-ai-overreliance.pdf"}
)

foreach ($file in $files) {
    Write-Host "正在导出: $($file.src) -> $($file.out)"
    npx @marp-team/marp-cli $file.src --pdf --theme themes/academic.css --allow-local-files -o $file.out
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 完成: $($file.out)" -ForegroundColor Green
    } else {
        Write-Host "❌ 失败: $($file.src)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "所有文件导出完成！" -ForegroundColor Cyan
Write-Host "运行 'node slides/merge_pdfs.js' 合并所有 PDF"

