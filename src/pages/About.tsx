// padaminas-website/src/pages/About.tsx

function About() {
  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      {/* Texto */}
      <div className="text-gray-700 text-lg space-y-6 text-justify">
        <p>
          <strong>Over 20 years of flavor, warmth, and tradition.</strong>
        </p>
        <p>
          Padaminas Brazilian Bakery was founded more than two decades ago with a simple but powerful mission: to bring the authentic taste and warmth of Minas Gerais to New York. What began as a humble dream soon blossomed into a beloved destination for Brazilians and locals alike, offering traditional flavors, comfort, and a strong sense of community.
        </p>
        <p>
          At the center of this story is <strong>Pedro Coelho</strong> — a respected entrepreneur and symbol of resilience in the Brazilian-American community. Through hard work, integrity, and deep-rooted pride in his culture, Pedro turned Padaminas into more than a bakery. He created a space that feels like home, even thousands of miles from Brazil.
        </p>
        <p>
          From our famous <em>pão de queijo</em> to sweet cakes and savory delights, Padaminas is a tribute to heritage, family, and the immigrant spirit. Each recipe carries a story. Each bite brings a memory.
        </p>
        <p>
          Today, with branches in New York and Connecticut, Padaminas proudly continues its journey — committed to serving quality, spreading joy, and sharing the flavors of Brazil for generations to come.
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
