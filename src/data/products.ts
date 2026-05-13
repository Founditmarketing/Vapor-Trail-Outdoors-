export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "vapor-maker-2022",
    name: "The 2022 Vapor Maker™",
    price: "$40.00",
    category: "Scent Systems",
    description: "The Original Scent Dispersal System. Designed by owner Rex Holmes Jr., this exclusive pump-up system allows you to treat your entire body from head to toe in 15 seconds or less. Don't just spray—vaporize.",
    image: "/vapor maker new.jpeg",
  },
  {
    id: "33-point-buck",
    name: "\"33 Point Buck\" Scent Eliminator",
    price: "$25.00",
    category: "Scent Systems",
    description: "The One and Only. Made from real plants gathered in the wild, this dual-action formula masks your human signature while drawing them in close. It’s the closest thing to being invisible.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "smart-lcd-headlight",
    name: "Smart LCD Headlight",
    price: "$65.00",
    category: "Lights",
    description: "No more guessing in the dark. Our proprietary tech brings cell-phone logic to your headlamp. Featuring an integrated LCD screen, it tells you in real-time exactly how many hours of run-time you have left.",
    image: "https://images.unsplash.com/photo-1533633396064-9dfc1fb20d7d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "vts-precision-scope",
    name: "Precision Alpha Scope",
    price: "$299.00",
    category: "Scopes",
    description: "Crystal clear tactical optics with 4x-12x zoom. Multi-coated lenses for superior performance in low-light dawn and dusk conditions.",
    image: "https://images.unsplash.com/photo-1605206963493-2771d9fd53ec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "vts-stealth-binos",
    name: "VTS Stealth 10x42",
    price: "$185.00",
    category: "Binoculars",
    description: "High-definition vision in a lightweight, rubber-armored chassis. Fogproof and waterproof for the most demanding environments.",
    image: "https://images.unsplash.com/photo-1563297777-06aaa39a489c?q=80&w=1000&auto=format&fit=crop",
  }
];

export const categories = [
  { name: "Binoculars", image: "https://images.unsplash.com/photo-1563297777-06aaa39a489c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Calls", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop" },
  { name: "Cameras", image: "https://images.unsplash.com/photo-1500643752441-4dca90df3317?q=80&w=1000&auto=format&fit=crop" },
  { name: "Lights", image: "https://images.unsplash.com/photo-1533633396064-9dfc1fb20d7d?q=80&w=1000&auto=format&fit=crop" },
  { name: "Scent Systems", image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop" },
  { name: "Scopes", image: "https://images.unsplash.com/photo-1605206963493-2771d9fd53ec?q=80&w=1000&auto=format&fit=crop" },
];
