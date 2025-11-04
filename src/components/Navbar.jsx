import React, { useState } from 'react';
import { Rocket, Menu, X, Github, Twitter } from 'lucide-react';

const NavLink = ({ label, href }) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
  >
    {label}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Vibe App</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#features" label="Features" />
            <NavLink href="#showcase" label="Showcase" />
            <NavLink href="#pricing" label="Pricing" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              aria-label="Twitter"
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <Github size={18} />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              Get Started
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="flex flex-col gap-4 border-t border-slate-100 py-4">
              <NavLink href="#features" label="Features" />
              <NavLink href="#showcase" label="Showcase" />
              <NavLink href="#pricing" label="Pricing" />
              <NavLink href="#contact" label="Contact" />
              <a
                href="#cta"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
