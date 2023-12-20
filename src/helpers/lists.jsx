import Bacon from "../assets/burgers/BaconQPC.jpg"
import BigMac from "../assets/burgers/BigMac.jpg"
import Cheeseburger from "../assets/burgers/Cheeseburger.jpg"
import Hamburger from "../assets/burgers/Hamburger.jpg"
import McDouble from "../assets/burgers/McDouble.jpg"
import Water from "../assets/drinks/BottledWater.jpg"
import Fanta from "../assets/drinks/FantaOrange.jpg"
import FrozenCola from "../assets/drinks/FrozenCocaCola.jpg"
import HotTea from "../assets/drinks/HotTea.jpg"
import Lemonade from "../assets/drinks/Lemonade.jpg"
import CocaCola from "../assets/drinks/MediumCoke.jpg"
import Sprite from "../assets/drinks/MediumSprite.jpg"
import SweetTea from "../assets/drinks/SweetTea.jpg"
import Jalapeno from "../assets/fries/jalapeno.png"
import Bacantor from "../assets/fries/baconator-fries.png"
import Chili from "../assets/fries/chili-cheese-fries.png"
import Cesar from "../assets/salads/Cesar.png"
import Avocado from "../assets/salads/avocado-chicken-salad.png"
import cobbSalad from "../assets/salads/cobbSalad.png"
import FruitSalad from "../assets/salads/FruitSalad.png"
import GrilledSalad from "../assets/salads/spicyGrilledSalad.png"
import VanillaCone from "../assets/sweets/LargeVanillaCone.jpg"
import Cookie from "../assets/sweets/ChocolateCookie.jpg"
import HotFudgeSundae from "../assets/sweets/HotFudgeSundae.jpg"
import CaramelSundae from "../assets/sweets/CaramelSundae.jpg"
import Mms from "../assets/sweets/M&M.jpg"
import Oreo from "../assets/sweets/OREO.jpg"
import BBQ from "../assets/wraps/BBQ-Bacon-Cheeseburger-Pita.jpg"
import Lemon from "../assets/wraps/Lemon-Pepper-Chicken-Pita.jpg"
import Spicy from "../assets/wraps/Spicy-Buffalo-Chicken-Caesar-Pita.jpg"
import West from "../assets/wraps/West-Coast-Club-Pita.jpg"

export const burgers = [
  {
    id: 0,
    name: "Bacon Burger",
    image: Bacon,
    price: 11.99,
    category: 'burgers'
  },
  {
    id: 1,
    name: "Bic Q",
    image: BigMac,
    price: 10.99,
    category: 'burgers'
  },
  {
    id: 2,
    name: "Cheeseburger",
    image: Cheeseburger,
    price: 6.99,
    category: 'burgers'
  },
  
  {
    id: 3,
    name: "Hamburger",
    image: Hamburger,
    price: 4.99,
    category: 'burgers'
  },
  {
    id: 4,
    name: "Q Double",
    image: McDouble,
    price: 10.99,
    category: 'burgers'
  },
];

export const drinks = [
    {
      id: 0,
      name: "Water",
      image: Water,
      price: 0.99,
      category: 'drinks'
    },
    {
      id: 1,
      name: "Fanta",
      image: Fanta,
      price: 1.99,
      category: 'drinks'
    },
    {
      id: 2,
      name: "Coca Cola",
      image: FrozenCola,
      price: 2.99,
      category: 'drinks'
    },
    {
      id: 3,
      name: "Hot Tea",
      image: HotTea,
      price: 1.99,
      category: 'drinks'
    },
    {
      id: 4,
      name: "Sweet Tea",
      image: SweetTea,
      price: 1.99,
      category: 'drinks'
    },
    {
      id: 5,
      name: "Lemonade",
      image: Lemonade,
      price: 1.99,
      category: 'drinks'
    },
    {
      id: 6,
      name: "Coca Cola",
      image: CocaCola,
      price: 1.99,
      category: 'drinks'
    },
    {
      id: 7,
      name: "Sprite",
      image: Sprite,
      price: 1.99,
      category: 'drinks'
    },
  ];

export const fries = [
  {
    id: 0,
    name: "Jalapeno Fries",
    image: Jalapeno,
    price: 2.99,
    category: 'fries'
  },
  {
    id: 1,
    name: "Baconator Fries",
    image: Bacantor,
    price: 2.99,
    category: 'fries'
  },
  {
    id: 2,
    name: "Chili Cheese Fries",
    image: Chili,
    price: 1.99,
    category: 'fries'
  },
];

export const salads = [
  {
    id: 0,
    name: "Cesar Salad",
    image: Cesar,
    price: 5.99,
    category: 'salads'
  },
  {
    id: 1,
    name: "Chicken Salad",
    image: Avocado,
    price: 6.99,
    category: 'salads'
  },
  {
    id: 2,
    name: "Cobb Salad",
    image: cobbSalad,
    price: 5.99,
    category: 'salads'
  },
  {
    id: 3,
    name: "Fruit Salad",
    image: FruitSalad,
    price: 4.99,
    category: 'salads'
  },
  {
    id: 4,
    name: "Grilled Salad",
    image: GrilledSalad,
    price: 5.99,
    category: 'salads'
  },
];

export const sweets = [
  {
    id: 0,
    name: "Vanilla Ice Cream",
    image: VanillaCone,
    price: 1.99,
    category: 'sweets'
  },
  {
    id: 1,
    name: "Chocolate Cookie",
    image: Cookie,
    price: 2.99,
    category: 'sweets'
  },
  {
    id: 2,
    name: "Hot Fudge Sundae",
    image: HotFudgeSundae,
    price: 2.99,
    category: 'sweets'
  },
  {
    id: 3,
    name: "Caramel Sundae",
    image: CaramelSundae,
    price: 2.99,
    category: 'sweets'
  },
  {
    id: 4,
    name: "M&M's Ice Cream",
    image: Mms,
    price: 3.99,
    category: 'sweets'
  },
  {
    id: 5,
    name: "OREO Ice Cream",
    image: Oreo,
    price: 3.99,
    category: 'sweets'
  },
];

export const wraps = [
  {
    id: 0,
    name: "BBQ Bacon Cheese Wrap",
    image: BBQ,
    price: 5.99,
    category: 'wraps'
  },
  {
    id: 1,
    name: "Lemon Pepper Chicken Wrap",
    image: Lemon,
    price: 5.99,
    category: 'wraps'
  },
  {
    id: 2,
    name: "Spicy Buffalo Chicken Wrap",
    image: Spicy,
    price: 6.99,
    category: 'wraps'
  },
  {
    id: 3,
    name: "West Coast Club Wrap",
    image: West,
    price: 5.99,
    category: 'wraps'
  },
];