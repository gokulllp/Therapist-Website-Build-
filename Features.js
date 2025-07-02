export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        <div className="bg-white p-6 rounded shadow"><h3 className="text-xl font-semibold">Fast</h3><p>Blazing fast performance with optimized assets.</p></div>
        <div className="bg-white p-6 rounded shadow"><h3 className="text-xl font-semibold">Reliable</h3><p>Built with stable frameworks and scalable design.</p></div>
        <div className="bg-white p-6 rounded shadow"><h3 className="text-xl font-semibold">Secure</h3><p>Modern security practices with HTTPS and validation.</p></div>
      </div>
    </section>
  )
}
