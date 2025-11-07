import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7s-2w2F2LzM3ps7b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-sm text-gray-700 shadow-sm">
              Meet your universal access
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              One pass. Every app. Zero friction.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              All Pass is your single, secure key to the digital world. Sign in once, glide everywhere. Pay, access, and personalize across your favorite apps—all in one tap.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#get" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-black transition">Get All Pass</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50 transition">Explore features</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=120&auto=format&fit=crop" alt="user1" />
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" alt="user2" />
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" alt="user3" />
              </div>
              <p><span className="font-semibold">10,000+</span> people joined this month</p>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
    </section>
  );
}
