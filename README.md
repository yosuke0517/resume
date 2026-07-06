# Takeuchi Yosuke Resume

GitHub Pagesで公開するWeb版Resumeと、同じHTMLから生成するPDFを管理します。

## Commands

```bash
npm install
npm run dev
npm test
npm run build
npm run pdf
```

## Source

- Resume data: `src/resume-data.ts`
- Web layout: `src/main.tsx`
- Print/PDF style: `src/styles.css`
- Generated PDF: `dist/resume.pdf`

## Design Notes

読みやすさを優先し、冒頭に要点と現在技術をまとめ、詳細な職務経歴はタイムライン形式で整理しています。
Web版とPDF版が乖離しないよう、PDFはPlaywrightで同じHTMLから生成します。
