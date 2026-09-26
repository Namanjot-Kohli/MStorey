const products = [
  {
    _id: "1",
    name: "Modern Grey Sofa",
    price: 19999,
    category: "Furniture",
    stock: 12,
    description:
      "Experience comfort and modern style with this Modern Grey Sofa, designed for contemporary living rooms and lounges. Its premium fabric upholstery provides a soft and comfortable seating experience, while the sturdy construction ensures reliable support for everyday use. The elegant grey finish blends easily with different interior styles and color schemes. With spacious seating and comfortable cushioning, this sofa is perfect for family gatherings, movie nights, casual conversations, and everyday relaxation. Whether you're furnishing a new home or upgrading your living room, it provides a practical combination of comfort, durability, and modern design.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },

  {
    _id: "2",
    name: "Wooden Study Table",
    price: 8999,
    category: "Furniture",
    stock: 8,
    description:
      "Create a comfortable and organized workspace with this Wooden Study Table, designed for students and professionals. Its spacious tabletop provides enough room for a laptop, books, notebooks, and everyday essentials, while the storage shelves help keep your workspace neat and organized. The durable wooden construction provides reliable support for regular use, while its clean design fits easily into modern rooms and home offices. Whether you're studying, working, writing, or organizing important documents, this table provides a practical and comfortable workspace. Its simple styling and useful storage make it a convenient addition to any productive setup.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
  },

  {
    _id: "3",
    name: "Office Chair Pro",
    price: 5499,
    category: "Furniture",
    stock: 20,
    description:
      "Enjoy comfortable and supportive seating with this Office Chair Pro, designed for workspaces, study areas, and home offices. Its ergonomic design provides useful lumbar support, while the adjustable height allows you to find a comfortable position for your desk. The cushioned seat and supportive backrest help provide comfort during long working or study sessions. Its durable construction makes it suitable for everyday office use, while the clean design fits naturally into modern workspaces. Whether you're working, studying, attending meetings, or spending hours at your computer, this chair provides a practical combination of comfort, support, adjustability, and reliable everyday performance.",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
  },

  {
    _id: "4",
    name: "Queen Size Bed",
    price: 24999,
    category: "Furniture",
    stock: 5,
    description:
      "Create a comfortable and stylish bedroom with this Queen Size Bed, built with premium engineered wood for reliable everyday use. Its spacious queen-size frame provides plenty of room for comfortable sleeping, while the clean design complements a variety of bedroom interiors. The sturdy construction offers dependable support and durability for long-term use. Its simple and elegant appearance works well with different mattresses, bedding styles, and room decorations. Whether you're furnishing a new bedroom or replacing an existing frame, this bed provides a practical combination of strength, comfort, spaciousness, and modern styling for a relaxing sleeping environment.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    _id: "5",
    name: "4-Door Wardrobe",
    price: 17999,
    category: "Furniture",
    stock: 6,
    description:
      "Keep your bedroom organized with this spacious 4-Door Wardrobe, designed to provide convenient storage for clothing, accessories, and everyday essentials. Its multiple compartments offer plenty of room for organizing different types of garments while keeping your belongings neatly arranged and easily accessible. The modern styling gives the wardrobe a clean appearance that fits naturally into contemporary bedroom interiors. Its durable construction provides dependable storage for regular household use. Whether you need space for shirts, trousers, dresses, jackets, or accessories, this wardrobe offers a practical storage solution. Its generous capacity and organized compartments make everyday storage simple and convenient.",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
  },

  {
    _id: "6",
    name: "Dining Table Set",
    price: 14999,
    category: "Furniture",
    stock: 4,
    description:
      "Experience elegant and comfortable dining with this 6-Seater Dining Table Set, designed for both family meals and everyday dining. Its solid wood construction delivers durability and reliable support, while the elegant finishing adds a stylish touch to your dining space. The spacious design provides comfortable seating for six people, making it ideal for family gatherings, dinners, and special occasions. With a sturdy build, comfortable seating, and timeless design, this dining set is built for long-term everyday use. Whether you're dining, hosting guests, or enjoying family time, it provides a perfect combination of style, comfort, and functionality.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    _id: "7",
    name: "Classic Denim Jacket",
    price: 2499,
    category: "Fashion",
    stock: 18,
    description:
      "Add a timeless casual style to your wardrobe with this Classic Denim Jacket, designed for comfortable everyday wear. Its durable denim construction provides a reliable outer layer while maintaining a stylish and versatile appearance. The comfortable fit makes it easy to wear over T-shirts, shirts, sweaters, and other casual outfits. Its classic finish pairs naturally with jeans, trousers, sneakers, and everyday footwear, making it suitable for different looks. Whether you're heading out with friends, running errands, traveling, or simply looking for an easy everyday layer, this jacket provides a practical combination of comfort, durability, versatility, and classic fashion for casual occasions.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },

  {
    _id: "8",
    name: "Professional Football",
    price: 1299,
    category: "Sports",
    stock: 25,
    description:
      "Take your training and recreational games to the next level with this Professional Football, designed for players who want reliable performance during regular practice and matches. Its durable construction is built for repeated use on suitable playing surfaces while maintaining a consistent feel during passes, shots, and ball control. The balanced design makes it suitable for beginners as well as experienced players looking to improve their skills. Whether you're practicing with teammates, playing a competitive match, or enjoying a casual game with friends, this football provides dependable performance for different playing situations and everyday training sessions.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
  },

  {
    _id: "9",
    name: "Nova X5 Smartphone",
    price: 18999,
    category: "Mobiles",
    stock: 10,
    description:
      "Stay connected and productive with the Nova X5 Smartphone, designed to provide a smooth everyday experience for communication, entertainment, and work. Its vibrant display delivers clear visuals for watching videos, browsing websites, viewing photos, and using applications. Powerful performance helps handle everyday multitasking, social media, streaming, and other common smartphone activities with ease. The long-lasting battery provides dependable usage throughout the day, reducing the need for frequent charging. Whether you're staying in touch, capturing moments, browsing online, watching content, or managing daily tasks, the Nova X5 combines practical performance, an immersive display, reliable battery life, and modern functionality.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },

  {
    _id: "10",
    name: "Wireless Bluetooth Speaker",
    price: 2499,
    category: "Electronics",
    stock: 16,
    description:
      "Enjoy convenient wireless audio with this Bluetooth Speaker, designed to deliver clear and enjoyable sound for everyday listening. Its compact design makes it easy to place around your home or carry to different locations, while Bluetooth connectivity allows you to connect smartphones, tablets, and other compatible devices without unnecessary cables. Whether you're listening to music, podcasts, videos, or other audio content, the speaker provides a practical way to enhance your experience. Its simple wireless operation makes it suitable for home use, small gatherings, travel, and everyday entertainment. With convenient connectivity and reliable audio performance, it is a versatile addition to any modern setup.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  },

  {
    _id: "11",
    name: "Kids Building Blocks",
    price: 799,
    category: "Kids",
    stock: 30,
    description:
      "Encourage creativity, imagination, and hands-on learning with this colorful Kids Building Blocks set, designed for enjoyable and engaging play. The variety of pieces allows children to experiment with different shapes, structures, and designs while developing creative thinking and problem-solving skills. Building and rebuilding different creations can also help improve concentration, coordination, and spatial awareness through playful activities. The set is suitable for independent play as well as fun activities with parents, siblings, or friends. Whether children are creating simple structures or imaginative designs, these building blocks provide an entertaining way to explore ideas and develop practical skills during everyday playtime.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
  },

  {
    _id: "12",
    name: "RGB Gaming Mouse",
    price: 1499,
    category: "Gaming",
    stock: 22,
    description:
      "Experience smooth and responsive gaming with this RGB Gaming Mouse, designed for both casual gamers and competitive players. Its precise sensor delivers accurate tracking and quick movements, while the adjustable DPI settings let you easily switch between different sensitivity levels. The customizable RGB lighting adds a stylish gaming aesthetic to your setup. With an ergonomic design, comfortable grip, and responsive buttons, this mouse is built for long gaming sessions as well as everyday computer use. Whether you're gaming, working, or browsing, it provides reliable performance and precise control whenever you need it.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },

  {
    _id: "13",
    name: "Premium Basmati Rice 5kg",
    price: 649,
    category: "Groceries",
    stock: 40,
    description:
      "Bring delicious and aromatic rice dishes to your everyday meals with this Premium Basmati Rice 5kg pack, made for convenient household cooking. Its long-grain basmati variety is known for its pleasant aroma, distinct texture, and versatility across different recipes. The rice can be used for everyday meals as well as special dishes such as biryani, pulao, fried rice, and other traditional recipes. The generous 5kg quantity makes it suitable for regular household use and helps maintain a convenient kitchen supply. Whether you're preparing a simple family meal or cooking for guests, this basmati rice provides dependable quality and versatile cooking performance.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },

  {
    _id: "14",
    name: "Cozy Cat Bed",
    price: 999,
    category: "Pets",
    stock: 14,
    description:
      "Give your cat a comfortable place to relax with this Cozy Cat Bed, designed for everyday resting and sleeping. Its soft construction provides a comfortable surface where cats can curl up, stretch, and enjoy peaceful downtime throughout the day. The compact design makes it easy to place in bedrooms, living rooms, quiet corners, or other areas where your pet enjoys spending time. Its comfortable shape creates a dedicated resting space while helping keep your pet's relaxation area separate from household furniture. Whether your cat uses it for quick naps, long sleeping sessions, or simply relaxing during the day, this pet bed provides a cozy and convenient place designed for everyday use.",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f",
  },

  {
    _id: "15",
    name: "A5 Hardcover Notebook",
    price: 299,
    category: "Stationery",
    stock: 50,
    description:
      "Keep your ideas, notes, plans, and everyday thoughts organized with this A5 Hardcover Notebook, designed for students, professionals, writers, and everyday use. Its durable hardcover provides a sturdy writing surface, while the ruled pages offer a clean layout for organized notes and writing. The convenient A5 size makes it easy to carry in a backpack, handbag, or work bag without taking up too much space. Whether you're taking classroom notes, preparing study material, maintaining a journal, planning tasks, or recording important ideas, this notebook provides a practical writing companion. Its simple and premium design makes it suitable for both personal and professional use.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
  },

  {
    _id: "16",
    name: "Hydrating Face Moisturizer",
    price: 599,
    category: "Skincare",
    stock: 35,
    description:
      "Keep your daily skincare routine simple with this Hydrating Face Moisturizer, designed to help skin feel soft, smooth, and refreshed. Its lightweight texture makes it convenient for regular use without leaving a heavy feeling on the skin. The moisturizer can easily be incorporated into everyday skincare routines and applied as part of a morning or evening regimen. Regular moisturizing helps maintain a comfortable and hydrated-feeling complexion, especially when skin feels dry or tight. Whether you're starting a basic skincare routine or adding a simple hydration step to your existing products, this moisturizer provides a convenient everyday option for maintaining soft, comfortable, and refreshed-feeling skin.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
];

export default products;