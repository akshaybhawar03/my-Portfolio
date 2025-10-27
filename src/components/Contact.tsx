"use client";

import Link from "next/link";
import { FiArrowRight, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Failed to send');
      setResult({ type: 'success', message: 'Message sent! I will get back to you soon.' });
      setToast({ type: 'success', message: 'Your message was sent successfully.' });
      form.reset();
      setTimeout(() => setOpen(false), 1200);
    } catch (err: any) {
      setResult({ type: 'error', message: err?.message || 'Something went wrong. Please try again.' });
      setToast({ type: 'error', message: err?.message || 'Failed to send message.' });
    } finally {
      setSubmitting(false);
    }
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);
  return (
    <section id="contact" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-700/40 bg-linear-to-b from-[#0D1B2A] to-[#13293D] text-white">
          <div className="flex items-center justify-between gap-4 p-5 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-100">
              GOT A PROJECT IN MIND?
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/70 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors"
            >
              CONTACT ME
              <FiArrowRight className="hidden sm:block" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-2xl rounded-2xl border border-gray-700/50 bg-linear-to-b from-[#0D1B2A] to-[#13293D] text-white p-5 sm:p-8">
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              <FiX />
            </button>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200 underline underline-offset-4">
              BOOK A CALL?
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs text-gray-300">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-amber-400/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-300">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-amber-400/60"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-amber-400/60"
                  placeholder="Tell me a bit about your project..."
                />
              </div>
              {result && (
                <p className={`${result.type === 'success' ? 'text-emerald-400' : 'text-red-400'} text-sm`}>{result.message}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full rounded-md bg-white/10 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/15 border border-white/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <div className={`fixed bottom-4 right-4 z-50 rounded-lg border px-4 py-3 shadow-lg ${toast.type === 'success' ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-200' : 'bg-red-600/20 border-red-500/40 text-red-200'}`}>
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}
    </section>
  );
}
