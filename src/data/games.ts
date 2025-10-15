export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  tags: string[];
  platforms: ('windows' | 'mac' | 'linux')[];
  images: {
    cover: string;
    hero: string;
    screenshots: string[];
    logo?: string;
  };
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  isFree?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Grand Theft Auto V',
    slug: 'grand-theft-auto-v',
    description:
      'Experience the ultimate open-world adventure in Los Santos. Play as three different characters in this critically acclaimed action-adventure game.',
    longDescription:
      'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series.',
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    rating: 4.8,
    releaseDate: '2013-09-17',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    genres: ['Action', 'Adventure', 'Open World'],
    tags: ['Crime', 'Multiplayer', 'Sandbox', 'Violence', 'Mature'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1556438064-2d7646166914?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Open World Exploration',
      'Three Playable Characters',
      'Online Multiplayer',
      'Heist Missions',
      'Customization Options',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz',
        memory: '4 GB RAM',
        graphics: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
        storage: '72 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5 3470 @ 3.2GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '72 GB available space',
      },
    },
    isFeatured: true,
  },
  {
    id: '10',
    title: 'God of War',
    slug: 'god-of-war',
    description:
      'Join Kratos and his son Atreus on an epic journey through Norse mythology in this critically acclaimed action-adventure game.',
    longDescription:
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It is the eighth installment in the God of War series, chronologically, and the sequel to 2010's God of War III. Unlike previous games, which were loosely based on Greek mythology, this installment is loosely based on Norse mythology, with the majority of it taking place in ancient Scandinavia in the realm of Midgard.",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.9,
    releaseDate: '2018-04-20',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Action', 'Adventure', 'RPG'],
    tags: ['Norse Mythology', 'Father-Son', 'Epic', 'Combat', 'Story-Driven'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Epic Norse Mythology',
      'Father-Son Journey',
      'Combat System',
      'Exploration',
      'Cinematic Storytelling',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor:
          'Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)',
        storage: '70 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor:
          'Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 (6 GB) or AMD RX 580 (8 GB)',
        storage: '70 GB available space',
      },
    },
    isFeatured: true,
  },
  {
    id: '11',
    title: 'Far Cry 6',
    slug: 'far-cry-6',
    description:
      'Welcome to Yara, a tropical paradise frozen in time. As Dani Rojas, fight alongside a revolution to topple a dictator in this open-world FPS adventure.',
    longDescription:
      'Far Cry 6 is an action-adventure first-person shooter game developed by Ubisoft Toronto and published by Ubisoft. It is the sixth main installment in the Far Cry series. The game is set on the fictional Caribbean island of Yara, ruled by the dictator "El Presidente" Antón Castillo (portrayed by Giancarlo Esposito) who is raising his son Diego (Anthony Gonzalez) to follow in his rule.',
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.6,
    releaseDate: '2021-10-07',
    developer: 'Ubisoft Toronto',
    publisher: 'Ubisoft',
    genres: ['Action', 'Adventure', 'FPS', 'Open World'],
    tags: ['Revolution', 'Tropical', 'Dictator', 'Guns', 'Exploration'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Tropical Open World',
      'Revolutionary Story',
      'Weapon Crafting',
      'Co-op Multiplayer',
      'Dynamic Weather',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'AMD Ryzen 3 1200 @ 3.1GHz or Intel i5-4460 @ 3.2GHz',
        memory: '8 GB RAM',
        graphics: 'AMD RX 460 4GB or NVIDIA GTX 960 4GB',
        storage: '60 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'AMD Ryzen 5 3600X @ 3.8GHz or Intel i7-7700 @ 3.6GHz',
        memory: '16 GB RAM',
        graphics: 'AMD RX 5700 XT 8GB or NVIDIA GTX 1080 8GB',
        storage: '60 GB available space',
      },
    },
    isFeatured: true,
  },
  {
    id: '9',
    title: 'Cyberpunk Chronicles',
    slug: 'cyberpunk-chronicles',
    description:
      'Dive into a neon-lit dystopian future where corporations rule and hackers fight for freedom.',
    longDescription:
      'Experience the ultimate cyberpunk adventure in a sprawling open world filled with danger, intrigue, and high-tech weaponry. Make choices that matter and shape your own destiny in Night City 2088. With stunning ray-traced graphics and immersive storytelling, Cyberpunk Chronicles delivers an unforgettable gaming experience.',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.8,
    releaseDate: '2024-11-15',
    developer: 'NeonSoft Studios',
    publisher: 'Mega Games Inc',
    genres: ['Action', 'RPG', 'Open World'],
    tags: ['Cyberpunk', 'Story Rich', 'Multiplayer', 'First-Person'],
    platforms: ['windows', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Single Player',
      'Online Co-Op',
      'Cloud Saves',
      'Achievements',
      'Controller Support',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-3570K or AMD FX-8310',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 780 or AMD Radeon RX 470',
        storage: '70 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-4790 or AMD Ryzen 3 3200G',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 or AMD Radeon RX 590',
        storage: '70 GB SSD',
      },
    },
    isFeatured: true,
    isNew: true,
  },
  {
    id: '12',
    title: 'Stellar Odyssey',
    slug: 'stellar-odyssey',
    description:
      'Explore infinite galaxies in this space exploration and survival game. Build, trade, and discover.',
    longDescription:
      'Chart your course through an infinite procedurally generated universe. Build bases on alien worlds, trade with mysterious species, and uncover the secrets of ancient civilizations. Every star system offers new wonders and dangers to discover.',
    price: 49.99,
    rating: 4.5,
    releaseDate: '2024-08-05',
    developer: 'Cosmos Interactive',
    publisher: 'Deep Space Publishing',
    genres: ['Simulation', 'Space', 'Survival'],
    tags: [
      'Space',
      'Exploration',
      'Crafting',
      'Procedural Generation',
      'Sci-Fi',
    ],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Single Player',
      'Co-op Multiplayer',
      'VR Support',
      'Mod Support',
      'Cloud Saves',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4590',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 970',
        storage: '30 GB available space',
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2070',
        storage: '30 GB SSD',
      },
    },
  },
  {
    id: '14',
    title: 'Shadow Assassin: Legacy',
    slug: 'shadow-assassin-legacy',
    description:
      'Master the art of stealth in this action-adventure game set in feudal Japan.',
    longDescription:
      'Step into the shadows as a legendary shinobi in this critically acclaimed action-adventure. Experience a gripping tale of honor, revenge, and redemption set against the backdrop of war-torn feudal Japan. Utilize stealth, gadgets, and deadly combat skills to overcome your enemies.',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.9,
    releaseDate: '2024-03-22',
    developer: 'Katana Studios',
    publisher: 'Samurai Games',
    genres: ['Action', 'Adventure', 'Stealth'],
    tags: ['Stealth', 'Ninja', 'Third-Person', 'Story Rich', 'Atmospheric'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Single Player',
      'Achievements',
      'Cloud Saves',
      'Controller Support',
      'HDR Support',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060',
        storage: '60 GB available space',
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-9700K',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 3060',
        storage: '60 GB SSD',
      },
    },
    isFeatured: true,
  },
  {
    id: '13',
    title: 'Fortnite: Chapter 5',
    slug: 'fortnite-chapter-5',
    description:
      "The world's most popular battle royale game with building mechanics and constant updates.",
    longDescription:
      'Jump into the action-packed world of Fortnite! Build, battle, and be the last one standing in this free-to-play battle royale. Experience new seasons, limited-time modes, creative mode, and crossover events with your favorite franchises.',
    price: 98,
    rating: 4.4,
    releaseDate: '2024-12-01',
    developer: 'Epic Games',
    publisher: 'Epic Games',
    genres: ['Battle Royale', 'Shooter', 'Survival'],
    tags: [
      'Free to Play',
      'Building',
      'Third-Person Shooter',
      'Cross-Platform',
      'Live Service',
    ],
    platforms: ['windows', 'mac'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Free to Play',
      'Cross-Platform',
      'Creative Mode',
      'Battle Pass',
      'Events',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-3225',
        memory: '8 GB RAM',
        graphics: 'Intel HD 4000',
        storage: '30 GB available space',
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-7300U',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1660',
        storage: '30 GB SSD',
      },
    },
    isFree: false,
    isNew: true,
    isFeatured: true,
  },
  {
    id: '15',
    title: 'Horizon Racers',
    slug: 'horizon-racers',
    description:
      'High-octane arcade racing with stunning visuals and exotic cars from around the world.',
    longDescription:
      'Feel the rush of adrenaline in the ultimate arcade racing experience. Race through breathtaking locations, customize your dream cars, and compete in thrilling events. With realistic graphics and an extensive car roster, every race is unforgettable.',
    price: 44.99,
    rating: 4.6,
    releaseDate: '2024-07-18',
    developer: 'Velocity Racing',
    publisher: 'Speed Demon Games',
    genres: ['Racing', 'Sports', 'Arcade'],
    tags: ['Racing', 'Arcade', 'Multiplayer', 'Customization', 'Open World'],
    platforms: ['windows', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Online Multiplayer',
      'Split-Screen',
      'Wheel Support',
      'Photo Mode',
      'Seasonal Events',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 760',
        storage: '80 GB available space',
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060',
        storage: '80 GB SSD',
      },
    },
  },
  {
    id: '16',
    title: 'Dead Space: Aftermath',
    slug: 'dead-space-aftermath',
    description:
      'Survive the horrors of deep space in this atmospheric sci-fi survival horror masterpiece.',
    longDescription:
      'Face your fears in the cold darkness of space. As systems engineer Isaac Clarke, navigate the nightmarish USG Ishimura, a massive mining ship overrun by grotesque alien creatures. With limited resources and overwhelming terror, every decision matters.',
    price: 54.99,
    rating: 4.7,
    releaseDate: '2024-10-31',
    developer: 'Visceral Games',
    publisher: 'EA Horror Division',
    genres: ['Horror', 'Survival', 'Sci-Fi'],
    tags: [
      'Horror',
      'Survival Horror',
      'Atmospheric',
      'Story Rich',
      'Third-Person',
    ],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Single Player',
      'Achievements',
      '3D Audio',
      'HDR Support',
      'Controller Support',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1070',
        storage: '50 GB available space',
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-11600K',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 3070',
        storage: '50 GB SSD',
      },
    },
    isNew: true,
  },
  {
    id: '17',
    title: 'The Witcher 3: Wild Hunt',
    slug: 'the-witcher-3-wild-hunt',
    description:
      'Step into the shoes of Geralt of Rivia in this award-winning open-world RPG filled with monsters, magic, and meaningful choices.',
    longDescription:
      'The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. The game features a complex narrative with multiple endings and a vast open world to explore.',
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    rating: 4.9,
    releaseDate: '2015-05-19',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    genres: ['RPG', 'Action', 'Adventure'],
    tags: ['Fantasy', 'Open World', 'Story Rich', 'Mature', 'Choices Matter'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Open World Exploration',
      'Rich Storytelling',
      'Monster Hunting',
      'Character Development',
      'Multiple Endings',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 64-bit',
        processor: 'Intel CPU Core i5-2500K 3.3GHz',
        memory: '6 GB RAM',
        graphics: 'NVIDIA GPU GeForce GTX 660',
        storage: '35 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel CPU Core i7 3770 3.4 GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GPU GeForce GTX 770',
        storage: '35 GB available space',
      },
    },
    isFeatured: true,
  },
  {
    id: '18',
    title: 'Minecraft',
    slug: 'minecraft',
    description:
      'Build, explore, and survive in infinite worlds made entirely of blocks. The ultimate sandbox experience.',
    longDescription:
      'Minecraft is a sandbox video game where players can build, explore, and survive in procedurally generated 3D worlds. With endless possibilities for creativity and adventure, Minecraft has become one of the best-selling games of all time.',
    price: 26.95,
    rating: 4.7,
    releaseDate: '2011-11-18',
    developer: 'Mojang Studios',
    publisher: 'Microsoft',
    genres: ['Sandbox', 'Survival', 'Creative'],
    tags: [
      'Building',
      'Crafting',
      'Multiplayer',
      'Educational',
      'Family Friendly',
    ],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1606503153255-59d8b8f3a2b3?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1606503153255-59d8b8f3a2b3?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1606503153255-59d8b8f3a2b3?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1556438064-2d7646166914?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1606503153255-59d8b8f3a2b3?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Creative Mode',
      'Survival Mode',
      'Multiplayer',
      'Mod Support',
      'Cross-Platform',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel Core i3-3210 3.2 GHz',
        memory: '4 GB RAM',
        graphics: 'Intel HD Graphics 4000',
        storage: '1 GB available space',
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core i5-4690 3.5GHz',
        memory: '8 GB RAM',
        graphics: 'GeForce 700 Series',
        storage: '4 GB available space',
      },
    },
  },
  {
    id: '19',
    title: 'Elden Ring',
    slug: 'elden-ring',
    description:
      "FromSoftware's masterpiece open-world action RPG. Explore the Lands Between and become the Elden Lord.",
    longDescription:
      'Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game features an open world and includes elements such as character customization, magic, and crafting.',
    price: 59.99,
    rating: 4.9,
    releaseDate: '2022-02-25',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    genres: ['Action', 'RPG', 'Adventure'],
    tags: ['Dark Fantasy', 'Open World', 'Challenging', 'Co-op', 'PvP'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Open World',
      'Character Customization',
      'Magic System',
      'Co-op Multiplayer',
      'PvP Combat',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel Core i5-8400',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060',
        storage: '60 GB available space',
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core i7-8700K',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1070',
        storage: '60 GB SSD',
      },
    },
    isFeatured: true,
  },
  {
    id: '20',
    title: 'Among Us',
    slug: 'among-us',
    description:
      "A multiplayer party game of teamwork and betrayal. Find the impostor before it's too late!",
    longDescription:
      'Among Us is an online multiplayer social deduction game. Players work together to complete tasks on a spaceship, but beware - one or more random players are impostors trying to sabotage the mission!',
    price: 4.99,
    rating: 4.2,
    releaseDate: '2018-06-15',
    developer: 'InnerSloth',
    publisher: 'InnerSloth',
    genres: ['Party', 'Social Deduction', 'Multiplayer'],
    tags: ['Multiplayer', 'Social', 'Deduction', 'Fun', 'Casual'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Online Multiplayer',
      'Cross-Platform',
      'Customizable',
      'Voice Chat',
      'Private Lobbies',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 SP1+',
        processor: 'SSE2 instruction set support',
        memory: '1 GB RAM',
        graphics: 'Graphics card with DX10',
        storage: '250 MB available space',
      },
      recommended: {
        os: 'Windows 10',
        processor: 'SSE2 instruction set support',
        memory: '2 GB RAM',
        graphics: 'Graphics card with DX10',
        storage: '250 MB available space',
      },
    },
  },
  {
    id: '21',
    title: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    description:
      'Experience the dying days of the outlaw era in this epic tale of loyalty, betrayal, and survival.',
    longDescription:
      'Red Dead Redemption 2 is an action-adventure game set in an open world environment. The game follows outlaw Arthur Morgan and the Van der Linde gang as they flee across America in 1899.',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.8,
    releaseDate: '2019-11-05',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    genres: ['Action', 'Adventure', 'Open World'],
    tags: [
      'Western',
      'Open World',
      'Story Rich',
      'Horse Riding',
      'Gunslinging',
    ],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Open World',
      'Horse Riding',
      'Hunting',
      'Online Multiplayer',
      'Character Customization',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-2500K',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 770',
        storage: '150 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-4770K',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060',
        storage: '150 GB available space',
      },
    },
    isFeatured: true,
  },
  {
    id: '22',
    title: 'Valorant',
    slug: 'valorant',
    description:
      'A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.',
    longDescription:
      'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games. Players assume the control of agents, characters designed based on several countries and cultures around the world.',
    price: 0,
    rating: 4.3,
    releaseDate: '2020-06-02',
    developer: 'Riot Games',
    publisher: 'Riot Games',
    genres: ['FPS', 'Tactical', 'Competitive'],
    tags: [
      'Free to Play',
      'Competitive',
      'Tactical',
      'Team-Based',
      'Precision',
    ],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Free to Play',
      'Competitive Ranked',
      'Agent Abilities',
      'Precision Gunplay',
      'Team Strategy',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 64-bit',
        processor: 'Intel Core 2 Duo E8400',
        memory: '4 GB RAM',
        graphics: 'Intel HD 4000',
        storage: '8 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-4150',
        memory: '4 GB RAM',
        graphics: 'GeForce GT 730',
        storage: '8 GB available space',
      },
    },
    isFree: true,
  },
  {
    id: '23',
    title: 'Stardew Valley',
    slug: 'stardew-valley',
    description:
      'Escape to the countryside and build your dream farm in this charming pixel-art farming simulator.',
    longDescription:
      "Stardew Valley is a farming simulation role-playing video game. Players take the role of a character who inherits their grandfather's dilapidated farm in a place called Stardew Valley.",
    price: 14.99,
    rating: 4.8,
    releaseDate: '2016-02-26',
    developer: 'ConcernedApe',
    publisher: 'Chucklefish',
    genres: ['Simulation', 'RPG', 'Farming'],
    tags: ['Farming', 'Relaxing', 'Pixel Art', 'Multiplayer', 'Cozy'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Farming Simulation',
      'Character Relationships',
      'Mining',
      'Fishing',
      'Multiplayer Co-op',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows Vista or greater',
        processor: '2 Ghz',
        memory: '2 GB RAM',
        graphics: '256 mb video memory',
        storage: '500 MB available space',
      },
      recommended: {
        os: 'Windows 10',
        processor: '2 Ghz',
        memory: '4 GB RAM',
        graphics: '256 mb video memory',
        storage: '500 MB available space',
      },
    },
  },
  {
    id: '24',
    title: 'Counter-Strike 2',
    slug: 'counter-strike-2',
    description:
      "The world's premier competitive FPS. Master precise aim and tactical gameplay in this legendary shooter.",
    longDescription:
      'Counter-Strike 2 is a multiplayer tactical first-person shooter. It is the fourth game in the Counter-Strike series and features updated graphics, improved gameplay, and new maps.',
    price: 0,
    rating: 4.5,
    releaseDate: '2023-09-27',
    developer: 'Valve',
    publisher: 'Valve',
    genres: ['FPS', 'Tactical', 'Competitive'],
    tags: [
      'Free to Play',
      'Competitive',
      'Tactical',
      'Team-Based',
      'Precision',
    ],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Free to Play',
      'Competitive Matchmaking',
      'Tactical Gameplay',
      'Weapon Economy',
      'Map Editor',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: '4 hardware CPU threads',
        memory: '8 GB RAM',
        graphics: 'Video card must be 1 GB or more',
        storage: '85 GB available space',
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core i5-8400',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060',
        storage: '85 GB SSD',
      },
    },
    isFree: true,
  },
  {
    id: '25',
    title: "Baldur's Gate 3",
    slug: 'baldurs-gate-3',
    description:
      'A next-generation RPG set in the world of Dungeons & Dragons. Shape your story with meaningful choices.',
    longDescription:
      "Baldur's Gate 3 is a role-playing video game that features both single-player and cooperative multiplayer gameplay. The game is based on the Dungeons & Dragons tabletop role-playing system.",
    price: 59.99,
    rating: 4.9,
    releaseDate: '2023-08-03',
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    genres: ['RPG', 'Adventure', 'Turn-Based'],
    tags: ['D&D', 'Turn-Based', 'Story Rich', 'Co-op', 'Character Creation'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Turn-Based Combat',
      'Character Creation',
      'Co-op Multiplayer',
      'Branching Storylines',
      'D&D Rules',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel I5 4690 / AMD FX 4350',
        memory: '8 GB RAM',
        graphics: 'Nvidia GTX 970 / RX 480',
        storage: '150 GB available space',
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i7 8700K / AMD r5 3600',
        memory: '16 GB RAM',
        graphics: 'Nvidia 2060 Super / RX 6700 XT',
        storage: '150 GB SSD',
      },
    },
    isFeatured: true,
    isNew: true,
  },
  {
    id: '26',
    title: 'Fall Guys',
    slug: 'fall-guys',
    description:
      'A massively multiplayer party royale game where you and your fellow contestants compete through rounds of escalating chaos.',
    longDescription:
      'Fall Guys is a party battle royale game where up to 60 players compete in a series of randomly selected mini-games until one victor remains.',
    price: 0,
    rating: 4.1,
    releaseDate: '2020-08-04',
    developer: 'Mediatonic',
    publisher: 'Epic Games',
    genres: ['Party', 'Battle Royale', 'Platformer'],
    tags: ['Free to Play', 'Party Game', 'Battle Royale', 'Fun', 'Colorful'],
    platforms: ['windows'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Free to Play',
      '60 Player Battles',
      'Customization',
      'Seasonal Content',
      'Cross-Platform',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64bit',
        processor: 'Intel Core i5 or AMD equivalent',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 or AMD Radeon HD 7950',
        storage: '2 GB available space',
      },
      recommended: {
        os: 'Windows 10 64bit',
        processor: 'Intel Core i5 or AMD equivalent',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 or AMD RX 580',
        storage: '2 GB available space',
      },
    },
    isFree: true,
  },
  {
    id: '27',
    title: 'Hades',
    slug: 'hades',
    description:
      'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler.',
    longDescription:
      'Hades is a rogue-like dungeon crawler where you defy the god of the dead as you hack and slash out of the Underworld of Greek myth. Each run is unique with randomized encounters.',
    price: 24.99,
    rating: 4.8,
    releaseDate: '2020-09-17',
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    genres: ['Action', 'Roguelike', 'Indie'],
    tags: ['Roguelike', 'Greek Mythology', 'Fast-Paced', 'Story Rich', 'Indie'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1535792116811-8e5dbe469e7d?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Roguelike Gameplay',
      'Greek Mythology',
      'Weapon Variety',
      'Character Relationships',
      'Procedural Generation',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 SP1',
        processor: 'Dual Core 2.4 GHz',
        memory: '4 GB RAM',
        graphics: '1GB VRAM / DirectX 10+ support',
        storage: '15 GB available space',
      },
      recommended: {
        os: 'Windows 10',
        processor: 'Dual Core 3.0 GHz+',
        memory: '8 GB RAM',
        graphics: '2GB VRAM / DirectX 10+ support',
        storage: '15 GB available space',
      },
    },
  },
  {
    id: '28',
    title: 'Rocket League',
    slug: 'rocket-league',
    description:
      'Soccer meets driving in this physics-based multiplayer game. Score goals with rocket-powered cars!',
    longDescription:
      "Rocket League is a vehicular soccer video game where players control rocket-powered cars to hit a ball into their opponent's goal to score points.",
    price: 0,
    rating: 4.4,
    releaseDate: '2015-07-07',
    developer: 'Psyonix',
    publisher: 'Psyonix',
    genres: ['Sports', 'Racing', 'Multiplayer'],
    tags: ['Free to Play', 'Sports', 'Racing', 'Multiplayer', 'Physics'],
    platforms: ['windows', 'mac', 'linux'],
    images: {
      cover:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=1000&fit=crop&auto=format',
      hero: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format',
      screenshots: [
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1920&h=1080&fit=crop&auto=format',
      ],
      logo: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop&auto=format',
    },
    features: [
      'Free to Play',
      'Cross-Platform',
      'Customizable Cars',
      'Competitive Ranked',
      'Tournament Mode',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 (64 bit)',
        processor: '2.5 GHz Dual core',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 260, ATI 4850',
        storage: '20 GB available space',
      },
      recommended: {
        os: 'Windows 10 (64 bit)',
        processor: '3.0+ GHz Quad core',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 760 or better',
        storage: '20 GB available space',
      },
    },
    isFree: true,
  },
];

export const categories = [
  'Action',
  'RPG',
  'Adventure',
  'Simulation',
  'Strategy',
  'Sports',
  'Racing',
  'Horror',
  'FPS',
  'Battle Royale',
  'MMORPG',
];

export const genres = Array.from(new Set(games.flatMap(game => game.genres)));
