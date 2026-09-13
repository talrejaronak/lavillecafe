// ============================================================
// MENU DATA — edit this file to add, remove, or change dishes
// ============================================================
//
// TO ADD OR EDIT A DISH:
//   Add/edit an object in MENU_ITEMS below. Fields:
//     id          - unique string, no spaces (used internally, don't duplicate)
//     category    - must match a "key" in CATEGORIES below
//     name        - dish name shown on the card
//     description - short one-line description shown under the name
//     price       - number, in rupees (no ₹ symbol, no commas)
//     veg         - true = green dot, false = red dot
//     popular     - true = shows in the "Popular Right Now" section + badge
//     image       - path to a local photo, e.g. "assets/images/starters-cheese-balls.jpg"
//                   Name each file after the item's "id" below so it's obvious which
//                   photo belongs to which dish. Leave as null to show the default
//                   icon placeholder until you have a photo — the layout never breaks
//                   or shows a broken-image icon either way (see script.js).
//
//   PUTTING PHOTOS IN: create a folder next to index.html called
//     assets/images/
//   and drop each photo in there using the item's id as the filename, e.g.:
//     assets/images/pizza-margarita-pizza.jpg
//     assets/images/cold-coffee-mocha.jpg
//   Then set that item's "image" field above to "assets/images/<filename>".
//   A blank /assets/images folder is included with this download — just add photos to it.
//
// TO ADD OR REMOVE A CATEGORY:
//   Edit the CATEGORIES array below. "key" must match the category
//   used in MENU_ITEMS, "label" is what customers see in the nav pill.
//
// CAFE NAME / WHATSAPP NUMBER / COLORS:
//   Cafe name + phone number: see index.html footer and hero, and the
//   WHATSAPP_NUMBER constant below.
//   Colors: see the :root section at the top of style.css.
// ============================================================

const WHATSAPP_NUMBER = "917600031580"; // country code + number, no + or spaces

const CATEGORIES = [
  {
    "key": "starters",
    "label": "Starters"
  },
  {
    "key": "pizza",
    "label": "Pizza"
  },
  {
    "key": "pasta",
    "label": "Pasta"
  },
  {
    "key": "sandwich",
    "label": "Sandwich"
  },
  {
    "key": "burger",
    "label": "Burger"
  },
  {
    "key": "garlic-bread",
    "label": "Garlic Bread"
  },
  {
    "key": "fries",
    "label": "Fries"
  },
  {
    "key": "maggi",
    "label": "Maggi"
  },
  {
    "key": "nachos",
    "label": "Nachos"
  },
  {
    "key": "rice",
    "label": "Rice"
  },
  {
    "key": "sizzlers",
    "label": "Sizzlers"
  },
  {
    "key": "hot",
    "label": "Hot Beverages"
  },
  {
    "key": "cold-coffee",
    "label": "Cold Coffee"
  },
  {
    "key": "milkshakes",
    "label": "Milkshakes"
  },
  {
    "key": "thick-shakes",
    "label": "Thick Shakes"
  },
  {
    "key": "mojitos",
    "label": "Mojitos"
  },
  {
    "key": "mocktails",
    "label": "Mocktails"
  },
  {
    "key": "desserts",
    "label": "Desserts"
  },
  {
    "key": "beverages",
    "label": "Beverages"
  }
];

