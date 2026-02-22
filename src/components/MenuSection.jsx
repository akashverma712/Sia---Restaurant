import { useState } from "react";

const MenuSection = () => {
  const menu = {
    Drinks: [
      { id: 1, name: "Cold Drink", price: 40 },
      { id: 2, name: "Masala Cold Drink", price: 80 },
      { id: 3, name: "Fresh Lime Water", price: 80 },
      { id: 4, name: "Fresh Lime Soda (Sweet / Salted / Mixed)", price: 140 },
      { id: 5, name: "Chocolate Milkshake", price: 140 },
      { id: 6, name: "Oreo Milkshake", price: 140 },
      { id: 7, name: "Kit Kat Milkshake", price: 180 },
      { id: 8, name: "Virgin Mojito", price: 120 },
      { id: 9, name: "Blue Berry Mojito", price: 140 },
      { id: 10, name: "Kacha Aam Shake", price: 120 },
      { id: 11, name: "Pina Colada (Pineapple Ice Cream)", price: 160 },
      { id: 12, name: "Summer Cooler", price: 120 },
      { id: 13, name: "Red Berry Blast", price: 120 },
    ],

    Dessert: [
      { id: 201, name: "Ice Cream (2 scoops)", price: "80" },
      { id: 202, name: "Gulab Jamun (1 pc)", price: "40" },
      { id: 203, name: "Rasgulla (2 pcs)", price: "30" },
    ],

    Bread: [
      { id: 17, name: "Tandoori Roti", price: "₹25 (Plain) / ₹30 (Butter)" },
      { id: 18, name: "Butter Naan", price: "₹50" },
      {
        id: 19,
        name: "Masala Kulcha",
        price: "₹60 (Plain) / ₹65 (Butter) / ₹70 (Stuffed)",
      },
      { id: 20, name: "Garlic Naan", price: "₹60" },
      { id: 21, name: "Missi Roti", price: "₹50" },
      { id: 22, name: "Paneer Paratha (2 pcs)", price: "₹140" },
      { id: 23, name: "Aloo Paratha", price: "₹60" },
      { id: 24, name: "Lachha Paratha", price: "₹50" },
      { id: 25, name: "Tawa Roti", price: "₹15 (Plain) / ₹20 (Butter)" },
      { id: 26, name: "Roomali Roti", price: "₹60 (Plain) / ₹70 (Butter)" },
    ],

    "Indian Starters": [
      { id: 11, name: "Paneer Tikka", price: "220" },
      { id: 12, name: "Paneer Pakoda", price: "150" },
      { id: 13, name: "Pyaz Pakoda", price: "120" },
      { id: 14, name: "Chicken Pakoda", price: "200" },
      { id: 15, name: "Fish Pakoda", price: "180" },
      {
        id: 16,
        name: "Egg Cutlet",
        price: "150 (Veg) / 180 (Paneer) / 210 (Chicken)",
      },
      { id: 17, name: "Finger Fry", price: "130" },
      {
        id: 18,
        name: "Veg Sandwich (Grill)",
        price: "100 (Veg) / 130 (Chicken)",
      },
      { id: 19, name: "Cheese Sandwich", price: "130" },
      { id: 20, name: "Corn Sandwich", price: "130" },
      { id: 21, name: "Veg Pakoda", price: "180" },
    ],

    "Chinese Starters": [
      { id: 101, name: "Spring Roll", price: "150 (Veg) / 200 (Chicken)" },
      { id: 102, name: "American Corn Salt & Pepper", price: "200" },
      { id: 103, name: "Paneer Chilli", price: "200" },
      { id: 104, name: "Baby Corn Chilli Dry", price: "200" },
      { id: 105, name: "Mushroom Chilli Dry", price: "260" },
      { id: 106, name: "Paneer 65", price: "220" },
      { id: 107, name: "Chicken 65", price: "250" },
      { id: 108, name: "American Corn Chilli", price: "250" },
      { id: 109, name: "Potato Chilli", price: "150" },
      { id: 110, name: "Heavy Chilli Potato", price: "180" },
      {
        id: 111,
        name: "Veg Manchurian",
        price: "180 (Baked) / 190 (Grilled)",
      },
      { id: 112, name: "Cheese Ball", price: "200" },
      { id: 113, name: "Cheese Nuggets", price: "180" },
      { id: 114, name: "Paneer Chinese Kasturi", price: "250" },
      {
        id: 115,
        name: "Paneer Drums of Heaven (4 pcs)",
        price: "250",
      },
      { id: 116, name: "Chicken Lollipop (4 pcs)", price: "300" },
      { id: 117, name: "Chicken Chilli Bones", price: "240 / 250" },
      { id: 118, name: "Mushroom Chilli Kasturi", price: "250" },
      { id: 119, name: "Egg Chilli", price: "160" },
      { id: 120, name: "Mushroom Stick Chilli", price: "280" },
      { id: 121, name: "Veg Lollipop (6 pcs)", price: "230" },
      { id: 122, name: "Lemon Chicken", price: "260" },
      { id: 123, name: "Garlic Chicken Chilli", price: "270" },
      { id: 124, name: "Szechuan Chicken Chilli", price: "260" },
      { id: 125, name: "Pan Manchurian", price: "220" },
      { id: 126, name: "Chilli Manchurian", price: "250" },
      { id: 127, name: "Mas-Manchurian", price: "250" },
      { id: 128, name: "Mutton Salt & Pepper", price: "220" },
      { id: 129, name: "Chicken Chilli Kasturi", price: "260" },
      { id: 130, name: "Chicken Crispy", price: "250" },
    ],

    Rice: [
      { id: 301, name: "Steam Rice", price: "120" },
      { id: 302, name: "Jeera Rice", price: "150" },
      {
        id: 303,
        name: "Veg Fried Rice",
        price: "160 (Veg) / 200 (Non-Veg)",
      },
      {
        id: 304,
        name: "Schezwan Fried Rice",
        price: "180 (Veg) / 220 (Non-Veg)",
      },
      { id: 305, name: "Veg Biryani", price: "200" },
      { id: 306, name: "Chicken Biryani", price: "250" },
      { id: 307, name: "Egg Biryani", price: "200" },
      {
        id: 308,
        name: "Hyderabadi Biryani",
        price: "250 (Veg) / 280 (Chicken)",
      },
      { id: 309, name: "Paneer Biryani", price: "250" },
      { id: 310, name: "Paneer Tikka Biryani", price: "300" },
      { id: 311, name: "Chicken Tikka Biryani", price: "300" },
    ],

    Salad: [
      { id: 501, name: "Onion Salad", price: "60" },
      { id: 502, name: "Green Salad", price: "100" },
      { id: 503, name: "ABC Salad", price: "60" },
      { id: 504, name: "Cucumber Salad", price: "100" },
      { id: 505, name: "Fruit Salad", price: "200" },
      { id: 506, name: "Papad", price: "20" },
      { id: 507, name: "Masala Papad", price: "50" },
    ],

    Raita: [
      { id: 801, name: "Mix Raita", price: "100" },
      { id: 802, name: "Pineapple Raita", price: "150" },
      { id: 803, name: "Onion Raita", price: "100" },
      { id: 804, name: "Curd Raita", price: "50" },
      { id: 805, name: "ABC Raita", price: "100" },
    ],

    Soup: [
      { id: 601, name: "Veg Hot and Sour Soup", price: "120" },
      { id: 602, name: "Veg Manchow Soup", price: "140" },
      { id: 603, name: "Garlic Soup", price: "100" },
      { id: 604, name: "Chi Soup", price: "110" },
      { id: 605, name: "Lemon Coriander Soup", price: "100" },
      { id: 606, name: "Corn Soup", price: "100" },
      { id: 607, name: "Tomato Soup", price: "100" },
      { id: 608, name: "ABC Soup", price: "90" },
      { id: 609, name: "XYZ Soup", price: "100" },
    ],

    "Indian Main Course": [
      { id: 401, name: "Chicken Handi", price: "250" },
      { id: 402, name: "Chicken Kadhai", price: "250" },
      { id: 403, name: "Chicken Do Pyaza", price: "240" },
      { id: 404, name: "Chicken Kashmiri", price: "260" },
      { id: 405, name: "Chicken Patiala", price: "270" },
      { id: 406, name: "Chicken Masala", price: "280" },
      { id: 407, name: "Chicken Tikka Masala", price: "350" },
      { id: 408, name: "Chicken Qeshmi Masala", price: "350" },
      { id: 409, name: "Chicken Bharta", price: "250" },
      { id: 419, name: "Egg Curry", price: "140" },
      { id: 420, name: "Egg Do Pyaza", price: "160" },
      { id: 421, name: "Mix Veg", price: "200" },
      { id: 422, name: "Veg Jhal Frenzy", price: "240" },
      { id: 423, name: "Veg Kadhai", price: "250" },
      { id: 424, name: "Veg Kolhapuri", price: "200" },
      { id: 425, name: "Shahi Paneer", price: "250" },
      { id: 426, name: "Matar Paneer", price: "240" },
    ],
  };

  const [active, setActive] = useState(Object.keys(menu)[0]);

  return (
    <section id = 'menu' className="bg-[#0b0b0b] text-white py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.4em] text-amber-500 text-xs mb-4">
            What We Serve
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            A Taste of Authentic Flavours
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From refreshing beverages and sizzling starters to hearty main
            courses and indulgent desserts — every dish is crafted to delight.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {Object.keys(menu).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs uppercase tracking-widest pb-2 ${
                active === cat
                  ? "text-amber-500 border-b border-amber-500"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {menu[active].map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b border-white/10 pb-4"
            >
              <span>{item.name}</span>
              <span className="text-amber-500">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;