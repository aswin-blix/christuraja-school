import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="font-display text-7xl text-brand-100">404</p>
      <h1 className="mt-4 text-3xl text-brand-900">This page isn&apos;t on the campus map</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-600">
        The address may have changed with the new website. Try the home page or the admissions page.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Go to the home page</Button>
        <Button href="/admissions" variant="secondary">Admissions</Button>
      </div>
    </section>
  );
}
