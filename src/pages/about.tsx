export default function AboutPage() {
   return (
      <section className="prose dark:prose-invert max-w-none">
         <h2 className="text-3xl font-bold tracking-tight">About This</h2>

         <p>
            This starter wires up Vite, React, TypeScript, TailwindCSS,
            shadcn/ui, and TanStack Router. Extend with your own components
            using shadcn CLI or by copying patterns from{' '}
            <code>src/components/ui</code>.
         </p>
         <h3>What’s included</h3>
         <ul>
            <li>
               Folder aliases (<code>@/*</code>).
            </li>
            <li>Husky pre-commit with Prettier.</li>
            <li>
               Basic design tokens via CSS variables and dark mode support.
            </li>
         </ul>
      </section>
   );
}