const MENU_ITEMS = [
  {
    "id": "starters-cheese-balls",
    "category": "starters",
    "categoryLabel": "Starters",
    "name": "Cheese Balls",
    "description": "A crispy, flavour-packed starter to kick off your meal.",
    "price": 180,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "starters-chilly-garlic-pops",
    "category": "starters",
    "categoryLabel": "Starters",
    "name": "Chilly Garlic Pops",
    "description": "A crispy, flavour-packed starter to kick off your meal.",
    "price": 180,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pizza-margarita-pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "name": "Margarita Pizza",
    "description": "Stone-baked and loaded with fresh toppings.",
    "price": 210,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "pizza-italian-pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "name": "Italian Pizza",
    "description": "Stone-baked and loaded with fresh toppings.",
    "price": 260,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pizza-mexican-pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "name": "Mexican Pizza",
    "description": "Stone-baked and loaded with fresh toppings.",
    "price": 270,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pizza-tandoori-paneer-pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "name": "Tandoori Paneer Pizza",
    "description": "Stone-baked and loaded with fresh toppings.",
    "price": 310,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pizza-farm-house-pizza",
    "category": "pizza",
    "categoryLabel": "Pizza",
    "name": "Farm House Pizza",
    "description": "Stone-baked and loaded with fresh toppings.",
    "price": 360,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "pasta-penne-arabiata-pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "name": "Penne Arabiata Pasta",
    "description": "Tossed fresh in a rich, flavourful sauce.",
    "price": 210,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pasta-creamy-cheese-burst",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "name": "Creamy Cheese Burst",
    "description": "Tossed fresh in a rich, flavourful sauce.",
    "price": 235,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pasta-fusion-pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "name": "Fusion Pasta",
    "description": "Tossed fresh in a rich, flavourful sauce.",
    "price": 235,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pasta-tomato-tangy-pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "name": "Tomato Tangy Pasta",
    "description": "Tossed fresh in a rich, flavourful sauce.",
    "price": 210,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "pasta-pesto-pasta",
    "category": "pasta",
    "categoryLabel": "Pasta",
    "name": "Pesto Pasta",
    "description": "Tossed fresh in a rich, flavourful sauce.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sandwich-veg-sandwich",
    "category": "sandwich",
    "categoryLabel": "Sandwich",
    "name": "Veg Sandwich",
    "description": "Toasted to order with a hearty, satisfying filling.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sandwich-veg-cheese-sandwich",
    "category": "sandwich",
    "categoryLabel": "Sandwich",
    "name": "Veg Cheese Sandwich",
    "description": "Toasted to order with a hearty, satisfying filling.",
    "price": 190,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sandwich-chilly-garlic-sandwich",
    "category": "sandwich",
    "categoryLabel": "Sandwich",
    "name": "Chilly Garlic Sandwich",
    "description": "Toasted to order with a hearty, satisfying filling.",
    "price": 190,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sandwich-mexican-sandwich",
    "category": "sandwich",
    "categoryLabel": "Sandwich",
    "name": "Mexican Sandwich",
    "description": "Toasted to order with a hearty, satisfying filling.",
    "price": 210,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sandwich-tandoori-paneer-sandwich",
    "category": "sandwich",
    "categoryLabel": "Sandwich",
    "name": "Tandoori Paneer Sandwich",
    "description": "Toasted to order with a hearty, satisfying filling.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "burger-veg-burger",
    "category": "burger",
    "categoryLabel": "Burger",
    "name": "Veg Burger",
    "description": "A juicy patty stacked high, served hot.",
    "price": 125,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "burger-veg-cheese-burger",
    "category": "burger",
    "categoryLabel": "Burger",
    "name": "Veg Cheese Burger",
    "description": "A juicy patty stacked high, served hot.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "burger-tandoori-paneer-burger",
    "category": "burger",
    "categoryLabel": "Burger",
    "name": "Tandoori Paneer Burger",
    "description": "A juicy patty stacked high, served hot.",
    "price": 195,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 200,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-peri-peri-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Peri Peri Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 210,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-tandoori-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Tandoori Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-tandoori-peri-peri-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Tandoori Peri Peri Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-tandoori-paneer-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Tandoori Paneer Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 255,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-mayo-peri-peri-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Mayo Peri Peri Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-mexican-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Mexican Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "garlic-bread-mexican-peri-peri-garlic-bread",
    "category": "garlic-bread",
    "categoryLabel": "Garlic Bread",
    "name": "Mexican Peri Peri Garlic Bread",
    "description": "Toasted golden and packed with garlicky flavour.",
    "price": 240,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-salted-classic",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Salted Classic",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 135,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-peri-peri-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Peri Peri Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-mexican-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Mexican Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 170,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-mexican-peri-peri",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Mexican Peri Peri",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 185,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-mayo-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Mayo Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-butter-garlic-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Butter Garlic Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-tandoori-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Tandoori Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 175,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-tandoori-peri-peri",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Tandoori Peri Peri",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 185,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "fries-mayo-peri-peri-fries",
    "category": "fries",
    "categoryLabel": "Fries",
    "name": "Mayo Peri Peri Fries",
    "description": "Perfectly crisp, seasoned fries served hot.",
    "price": 175,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-maggi-classic",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Maggi Classic",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 100,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-classic-extra-masala",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Classic (Extra Masala)",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 110,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-cheese-masala",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Cheese Masala",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 155,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-chilly-garlic-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Chilly Garlic Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-butter-masala-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Butter Masala Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 135,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-indian-tadka-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Indian Tadka Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-peri-peri-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Peri Peri Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 125,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-schezwan-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Schezwan Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 125,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-tandoori-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Tandoori Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-veg-masala-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Veg Masala Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "maggi-lemon-butter-maggi",
    "category": "maggi",
    "categoryLabel": "Maggi",
    "name": "Lemon Butter Maggi",
    "description": "Comfort-food noodles, cooked fresh to order.",
    "price": 125,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "nachos-nachos-platter",
    "category": "nachos",
    "categoryLabel": "Nachos",
    "name": "Nachos Platter",
    "description": "Crunchy nachos loaded with toppings, great for sharing.",
    "price": 240,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "nachos-mexican-nachos",
    "category": "nachos",
    "categoryLabel": "Nachos",
    "name": "Mexican Nachos",
    "description": "Crunchy nachos loaded with toppings, great for sharing.",
    "price": 270,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "nachos-tandoori-nachos",
    "category": "nachos",
    "categoryLabel": "Nachos",
    "name": "Tandoori Nachos",
    "description": "Crunchy nachos loaded with toppings, great for sharing.",
    "price": 260,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "rice-mexican-rice",
    "category": "rice",
    "categoryLabel": "Rice",
    "name": "Mexican Rice",
    "description": "A hearty rice dish packed with flavour.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "rice-burn-to-hell-rice",
    "category": "rice",
    "categoryLabel": "Rice",
    "name": "Burn to Hell Rice",
    "description": "A hearty rice dish packed with flavour.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "rice-schezwan-rice",
    "category": "rice",
    "categoryLabel": "Rice",
    "name": "Schezwan Rice",
    "description": "A hearty rice dish packed with flavour.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "rice-veg-fried-rice",
    "category": "rice",
    "categoryLabel": "Rice",
    "name": "Veg Fried Rice",
    "description": "A hearty rice dish packed with flavour.",
    "price": 175,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "rice-hyderabadi-biryani",
    "category": "rice",
    "categoryLabel": "Rice",
    "name": "Hyderabadi Biryani",
    "description": "A hearty rice dish packed with flavour.",
    "price": 220,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "sizzlers-italian-sizzler",
    "category": "sizzlers",
    "categoryLabel": "Sizzlers",
    "name": "Italian Sizzler",
    "description": "Served straight off the sizzling plate.",
    "price": 420,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "sizzlers-mexican-sizzler",
    "category": "sizzlers",
    "categoryLabel": "Sizzlers",
    "name": "Mexican Sizzler",
    "description": "Served straight off the sizzling plate.",
    "price": 430,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "hot-hot-chocolate",
    "category": "hot",
    "categoryLabel": "Hot Beverages",
    "name": "Hot Chocolate",
    "description": "A warm, comforting cup to go with your evening.",
    "price": 150,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "hot-hot-bournvita",
    "category": "hot",
    "categoryLabel": "Hot Beverages",
    "name": "Hot Bournvita",
    "description": "A warm, comforting cup to go with your evening.",
    "price": 100,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "hot-hot-coffee-plain",
    "category": "hot",
    "categoryLabel": "Hot Beverages",
    "name": "Hot Coffee Plain",
    "description": "A warm, comforting cup to go with your evening.",
    "price": 70,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "hot-hot-hazelnut",
    "category": "hot",
    "categoryLabel": "Hot Beverages",
    "name": "Hot Hazelnut",
    "description": "A warm, comforting cup to go with your evening.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-cold-coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Cold Coffee",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 135,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "cold-coffee-mocha",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Mocha",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 185,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-kitkat-coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Kitkat Coffee",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-thick-coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Thick Coffee",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-oreo-coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Oreo Coffee",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-hazelnut-coffee",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Hazelnut Coffee",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-choco-frappe",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Choco Frappe",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 220,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-cold-bournvita",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Cold Bournvita",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 120,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-cold-coffee-with-topping",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Cold Coffee with Topping",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "cold-coffee-cold-coffee-with-icecream",
    "category": "cold-coffee",
    "categoryLabel": "Cold Coffee",
    "name": "Cold Coffee with Icecream",
    "description": "Chilled and creamy, the way cold coffee should be.",
    "price": 180,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-chocolate-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Chocolate Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 170,
    "veg": true,
    "popular": true,
    "image": null
  },
  {
    "id": "milkshakes-butter-scotch",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Butter Scotch",
    "description": "Thick, cold and blended fresh.",
    "price": 170,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-strawberry-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Strawberry Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 170,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-very-berry-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Very Berry Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 185,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-vanilla-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Vanilla Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 160,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-black-currant-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Black Currant Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 170,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "milkshakes-mango-milkshake",
    "category": "milkshakes",
    "categoryLabel": "Milkshakes",
    "name": "Mango Milkshake",
    "description": "Thick, cold and blended fresh.",
    "price": 170,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "thick-shakes-black-currant-thickshake",
    "category": "thick-shakes",
    "categoryLabel": "Thick Shakes",
    "name": "Black Currant Thickshake",
    "description": "Extra thick, extra indulgent.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "thick-shakes-oreo-thickshake",
    "category": "thick-shakes",
    "categoryLabel": "Thick Shakes",
    "name": "Oreo Thickshake",
    "description": "Extra thick, extra indulgent.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "thick-shakes-brownie-thickshake",
    "category": "thick-shakes",
    "categoryLabel": "Thick Shakes",
    "name": "Brownie Thickshake",
    "description": "Extra thick, extra indulgent.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "thick-shakes-kitkat-thickshake",
    "category": "thick-shakes",
    "categoryLabel": "Thick Shakes",
    "name": "Kitkat Thickshake",
    "description": "Extra thick, extra indulgent.",
    "price": 245,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-lemon-mint-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Lemon Mint Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 125,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-blue-berry-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Blue Berry Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 155,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-green-apple-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Green Apple Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-watermelon-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Watermelon Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-very-berry-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Very Berry Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 155,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-black-currant-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Black Currant Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-strawberry-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Strawberry Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-orange-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Orange Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 145,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mojitos-kiwi-mojito",
    "category": "mojitos",
    "categoryLabel": "Mojitos",
    "name": "Kiwi Mojito",
    "description": "Refreshing and fizzy, made fresh to order.",
    "price": 155,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mocktails-blue-lagoon",
    "category": "mocktails",
    "categoryLabel": "Mocktails",
    "name": "Blue Lagoon",
    "description": "A refreshing, alcohol-free mix of fruity flavours.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "mocktails-cranberry-spritzer",
    "category": "mocktails",
    "categoryLabel": "Mocktails",
    "name": "Cranberry Spritzer",
    "description": "A refreshing, alcohol-free mix of fruity flavours.",
    "price": 230,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "desserts-vanilla-icecream",
    "category": "desserts",
    "categoryLabel": "Desserts",
    "name": "Vanilla Icecream",
    "description": "A sweet way to end your meal.",
    "price": 0,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "desserts-chocolate-icecream",
    "category": "desserts",
    "categoryLabel": "Desserts",
    "name": "Chocolate Icecream",
    "description": "A sweet way to end your meal.",
    "price": 0,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "desserts-brownie",
    "category": "desserts",
    "categoryLabel": "Desserts",
    "name": "Brownie",
    "description": "A sweet way to end your meal.",
    "price": 0,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "desserts-brownie-with-icecream",
    "category": "desserts",
    "categoryLabel": "Desserts",
    "name": "Brownie with Icecream",
    "description": "A sweet way to end your meal.",
    "price": 0,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "beverages-cold-drink",
    "category": "beverages",
    "categoryLabel": "Beverages",
    "name": "Cold Drink",
    "description": "Chilled and ready to go.",
    "price": 60,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "beverages-red-bull",
    "category": "beverages",
    "categoryLabel": "Beverages",
    "name": "Red Bull",
    "description": "Chilled and ready to go.",
    "price": 70,
    "veg": true,
    "popular": false,
    "image": null
  },
  {
    "id": "beverages-coolberg",
    "category": "beverages",
    "categoryLabel": "Beverages",
    "name": "Coolberg",
    "description": "Chilled and ready to go.",
    "price": 165,
    "veg": true,
    "popular": false,
    "image": null
  }
];
