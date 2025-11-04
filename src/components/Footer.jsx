import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#showcase" className="hover:text-slate-900">Showcase</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900">Docs</a></li>
              <li><a href="#" className="hover:text-slate-900">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Stay in the loop</h4>
            <p className="mt-3 text-sm text-slate-600">Join our newsletter for the latest updates.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Vibe Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
