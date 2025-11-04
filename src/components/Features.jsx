import React from 'react';
import { Shield, Zap, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-indigo-600" size={20} />,
    title: 'Beautiful by default',
    desc: 'Elegant typography, gentle gradients, and purposeful spacing that look great out of the box.'
  },
  {
    icon: <Zap className="text-fuchsia-600" size={20} />,
    title: 'Lightning-fast',
    desc: 'Vite-powered development with instant feedback and production-grade builds.'
  },
  {
    icon: <Layers className="text-emerald-600" size={20} />,
    title: 'Composable components',
    desc: 'Small, focused building blocks you can mix and match for any interface.'
  },
  {
    icon: <Shield className="text-slate-700" size={20} />,
    title: 'Accessible & robust',
    desc: 'Keyboard-friendly, screen reader aware, and built with best practices throughout.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Everything you need to move fast
            </h2>
            <p className="mt-2 max-w-prose text-slate-600">
              Thoughtfully designed components and patterns that help you ship more with less.
            </p>
          </div>
          <a href="#pricing" className="hidden rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-flex">
            Pricing
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-slate-50 p-2">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
