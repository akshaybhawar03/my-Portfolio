export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
      <p className="text-foreground/80">
        Want to collaborate or say hi? Email me at
        {" "}
        <a className="underline" href="mailto:you@example.com">you@example.com</a>.
      </p>
    </section>
  );
}
