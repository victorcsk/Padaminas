// padaminas-website/src/pages/About.tsx

function About() {
  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      {/* Texto */}
      <div className="text-gray-700 text-lg space-y-6 text-justify">
        <p>
          Padaminas Brazilian Bakery was founded with a simple but powerful mission: to bring the authentic taste and warmth of Minas Gerais to New York. What started as a small passion project soon became a beloved destination for Brazilians and locals alike who longed for traditional flavors, comfort, and community.
        </p>
        <p>
          At the heart of this journey is <strong>Pedro Coelho</strong>, a respected figure in the Brazilian-American community. A visionary entrepreneur and a symbol of resilience, Pedro turned a dream into reality through hard work, integrity, and a deep connection to his roots. His dedication not only built a successful bakery but also created a space where people feel at home, miles away from Brazil.
        </p>
        <p>
          With freshly baked pão de queijo, sweet cakes, and savory snacks, Padaminas is more than just a bakery — it’s a tribute to tradition, family, and the immigrant spirit. Each recipe is a story. Each bite, a reminder of home.
        </p>
        <p>
          Today, the bakery continues to grow with branches in Connecticut, bringing the same quality and soul to new places, and staying committed to delivering joy, flavor, and warmth to every customer.
        </p>
      </div>

      {/* Galeria */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src="/images/about/about1.jpg"
          alt="Padaria real"
          className="w-full h-64 object-cover rounded shadow"
        />
        <img
          src="/images/about/about2.jpg"
          alt="Coxinha"
          className="w-full h-64 object-cover rounded shadow"
        />
        <img
          src="/images/about/about3.jpg"
          alt="Bolo de cenoura"
          className="w-full h-64 object-cover rounded shadow sm:col-span-2"
        />
      </div>
    </div>
  );
}

export default About;