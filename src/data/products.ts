export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
  additionalImages?: string[];
}

export const products: Product[] = [
  {
    id: "vapor-maker-2022",
    name: "The 2022 Vapor Maker™",
    price: "$40.00",
    category: "Scent Systems",
    description: "The Vapor Maker is a 12oz pump-up atomizing scent eliminating and attractant dispensing system. It has a 3 foot hose that allows you to spray your entire body, including your back. It has a valve at the end of the hose that allows you to have complete control while spraying, meaning that you can spray from head to toe in approximately 10 seconds and not skip any spots. The 33 Point Buck is the Only scent eliminator and attractant in one product on the market today and paired with The Vapor Maker makes an awesome hunting experience. The Best part of the 33 Point Buck is it's all natural, made only from plants.  Because the 33 Point Buck is all natural you don’t have to worry about skin irritation, you can spray it all over your body, face and all!  Get the Pair and try it out for yourself today!",
    image: "/vapor maker new.jpeg",
    additionalImages: [
      "/vapor maker 2.jpg",
      "/Vapor maker 3.jpg"
    ]
  },
  {
    id: "33-point-buck",
    name: "33 PT BUCK COVER SCENT & ATTRACTANT 32oz",
    price: "$25.00",
    category: "Scent Systems",
    description: "33pt Buck is an all natural cover scent and attractant that eliminates odors and makes all animals unaware of a human's presence.",
    image: "/33 Pt buck.jpg",
  },

  {
    id: "vts-display-led-headlight",
    name: "VTS DISPLAY LED HEADLIGHT 10 WATT",
    price: "$89.99",
    category: "Lights",
    description: "FREE PRIORITY SHIPPING. This the brightest headlight you will find on the market at a price that can not be beat. The lighted display shows you how much battery time remaining. The VTS Display LED Headlight has High (10 hours run time) and Low Settings (20 hours run time) and comes with a an AC & DC Charger along with a Red, Blue, Green and Yellow Lens that snap in from the outside. Just line up the divots & snap one in. Comes with two USB cords & wall charger.",
    image: "/vts 1.jpg",
    additionalImages: [
      "/vts 2.jpg",
      "/vts 3.jpg"
    ]
  },
  {
    id: "four-point-light",
    name: "Four Point Light",
    price: "$59.99",
    category: "Lights",
    description: "FREE PRIORITY SHIPPING. BRAND NEW!!!! Four Point Light... very very bright. Range is 500 yards, Cree LED Bulb and Lithium Ion batteries. Run time is 10 hours on high, 20 hours on medium and 30 hours on low.\n\n4 bars lit up equal 100%\n3 bars lit up equal 75%\n2 bars lit up equal 50%\n1 bar lit up equals 25%\n\nBattery Lite. Comes in a plastic box with 2 USB cords and a 110 volt plug USB receptacle.",
    image: "/fpl 1.jpg",
    additionalImages: [
      "/fpl 2.jpg",
      "/fpl 3.jpg"
    ]
  },
  {
    id: "wall-usb-charger",
    name: "WALL & 2 USB CHARGER FOR 3 Watt, 5 Watt, 10 Watt, Four Point, Outlaw and Frog",
    price: "$15.00",
    category: "Accessories",
    description: "Wall & 2 USB Charging Cords for Display & Four Point Lights",
    image: "/wall.jpg"
  },
  {
    id: "my-shelia-doe-n-heat",
    name: "MY SHELIA DOE-N-HEAT 4oz",
    price: "$20.00",
    category: "Scent Systems",
    description: "This is real doe in heat, it is natural! Contains the pheromones and vaginal secretions to attract the most wild bucks. It comes in a 4 oz bottle.",
    image: "/doe.jpg"
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
