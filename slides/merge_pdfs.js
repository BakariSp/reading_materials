/**
 * 合并 slides/output 目录下的所有 PDF 文件
 * 按文件名排序后合并
 */

const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function mergePDFs() {
    const outputDir = path.join(__dirname, 'output');
    const outputFile = path.join(outputDir, 'paper-reading-full.pdf');
    
    // 获取所有 PDF 文件并排序
    const pdfFiles = fs.readdirSync(outputDir)
        .filter(f => f.endsWith('.pdf') && f !== 'paper-reading-full.pdf')
        .sort()
        .map(f => path.join(outputDir, f));
    
    if (pdfFiles.length === 0) {
        console.log('没有找到 PDF 文件！请先运行 marp 导出命令。');
        return;
    }
    
    console.log(`找到 ${pdfFiles.length} 个 PDF 文件：`);
    pdfFiles.forEach(f => console.log(`  - ${path.basename(f)}`));
    
    // 创建新的 PDF 文档
    const mergedPdf = await PDFDocument.create();
    
    // 逐个合并
    for (const pdfPath of pdfFiles) {
        console.log(`正在合并: ${path.basename(pdfPath)}`);
        const pdfBytes = fs.readFileSync(pdfPath);
        const pdf = await PDFDocument.load(pdfBytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
    }
    
    // 保存合并后的 PDF
    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputFile, mergedPdfBytes);
    
    console.log(`\n✅ 合并完成: ${outputFile}`);
}

mergePDFs().catch(console.error);

