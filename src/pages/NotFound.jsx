import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-16">
      <h1 className="font-display text-8xl font-bold gradient-text">404</h1>
      <p className="mt-4 text-xl text-slate-900 font-semibold">Page not found</p>
      <p className="mt-2 text-slate-600 text-sm">The page you're looking for doesn't exist.</p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}