import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              New: Beautifully crafted UI kit included
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Build delightful frontends faster with a modern stack
            </h1>
            <p className="mt-4 max-w-prose text-slate-600">
              Ship pixel-perfect experiences with React, Tailwind, and a clean component architecture. Responsive, accessible, and a joy to work with.
            </p>

            <div id="cta" className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                See Examples
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Star className="text-amber-500" size={14} />
                <span>Trusted by creators</span>
              </div>
              <span>•</span>
              <span>No setup hassle</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-12 -z-0 bg-gradient-to-tr from-indigo-200/50 via-fuchsia-200/50 to-rose-200/40 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2069&auto=format&fit=crop"
                  alt="App preview"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-lg bg-slate-100" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
