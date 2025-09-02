import { Button } from '@/components/ui/button';

export default function HomePage() {
   return (
      <section className="space-y-6">
         <div>
            <h2 className="text-3xl font-bold tracking-tight">
               React + Vite + Tailwind + Tanstack Router + shadcn
            </h2>
            <p className="mt-2 text-muted-foreground">
               Production-ready boilerplate with routing, theming variables, and
               shadcn Button.
            </p>
         </div>

         <div className="flex gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
         </div>
      </section>
   );
}
