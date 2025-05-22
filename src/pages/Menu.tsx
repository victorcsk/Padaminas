// src/pages/Menu.tsx

function Menu() {
  const items = [
    {
      name: "Grilled Cheese (Queijo Quente)",
      description: "Golden, crispy outside with gooey, melty cheese inside — comfort food at its finest.",
      price: "$4.50",
      image: "/images/menu/grilled-cheese.png",
    },
    {
      name: "Ham and Cheese (Misto Quente)",
      description: "Juicy ham, creamy cheese, perfectly grilled — a delicious classic with every bite.",
      price: "$5.00",
      image: "/images/menu/ham-cheese.png",
    },
    {
      name: "Bauru",
      description: "Traditional Brazilian sandwich with roast beef, tomatoes, and melted cheese on fresh bread.",
      price: "$6.00",
      image: "/images/menu/bauru.png",
    },
    {
      name: "BLT",
      description: "Bacon, lettuce, tomato on a toasted bun with flame-grilled flavor — the best of both worlds.",
      price: "$6.50",
      image: "/images/menu/blt.png",
    },
    {
      name: "Bacon and Egg",
      description: "Crispy bacon and sunny egg on a soft roll — a protein-packed start to your day.",
      price: "$5.00",
      image: "/images/menu/bacon-egg.png",
    },
  ];

  return (
    <div className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center bg-white shadow rounded overflow-hidden"
          >
            <div className="p-4 flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="mt-4 font-bold">{item.price}</p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-48 h-48 object-cover sm:rounded-r"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
