import { useState } from "react";

const MenuSection = () => {
  const menu = {
    Beverages: [
      { id: 1, name: "Cold Drink", price: 40 },
      { id: 2, name: "Masala Cold Drink", price: 80 },
      { id: 3, name: "Fresh Lime Water", price: 60 },
      {
        id: 4,
        name: "Fresh Lime Soda (Salted)",
        price: 50,
      },
      {
        id: 14,
        name: "Fresh Lime Soda (Sweet)",
        price: 60,
      },
      {
        id: 15,
        name: "Fresh Lime Soda (Mixed)",
        price: 70,
      },
      { id: 5, name: "Chocolate Milkshake", price: 140 },
      { id: 6, name: "Oreo Milkshake", price: 160 },
      { id: 7, name: "Kit Kat Milkshake", price: 180 },
      { id: 8, name: "Virgin Mojito", price: 120 },
      { id: 9, name: "Blue Berry Mojito", price: 140 },
      { id: 10, name: "Kacha Aam Shake", price: 120 },
      {
        id: 11,
        name: "Pina Colada (with Ice Cream)",
        price: 160,
      },
      { id: 12, name: "Summer Chiller", price: 120 },
      { id: 13, name: "Red Berry Blast", price: 120 },
      { id: 906, name: "Hot Chocolate", price: "120" },
      { id: 907, name: "Cold Coffee", price: "120" },
      { id: 908, name: "Cold Coffee with Ice Cream", price: "140" },
    ],
  
   
    
    Dessert: [
      { id: 201, name: "Ice Cream (1 scoop)", price: "40" },
      { id: 204, name: "Ice Cream (2 scoops)", price: "80" },
      { id: 202, name: "Gulab Jamun (1 pc)", price: "40" },
      { id: 203, name: "Rasgulla (1 pc)", price: "30" },
    ],
    
  
    Bread: [
      { id: 17, name: "Tandoori Roti", price: "25 (Plain) / 30 (Butter)" },
      { id: 18, name: "Butter Naan", price: "45 (Plain) / 50 (Butter)" },
      { id: 19, name: "Masala Kulcha", price: "70" },
      { id: 27, name: "Plain Kulcha", price: "60" },
      { id: 29, name: "Mix Kulcha", price: "70" },
      { id: 28, name: "Paneer Kulcha", price: "70" },
      { id: 20, name: "Garlic Naan", price: "60" },
      { id: 21, name: "Missi Roti", price: "60" },
      { id: 22, name: "Paneer Paratha (2 pcs)", price: "140" },
      { id: 23, name: "Aloo Paratha", price: "60" },
      { id: 24, name: "Lachha Paratha", price: "50" },
      { id: 25, name: "Tawa Roti", price: "15 (Plain) / 20 (Butter)" },
      { id: 26, name: "Rumali Roti", price: "60 (Plain) / 70 (Butter)" },
      { id: 30, name: "Sattu Paratha", price: "50" },
    ],
  
  
    "Indian Starters": [
    
  
    { id: 12, name: "Paneer Pakoda", price: "150" },
    { id: 13, name: "Pyaz Pakoda", price: "120" },
    { id: 14, name: "Chicken Pakoda", price: "200" },
    { id: 15, name: "Egg Pakoda", price: "180" },
  
  
    {
      id: 16,
      name: "Cutlet",
      price: "150 (Veg) / 180 (Paneer) / 210 (Chicken)",
    },
  
    { id: 17, name: "Finger Fry", price: "130" },
  
    {
      id: 18,
      name: "Sandwich (Grill)",
      price: "100 (Veg) / 130 (Chicken)",
    },
  
    { id: 19, name: "Cheese Sandwich", price: "130" },
    { id: 20, name: "Corn Sandwich", price: "130" },
  
    { id: 21, name: "Veg Pakoda", price: "180" },
  ],
  
  
    "Chinese Starters(Veg/NonVeg)": [
    {
      id: 101,
      name: "Spring Roll",
      price: "150 (Veg) / 200 (Chicken)",
    },
  
    { id: 102, name: "American Corn Salt & Pepper", price: "200" },
    { id: 103, name: "Paneer Chilli Dry", price: "200" },
    { id: 131, name: "Paneer Chilli Gravy", price: "220" },
    { id: 104, name: "Baby Corn Chilli Dry", price: "200" },
    { id: 105, name: "Mushroom Chilli Dry", price: "240" },
    { id: 132, name: "Mushroom Chilli Gravy", price: "260" },
  
    { id: 106, name: "Paneer 65", price: "220" },
    { id: 107, name: "Chicken 65", price: "250" },
  
    { id: 108, name: "American Corn Chilli", price: "250" },
    { id: 109, name: "Potato Chilli", price: "150" },
    { id: 110, name: "Crispy Honey Chilli Potato", price: "180" },
  
    {
      id: 111,
      name: "Veg Manchurian",
      price: "180 (Dry) / 190 (Gravy)",
    },
  
    { id: 112, name: "Cheese Ball", price: "200" },
    { id: 113, name: "Cheese Nuggets", price: "220" },
  
    { id: 114, name: "Paneer Chinese Kasturi", price: "250" },
    {
      id: 115,
      name: "Paneer Drums of Heaven (4 pcs)",
      price: "250",
    },
  
    {
      id: 116,
      name: "Chicken Lollipop (4 pcs)",
      price: "300",
    },
  
    {
      id: 117,
      name: "Chicken Chilli Bone",
      price: "250",
    },
    {
      id: 133,
      name: "Chicken Chilli Boneless",
      price: "250",
    },
  
    { id: 118, name: "Mushroom Chinese Kasturi", price: "250" },
    { id: 134, name: "Paneer Baby Chilli", price: "240" },
    { id: 119, name: "Egg Chilli", price: "160" },
    { id: 120, name: "Mushroom Stick Chilli", price: "280" },
  
    {
      id: 121,
      name: "Veg Lollipop (6 pcs)",
      price: "230",
    },
  
    { id: 122, name: "Lemon Chicken", price: "260" },
    { id: 123, name: "Garlic Chicken Chilli", price: "270" },
    { id: 124, name: "Schezwan Chicken Chilli", price: "260" },
  
    { id: 125, name: "Paneer Manchurian", price: "220" },
    { id: 126, name: "Chicken Manchurian", price: "250" },
    { id: 127, name: "Mushroom Manchurian", price: "250" },
  
    { id: 128, name: "Mushroom Salt & Pepper", price: "220" },
    { id: 129, name: "Chicken Chinese Kasturi", price: "260" },
    { id: 130, name: "Chicken Crispy", price: "250" },
  ],
  
  
  Rice: [
    { id: 301, name: "Steam Rice", price: "120" },
    { id: 302, name: "Jeera Rice", price: "150" },
  
    {
      id: 303,
      name: "Fried Rice",
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
    { id: 312, name: "Mix Veg Fried Rice", price: "180" },
    { id: 313, name: "Chicken Mix Fried Rice", price: "200" },
    { id: 314, name: "Egg Fried Rice", price: "180" },
    { id: 315, name: "Veg Schezwan Fried Rice", price: "180" },
    { id: 318, name: "Chicken Schezwan Fried Rice", price: "200" },
    { id: 316, name: "Veg Pulao", price: "180" },
    { id: 317, name: "Peas Pulao", price: "200" },
    { id: 319, name: "Kashmiri Pulao", price: "220" },
    { id: 320, name: "Lemon Rice", price: "200" },
    { id: 321, name: "Shahi Pulao", price: "220" },
   
  ],
  
  
    "Chinese Noodles": [
    {
      id: 701,
      name: "Veg Hakka Noodles",
      price: "160 (Veg) / 200 (Non-Veg)",
    },
    { id: 702, name: "Paneer Noodles", price: "180" },
    { id: 703, name: "Veg Schezwan Noodles", price: "170" },
    { id: 704, name: "Chicken Schezwan Noodles", price: "220" },
    { id: 705, name: "Veg Mix Noodles", price: "180" },
    { id: 706, name: "Chicken Mix Noodles", price: "220" },
    { id: 707, name: "Egg Noodles", price: "180" },
  ],
  
    Salad: [
      { id: 501, name: "Onion Salad", price: "60" },
      { id: 502, name: "Green Salad", price: "100" },
      { id: 503, name: "Kachumber Salad", price: "60" },
      { id: 504, name: "Cucumber Salad", price: "80" },
      { id: 505, name: "Fruit Salad", price: "200" },
      { id: 506, name: "Papad", price: "20" },
      { id: 507, name: "Masala Papad", price: "50" },
    ],
    
  
    Raita: [
      { id: 801, name: "Mix Raita", price: "100" },
      { id: 802, name: "Pineapple Raita", price: "150" },
      { id: 803, name: "Onion Raita", price: "100" },
      { id: 804, name: "Curd Raita", price: "50" },
      { id: 805, name: "Boondi Raita", price: "100" },
    ],
    
  
    "Tea/Coffee": [
    { id: 901, name: "Black Tea", price: "50" },
    { id: 902, name: "Tea", price: "60" },
    { id: 903, name: "Coffee", price: "80" },
    { id: 906, name: "Black Coffee", price: "50" },
    { id: 904, name: "Masala Tea", price: "80" },
    { id: 905, name: "Green Tea", price: "50" },
    { id: 910, name: "Masala Kulhad Tea", price: "40" },
  ],
  
  "Dal": [
    { id: 1201, name: "Dal Fry", price: "120" },
    { id: 1202, name: "Dal Tadka", price: "150" },
    { id: 1203, name: "Yellow Dal Tadka", price: "140" },
    { id: 1204, name: "Dal Makhani", price: "160" },
   
  ],
  
  
  
    Soup: [
      { id: 601, name: "Veg Hot and Sour Soup", price: "Veg- 90 / Chicken- 120" },
      { id: 602, name: "Veg Manchow Soup", price: "Veg-110/ Chicken- 140" },
      { id: 603, name: "Garlic Soup", price: "100" },
      { id: 604, name: "Chicken Soup", price: "110" },
      { id: 610, name: "Veg Soup", price: "90" },
      { id: 605, name: "Lemon Coriander Soup", price: "100" },
      { id: 606, name: "Corn Soup", price: "100" },
      { id: 607, name: "Tomato Soup", price: "100" },
      { id: 608, name: "Veg Clear Soup", price: "90" },
      { id: 609, name: "Chicken Clear Soup", price: "100" },
    ],
    
  
   "Tandoor Starters": [
    { id: 1001, name: "Chicken Tikka (8 pcs)", price: "280" },
    { id: 1002, name: "Chicken Reshmi Tikka (8 pcs)", price: "300" },
    { id: 1003, name: "Chicken Kasturi Kebab (8 pcs)", price: "280" },
    { id: 1004, name: "Chicken Malai Tikka (8 pcs)", price: "280" },
    { id: 1005, name: "Chicken Kali Mirch Tikka (8 pcs)", price: "300" },
    { id: 1006, name: "Chicken Afghani Tikka (8 pcs)", price: "300" },
  
    { id: 1007, name: "Chicken Tangdi Kebab (2 pcs)", price: "250" },
  
    {
      id: 1008,
      name: "Chicken Tandoori",
      price: "300 (Two pcs) / 550 (Four pcs)",
    },
    {
      id: 1009,
      name: "Chicken Afghani",
      price: "300 (Two pcs) / 550 (Four pcs)",
    },
  
    { id: 1010, name: "Leg Kebab (2 pcs)", price: "350" },
  
    { id: 1011, name: "Paneer Tikka", price: "250" },
    { id: 1012, name: "Mushroom Tikka", price: "250" },
    { id: 1013, name: "Mushroom Stuffing", price: "280" },
  
    { id: 1014, name: "Veg Hara Bhara Kebab (8 pcs)", price: "250" },
    { id: 1015, name: "Paneer Achari Tikka (8 pcs)", price: "240" },
  
    { id: 1016, name: "Chicken Achari Tikka (8 pcs)", price: "300" },
    { id: 1017, name: "Chicken Garlic Tikka (8 pcs)", price: "300" },
    { id: 1018, name: "Chicken Mint Tikka (8 pcs)", price: "280" },
  
    { id: 1019, name: "Baby Corn Seekh Kebab", price: "250" },
    { id: 1020, name: "Veg Cocktail Kebab", price: "350" },
    { id: 1021, name: "Chicken Cocktail Kebab", price: "400" },
  ],
  
  
  
    "Indian Main Course": [
    { id: 401, name: "Chicken Handi", price: "250" },
    { id: 402, name: "Chicken Kadhai", price: "250" },
    { id: 403, name: "Chicken Do Pyaza", price: "240" },
    { id: 404, name: "Chicken Kashmiri", price: "260" },
    { id: 405, name: "Chicken Patiala", price: "270" },
    { id: 406, name: "Chicken Butter Masala", price: "280" },
    { id: 407, name: "Chicken Tikka Butter Masala", price: "350" },
    { id: 408, name: "Chicken Reshmi Butter Masala", price: "350" },
    { id: 409, name: "Chicken Bharta", price: "250" },
  
    { id: 410, name: "Chicken Dehati (4 pcs)", price: "270" },
    { id: 411, name: "Chicken Bhatinda (8 pcs)", price: "280" },
    { id: 412, name: "Chicken Curry (4 pcs)", price: "240" },
    { id: 413, name: "Chicken Methi (4 pcs)", price: "250" },
    { id: 414, name: "Chicken Masala (4 pcs)", price: "270" },
    { id: 415, name: "Chicken Kassa (4 pcs)", price: "250" },
  
    { id: 416, name: "Chicken Chatpata", price: "250" },
    { id: 417, name: "Chicken Maharaja", price: "300" },
    { id: 418, name: "Chicken Sultani (4 pcs)", price: "300" },
  
    { id: 419, name: "Egg Curry", price: "140" },
    { id: 420, name: "Egg Do Pyaza", price: "160" },
  
    { id: 421, name: "Mix Veg", price: "200" },
    { id: 422, name: "Veg JalFrezy", price: "240" },
    { id: 423, name: "Veg Kadhai", price: "250" },
    { id: 424, name: "Veg Kolhapuri", price: "200" },
  
    { id: 425, name: "Shahi Paneer", price: "280" },
    { id: 426, name: "Matar Paneer", price: "240" },
  { id: 427, name: "Chicken Lababdar", price: "270" },
  { id: 428, name: "Chicken Lucknowi", price: "270" },
  { id: 429, name: "Kadhai Paneer", price: "220" },
  { id: 430, name: "Paneer Handi", price: "240" },
  { id: 431, name: "Paneer Do Pyaza", price: "220" },
  { id: 432, name: "Paneer Chatpata", price: "220" },
  { id: 433, name: "Paneer HotPot", price: "250" },
  { id: 434, name: "Paneer Pasanda", price: "260" },
  { id: 435, name: "Paneer Hyderabadi", price: "250" },
  { id: 436, name: "Paneer Sultani", price: "250" },
  { id: 437, name: "Mushroom Masala", price: "220" },
  { id: 438, name: "Mushroom Do Pyaaza", price: "250" },
  { id: 439, name: "Mushroom Paneer", price: "250" },
  { id: 440, name: "Mushroom Butter Masala", price: "280" },
  { id: 441, name: "Paneer Butter Masala", price: "230" },
  { id: 442, name: "Mushroom Kadhai", price: "250" },
  { id: 443, name: "Paneer Tikka Butter Masala", price: "280" },
  { id: 444, name: "Mushroom Tikka Butter Masala", price: "280" }
  
  ],
  };

  const [active, setActive] = useState(Object.keys(menu)[0]);

  return (
    <section id="menu" className="bg-[#0b0b0b] text-white py-40">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.4em] text-amber-500 text-xs mb-4">
            What We Serve
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            A Taste of Authentic Flavours
          </h2>
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
              <span className="text-amber-500">₹{item.price}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;