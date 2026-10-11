const accommodations = [
  {
    id: 1,
    name: "Riad Hammamet",
    type: "Riad",
    city: "Hammamet",
    region: "Cap Bon",

    description:
      "Un riad traditionnel situé au cœur de Hammamet, avec une architecture inspirée des maisons tunisiennes traditionnelles. Ses patios, ses murs blancs et sa terrasse créent une atmosphère calme et authentique.",

    short_description:
      "Un riad traditionnel au cœur de Hammamet.",

    address:
      "Médina de Hammamet, Hammamet",

    latitude: 36.4009,
    longitude: 10.6167,

    price: 220,
    rating: 4.7,
    reviews: 128,

    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Wi-Fi gratuit",
      "Piscine",
      "Climatisation",
      "Petit-déjeuner",
      "Terrasse"
    ]
  },


  {
    id: 2,
    name: "Villa Sidi Bou",
    type: "Villa",
    city: "Sidi Bou Saïd",
    region: "Grand Tunis",

    description:
      "Une villa élégante inspirée de l'architecture emblématique de Sidi Bou Saïd. Elle offre un cadre lumineux avec une vue dégagée sur la Méditerranée et se trouve à proximité des ruelles du village.",

    short_description:
      "Une villa élégante avec vue sur la Méditerranée.",

    address:
      "Rue du Docteur Habib Thameur, Sidi Bou Saïd",

    latitude: 36.8687,
    longitude: 10.3417,

    price: 350,
    rating: 4.9,
    reviews: 96,

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Vue sur la mer",
      "Piscine",
      "Wi-Fi gratuit",
      "Climatisation",
      "Terrasse privée"
    ]
  },


  {
    id: 3,
    name: "Dar Tozeur",
    type: "Maison d'hôtes",
    city: "Tozeur",
    region: "Sud-Ouest",

    description:
      "Cette maison d'hôtes s'inspire de l'architecture traditionnelle de Tozeur. Ses briques décoratives, ses espaces ombragés et son ambiance chaleureuse permettent de découvrir le patrimoine du Sud tunisien.",

    short_description:
      "Une maison traditionnelle au cœur de Tozeur.",

    address:
      "Médina de Tozeur, Tozeur",

    latitude: 33.9197,
    longitude: 8.1335,

    price: 180,
    rating: 4.6,
    reviews: 74,

    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Wi-Fi gratuit",
      "Climatisation",
      "Jardin",
      "Petit-déjeuner traditionnel",
      "Terrasse"
    ]
  },


  {
    id: 4,
    name: "Gîte des Palmiers",
    type: "Gîte",
    city: "Djerba",
    region: "Sud",

    description:
      "Un gîte paisible entouré de palmiers et d'oliviers. L'établissement propose une expérience proche de la nature et permet de découvrir le mode de vie traditionnel de l'île de Djerba.",

    short_description:
      "Un gîte paisible au milieu des palmiers de Djerba.",

    address:
      "Houmt Souk, Djerba",

    latitude: 33.8758,
    longitude: 10.8575,

    price: 160,
    rating: 4.5,
    reviews: 83,

    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Jardin",
      "Piscine",
      "Wi-Fi gratuit",
      "Climatisation",
      "Petit-déjeuner"
    ]
  },


  {
    id: 5,
    name: "Dar Bizerte",
    type: "Dar",
    city: "Bizerte",
    region: "Nord",

    description:
      "Une maison authentique située près du vieux port de Bizerte. Son emplacement permet de profiter de l'ambiance maritime de la ville, de ses marchés et de ses ruelles historiques.",

    short_description:
      "Une maison authentique près du vieux port de Bizerte.",

    address:
      "Vieux port de Bizerte, Bizerte",

    latitude: 37.2744,
    longitude: 9.8739,

    price: 190,
    rating: 4.8,
    reviews: 112,

    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Vue sur le port",
      "Wi-Fi gratuit",
      "Climatisation",
      "Terrasse",
      "Petit-déjeuner"
    ]
  },


  {
    id: 6,
    name: "Auberge Tabarka",
    type: "Auberge",
    city: "Tabarka",
    region: "Nord",

    description:
      "Une auberge conviviale située entre les paysages boisés et la mer de Tabarka. Elle constitue un point de départ idéal pour découvrir les plages, la forêt et les paysages naturels du Nord-Ouest tunisien.",

    short_description:
      "Une auberge chaleureuse entre mer et forêt.",

    address:
      "Centre de Tabarka, Jendouba",

    latitude: 36.9544,
    longitude: 8.758,

    price: 140,
    rating: 4.4,
    reviews: 67,

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
      "Wi-Fi gratuit",
      "Restaurant",
      "Jardin",
      "Parking",
      "Terrasse",
      "Climatisation"
    ]
  }
];

export default accommodations;