export default function CTA() {
  return (
    <section id="get" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get All Pass today</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Join the access revolution. Be among the first to experience seamless sign-ins, secure payments, and portable preferences.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-black transition">Download for iOS</a>
          <a href="#download" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50 transition">Download for Android</a>
        </div>
        <p className="mt-6 text-xs text-gray-500">Free during beta. No credit card required.</p>
      </div>
    </section>
  );
}
