
const coffees = [
    {
      title: "Iced Matcha Green Tea",
      poster: "images/icedmatcha.jpeg",
      bulletPoints: ["Ceremonial Grade Powder", "Organic", "Vegan"],
      description: "Made from premium ceremonial grade matcha, this vibrant green tea is packed with antioxidants and has a naturally earthy, slightly grassy flavor. Blended over ice with your choice of milk, it's refreshing, energizing, and a perfect alternative to coffee without the crash.",
      category: ["Iced Drinks", "Non-Coffee"]
    },
    {
      title: "Iced Chai Latte",
      poster: "images/icedchai.jpeg",
      bulletPoints: ["Cinnamon Powder", "Spicy", "Black Tea Base"],
      description: "A bold and spicy iced beverage made by steeping robust black tea with a blend of warm spices like cinnamon, cardamom, and cloves. Combined with milk and poured over ice, it offers a rich, creamy texture with just enough spice to awaken your senses.",
      category: ["Iced Drinks", "Herbal"]
    },
    {
      title: "Iced Pumpkin Spice Latte",
      poster: "images/icedpumpkinspice.jpg",
      bulletPoints: ["Pumpkin Puree", "Cinnamon", "Nutmeg", "Espresso"],
      description: "A beloved seasonal classic made with real pumpkin puree, aromatic spices, and a bold shot of espresso. Served over ice with milk, this drink captures the cozy essence of fall with every sip — creamy, spicy, and perfectly sweet.",
      category: ["Iced Drinks", "Seasonal"]
    },
    {
      title: "Hot Golden Chai Latte",
      poster: "images/hotgoldenchai.jpeg",
      bulletPoints: ["Turmeric", "Spicy", "Unsweetened", "Coconut Milk"],
      description: "A soothing, anti-inflammatory drink made with turmeric, ginger, black pepper, and cinnamon, all blended into warm coconut milk. This earthy and slightly spicy latte is a popular wellness drink that aids digestion, reduces inflammation, and feels like a hug in a mug.",
      category: ["Hot Drinks", "Herbal"]
    },
    {
      title: "Hot Caramel Latte",
      poster: "images/hotcaramel.jpeg",
      bulletPoints: ["Espresso", "Steamed Milk", "Organic Caramel Syrup"],
      description: "A rich and smooth blend of espresso and steamed milk, elevated with a generous swirl of organic caramel syrup. This drink is ideal for those who crave something sweet and indulgent, yet balanced by the bitterness of freshly pulled espresso.",
      category: ["Hot Drinks"]
    },
    {
      title: "Vanilla Cold Brew",
      poster: "images/vanillacoldbrew.jpeg",
      bulletPoints: ["Cold Brew", "Vanilla Syrup"],
      description: "Crafted from slow-steeped coarse ground beans, this cold brew is incredibly smooth, bold, and low in acidity. Infused with a touch of natural vanilla syrup, it delivers a clean, crisp flavor profile that’s perfect for long, warm days or a morning productivity boost.",
      category: ["Iced Drinks"]
    },
    {
      title: "Classic Hot Americano",
      poster: "images/hotamericano.jpeg",
      bulletPoints: ["Espresso", "Hot Water"],
      description: "A pure and simple combination of espresso shots topped with hot water, producing a robust and full-bodied cup that’s less acidic than drip coffee but just as energizing. It's a no-fuss favorite for coffee purists who appreciate deep flavor without cream or sugar.",
      category: ["Hot Drinks"]
    },
    {
      title: "Mocha Frappe",
      poster: "images/mochafrappe.jpeg",
      bulletPoints: ["Espresso", "Chocolate Syrup", "Ice", "Whipped Cream"],
      description: "This frosty blend of rich chocolate, bold espresso, and crushed ice is the ultimate frozen indulgence. Topped with whipped cream and a drizzle of chocolate sauce, it's part dessert, part coffee, and entirely addictive.",
      category: ["Iced Drinks", "Seasonal"]
    },
    {
      title: "Honey Lavender Latte",
      poster: "images/honeylavender.jpeg",
      bulletPoints: ["Lavender Syrup", "Honey", "Oat Milk"],
      description: "A floral, naturally sweetened latte crafted with soothing lavender syrup and a hint of golden honey. Made with steamed oat milk, this drink is calming, aromatic, and beautifully balanced—ideal for a slow morning or relaxing afternoon.",
      category: ["Hot Drinks", "Herbal"]
    },
    {
      title: "Iced Brown Sugar Oat Latte",
      poster: "images/brownsugaroat.jpeg",
      bulletPoints: ["Brown Sugar", "Oat Milk", "Cinnamon", "Espresso", "Ice"],
      description: "Combining smooth oat milk with deeply caramelized brown sugar and cinnamon, this iced latte is rich, creamy, and perfectly spiced. The espresso adds depth, while the ice keeps it refreshingly cool and light.",
      category: ["Iced Drinks"]
    },
    {
      title: "Espresso Macchiato",
      poster: "images/espressomacchiato.jpeg",
      bulletPoints: ["Double Espresso", "Foamed Milk"],
      description: "An intense coffee drink where bold espresso is 'stained' with just a touch of silky foam. It's a small but mighty choice for those who want all the flavor of espresso with just a hint of creaminess.",
      category: ["Hot Drinks"]
    },
    {
      title: "Strawberry Iced Tea",
      poster: "images/strawberryicedtea.jpeg",
      bulletPoints: ["Herbal Tea", "Strawberry", "Caffeine-Free"],
      description: "Bright and fruity, this refreshing herbal tea is brewed with real strawberries and served over ice. It’s sweet without being overpowering and is entirely caffeine-free, making it perfect for any time of day.",
      category: ["Iced Drinks", "Fruit-Based", "Non-Coffee"]
    },
    {
      title: "Cinnamon Roll Latte",
      poster: "images/cinnamonroll.jpeg",
      bulletPoints: ["Cinnamon Syrup", "Frothy Milk", "Sweet Cream", "Espresso"],
      description: "Inspired by the warm and cozy flavor of freshly baked cinnamon rolls, this sweet latte is layered with spicy cinnamon, espresso, and silky milk. Topped with a dollop of sweet cream, it's like dessert in a cup.",
      category: ["Hot Drinks"]
    },
    {
      title: "Peppermint Mocha",
      poster: "images/peppermintmocha.jpeg",
      bulletPoints: ["Chocolate", "Peppermint Syrup", "Whipped Cream"],
      description: "A seasonal delight that combines dark chocolate, cool peppermint syrup, and robust espresso. Finished with whipped cream and a dusting of cocoa powder, it’s festive, cozy, and refreshingly rich.",
      category: ["Hot Drinks", "Seasonal"]
    },
    {
      title: "Cold Brew with Sweet Cream",
      poster: "images/sweetcream.jpeg",
      bulletPoints: ["Cold Brew", "Vanilla Sweet Cream"],
      description: "A bold, deeply flavored cold brew topped with a house-made vanilla sweet cream that slowly melts into the coffee as you sip. It's smooth, sweet, and a favorite for coffee lovers who like it chilled and strong.",
      category: ["Iced Drinks"]
    },
    {
      title: "Almond Milk Cappuccino",
      poster: "images/almondmilkcappuccino.jpeg",
      bulletPoints: ["Almond Milk", "Espresso", "Foamed Top"],
      description: "This dairy-free take on the classic cappuccino features robust espresso under a thick cap of almond milk foam. The nutty flavor of almond milk pairs beautifully with the espresso’s strength, making it light but bold.",
      category: ["Hot Drinks", "Non-Dairy"]
    },
    {
      title: "Taro Milk Tea",
      poster: "images/taro.jpeg",
      bulletPoints: ["Taro", "Milk", "Sweet", "Purple"],
      description: "A creamy, pastel-purple tea made from taro root, known for its sweet and nutty vanilla-like flavor. Served iced with or without tapioca pearls, this drink is a fan-favorite in the world of milk teas.",
      category: ["Iced Drinks", "Non-Coffee"]
    },
    {
      title: "Hot London Fog",
      poster: "images/londonfog.jpeg",
      bulletPoints: ["Earl Grey", "Vanilla", "Steamed Milk"],
      description: "This elegant tea latte blends fragrant Earl Grey tea with hints of vanilla and silky steamed milk. Smooth and slightly citrusy, it's comforting, refined, and a popular alternative to coffee-based lattes.",
      category: ["Hot Drinks", "Herbal"]
    },
    {
      title: "Rose Iced Tea",
      poster: "images/rose.jpeg",
      bulletPoints: ["Rose Petals", "Hibiscus", "Lightly Sweet", "Caffeine-Free"],
      description: "A delicate and fragrant iced tea made with real rose petals and hibiscus flowers. Lightly sweet and caffeine-free, it’s refreshing, floral, and a gorgeous pink-red hue that looks as lovely as it tastes.",
      category: ["Iced Drinks", "Fruit-Based", "Non-Coffee"]
    },
    {
      title: "Hot Hazelnut Latte",
      poster: "images/hazelnut.jpeg",
      bulletPoints: ["Hazelnut Syrup", "Espresso", "Steamed Milk", "Foam"],
      description: "A warm and comforting latte enhanced with rich hazelnut syrup. The espresso is mellowed by the sweetness, while the milk and foam add a velvety texture. It’s the perfect blend of nutty and smooth.",
      category: ["Hot Drinks"]
    }
  ];
  
  
  const categories = ["Iced Drinks", "Hot Drinks", "Seasonal", "Herbal", "Fruit-Based", "Non-Coffee"]; 
