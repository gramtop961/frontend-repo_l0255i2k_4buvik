import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Simple, transparent pricing</h2>
            <p className="mt-2 text-slate-600">Start free and upgrade when you grow.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-slate-600">For personal projects</p>
              <div className="mt-6 text-3xl font-bold">$0<span className="text-base font-medium text-slate-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• 3 projects</li>
                <li>• Community support</li>
                <li>• Basic components</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
                Get started
              </a>
            </div>

            <div className="relative rounded-2xl border-2 border-indigo-500 bg-gradient-to-b from-indigo-50 to-white p-6 shadow-md">
              <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">Popular</div>
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-slate-600">For growing teams</p>
              <div className="mt-6 text-3xl font-bold">$19<span className="text-base font-medium text-slate-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• Unlimited projects</li>
                <li>• Priority support</li>
                <li>• Full component library</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                Upgrade to Pro
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-1 text-sm text-slate-600">For organizations</p>
              <div className="mt-6 text-3xl font-bold">Custom</div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• Security reviews</li>
                <li>• SSO & custom SLAs</li>
                <li>• Dedicated support</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
                Contact sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
