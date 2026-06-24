function Testimoinal() {
  return (
    <div>
      <section className="py-5 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-5">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Absolutely amazing!",
              "The scents last forever.",
              "Beautiful packaging!",
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-3 shadow">
                ⭐⭐⭐⭐⭐
                <p className="mt-3 italic">"{review}"</p>
                <h4 className="mt-3 font-bold">Happy Customer</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimoinal;
