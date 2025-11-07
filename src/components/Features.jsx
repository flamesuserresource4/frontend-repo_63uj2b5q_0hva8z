import { Shield, Sparkles, Wallet, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Private by design',
    desc: 'End-to-end encrypted identity vault keeps your data safe while you sign in anywhere.'
  },
  {
    icon: Wallet,
    title: 'Pay once, access everywhere',
    desc: 'Built-in wallet that lets you unlock premium features across partner apps with one pass.'
  },
  {
    icon: Zap,
    title: 'Instant logins',
    desc: 'Skip passwords and OTPs. Approve with Face ID or fingerprint and you are in.'
  },
  {
    icon: Sparkles,
    title: 'Personalized experiences',
    desc: 'Your preferences follow you securely so every app feels just right from the start.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why All Pass</h2>
          <p className="mt-4 text-gray-600">A simple, secure way to sign in, pay, and personalize across the apps you love.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gray-900 text-white grid place-items-center shadow group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
