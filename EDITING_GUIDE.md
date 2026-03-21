# Editing Guide

This academic homepage is built with **Next.js**, **React**, and **Tailwind CSS**.

## 1. Updating Content (Profile, News, Publications)
All content is stored in a single file:  
`data/profile.ts`

- **English Content:** Edit the `profileEn` object.
- **Chinese Content:** Edit the `profileCn` object.
- **Shared Data:** If you have shared data (like links), ensure you update both if needed, or structured differently.
- **Labels:** The `labels` object inside `profileEn`/`profileCn` controls the UI text (e.g., "News", "Selected Publications").

## 2. Adding Publications
To add a publication, find the `publications` array in `data/profile.ts` and add a new object:
```typescript
{
  title: "New Paper Title",
  authors: ["Your Name", "Co-author"],
  conference: "CVPR 2026",
  year: "2026",
  pdfUrl: "/papers/new-paper.pdf", // Place PDF in 'public/papers/' folder
  codeUrl: "https://github.com/...",
  bibtex: "@inproceedings..."
}
```

## 3. Adding News
Find the `news` array in `data/profile.ts`:
```typescript
{ date: "May 2026", content: "Paper accepted to **ICML**!" }
```
Use `**text**` to make text bold.

## 4. UI Customization
- **Sidebar:** Edit `components/Sidebar.tsx`.
- **Home Page Layout:** Edit `app/page.tsx`.
- **Colors & Fonts:** Edit `tailwind.config.ts` or `app/globals.css`.
- **Icons:** We use `lucide-react`. You can import new icons in the relevant component.

## 5. Deployment
This is a static-compatible Next.js app.
1. Run `npm run build`.
2. The output is in `.next/`.
3. For GitHub Pages, you might need to configure `output: 'export'` in `next.config.js`.

## 6. Project Structure
- `app/`: Pages (Home, Projects, Publications).
- `components/`: Reusable UI components (Sidebar, PublicationCard).
- `context/`: Global state (LanguageContext).
- `data/`: Content data.
- `public/`: Static assets (images, PDFs).
