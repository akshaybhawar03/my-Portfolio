export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/10 py-8 text-center text-sm text-foreground/60 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        © {new Date().getFullYear()} Akshay Bhawar. All rights reserved.
      </div>
    </footer>
  );
}
