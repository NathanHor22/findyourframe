import { Photographer } from '../types/Photographer';

export const mockPhotographers: Photographer[] = [
  {
    id: 1,
    name: "Alex Rodriguez",
    category: "sports",
    image: "https://images.unsplash.com/photo-1520716434816-dc2c526ba739?w=400&h=600&fit=crop",
    bio: "Capturing the intensity and passion of athletic moments",
    location: "Los Angeles, CA",
    gear: {
      camera: "Canon EOS R5",
      lenses: ["Canon 70-200mm f/2.8", "Canon 24-70mm f/2.8", "Canon 400mm f/2.8"],
      other: ["Monopod", "Flash system", "Rain covers"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0b22d3b8883?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    experience: "8+ years",
    priceRange: "$200-500/hour",
    rating: 4.8,
    totalReviews: 47,
    reviews: [
      {
        id: 1,
        reviewerName: "Sarah M.",
        rating: 5,
        comment: "Alex captured our championship game perfectly! The action shots are incredible and really show the intensity of the moment.",
        date: "2024-10-15"
      },
      {
        id: 2,
        reviewerName: "Mike T.",
        rating: 5,
        comment: "Professional, punctual, and delivered amazing photos. Great eye for capturing the perfect sports moments.",
        date: "2024-10-08"
      },
      {
        id: 3,
        reviewerName: "Jennifer L.",
        rating: 4,
        comment: "Excellent work during our soccer tournament. Very happy with the quality and quick turnaround time.",
        date: "2024-09-28"
      }
    ],
    contactInfo: {
      instagram: "@alexsportsphoto",
      website: "www.alexrodriguezphoto.com"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
    bio: "Documenting nature's most magnificent creatures",
    location: "Yellowstone, WY",
    gear: {
      camera: "Nikon D850",
      lenses: ["Nikon 600mm f/4", "Nikon 200-500mm f/5.6", "Nikon 24-120mm f/4"],
      other: ["Tripod", "Camouflage tent", "Remote triggers"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    ],
    experience: "12+ years",
    priceRange: "$300-800/day",
    rating: 4.9,
    totalReviews: 32,
    reviews: [
      {
        id: 1,
        reviewerName: "David K.",
        rating: 5,
        comment: "Sarah's patience and expertise in wildlife photography is unmatched. She got shots of bears that I never thought possible!",
        date: "2024-10-12"
      },
      {
        id: 2,
        reviewerName: "Emma R.",
        rating: 5,
        comment: "Incredible work on our nature documentary. Her knowledge of animal behavior really shows in her photographs.",
        date: "2024-09-30"
      },
      {
        id: 3,
        reviewerName: "Tom H.",
        rating: 4,
        comment: "Great wildlife shots for our conservation project. Very professional and knows the best spots in Yellowstone.",
        date: "2024-09-15"
      }
    ],
    contactInfo: {
      instagram: "@sarahwildlife",
      website: "www.wildlifebysarah.com"
    }
  },
  {
    id: 3,
    name: "Marcus Thompson",
    category: "street",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    bio: "Finding beauty in everyday urban life",
    location: "New York, NY",
    gear: {
      camera: "Fujifilm X-T4",
      lenses: ["Fuji 23mm f/1.4", "Fuji 56mm f/1.2", "Fuji 16mm f/1.4"],
      other: ["Compact flash", "Peak Design strap", "ND filters"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400&h=300&fit=crop"
    ],
    experience: "6+ years",
    priceRange: "$150-350/hour",
    rating: 4.6,
    totalReviews: 28,
    reviews: [
      {
        id: 1,
        reviewerName: "Lisa P.",
        rating: 5,
        comment: "Marcus has an amazing eye for street photography. He captured the essence of NYC beautifully for our project.",
        date: "2024-10-20"
      },
      {
        id: 2,
        reviewerName: "James W.",
        rating: 4,
        comment: "Great candid shots and very unobtrusive. Perfect for capturing authentic street moments.",
        date: "2024-10-05"
      },
      {
        id: 3,
        reviewerName: "Anna S.",
        rating: 5,
        comment: "Loved working with Marcus! His street photography style is exactly what we needed for our urban campaign.",
        date: "2024-09-18"
      }
    ],
    contactInfo: {
      instagram: "@marcusstreet",
      website: "www.marcusthompsonphoto.com"
    }
  },
  {
    id: 4,
    name: "Emily Foster",
    category: "festivals",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
    bio: "Capturing the energy and spirit of live events",
    location: "Austin, TX",
    gear: {
      camera: "Sony A7 III",
      lenses: ["Sony 24-70mm f/2.8", "Sony 85mm f/1.4", "Sony 16-35mm f/2.8"],
      other: ["LED panels", "Wireless flash", "Ear protection"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop"
    ],
    experience: "5+ years",
    priceRange: "$250-600/event",
    rating: 4.7,
    totalReviews: 41,
    reviews: [
      {
        id: 1,
        reviewerName: "Carlos M.",
        rating: 5,
        comment: "Emily captured the energy of our music festival perfectly! The photos really show the crowd's excitement.",
        date: "2024-10-18"
      },
      {
        id: 2,
        reviewerName: "Rachel D.",
        rating: 4,
        comment: "Great festival photography. She knows how to work in low light conditions and crowded spaces.",
        date: "2024-10-02"
      },
      {
        id: 3,
        reviewerName: "Alex B.",
        rating: 5,
        comment: "Fantastic work at SXSW! Emily managed to get amazing shots even in the chaotic festival environment.",
        date: "2024-09-22"
      }
    ],
    contactInfo: {
      instagram: "@emilyfestival",
      website: "www.emilyfosterphoto.com"
    }
  },
  {
    id: 5,
    name: "David Kim",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
    bio: "Revealing the soul through portraiture",
    location: "San Francisco, CA",
    gear: {
      camera: "Canon EOS R6",
      lenses: ["Canon 85mm f/1.2", "Canon 50mm f/1.2", "Canon 35mm f/1.4"],
      other: ["Studio lights", "Reflectors", "Backdrop system"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop"
    ],
    experience: "10+ years",
    priceRange: "$300-750/session",
    rating: 4.9,
    totalReviews: 53,
    reviews: [
      {
        id: 1,
        reviewerName: "Michelle C.",
        rating: 5,
        comment: "David made me feel so comfortable during the shoot. The portraits came out absolutely stunning!",
        date: "2024-10-22"
      },
      {
        id: 2,
        reviewerName: "Robert J.",
        rating: 5,
        comment: "Professional headshots for our company turned out perfect. David really knows how to capture personality.",
        date: "2024-10-10"
      },
      {
        id: 3,
        reviewerName: "Sophie L.",
        rating: 4,
        comment: "Beautiful family portraits. David was patient with our kids and got some wonderful natural shots.",
        date: "2024-09-25"
      }
    ],
    contactInfo: {
      instagram: "@davidkimportrait",
      website: "www.davidkimphoto.com"
    }
  },
  {
    id: 6,
    name: "Luna Martinez",
    category: "landscape",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    bio: "Showcasing the world's natural wonders",
    location: "Denver, CO",
    gear: {
      camera: "Sony A7R IV",
      lenses: ["Sony 16-35mm f/2.8", "Sony 70-200mm f/2.8", "Sony 24-105mm f/4"],
      other: ["Carbon fiber tripod", "ND filter set", "Intervalometer"]
    },
    portfolio: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
    ],
    experience: "7+ years",
    priceRange: "$400-900/day",
    rating: 4.8,
    totalReviews: 36,
    reviews: [
      {
        id: 1,
        reviewerName: "Mark R.",
        rating: 5,
        comment: "Luna's landscape photography is breathtaking! She captured the Rocky Mountains beautifully for our calendar project.",
        date: "2024-10-16"
      },
      {
        id: 2,
        reviewerName: "Catherine N.",
        rating: 5,
        comment: "Amazing work on our national park documentation. Luna knows the best times and locations for stunning shots.",
        date: "2024-09-28"
      },
      {
        id: 3,
        reviewerName: "Brian K.",
        rating: 4,
        comment: "Great landscape shots for our tourism campaign. Professional and very knowledgeable about Colorado's best spots.",
        date: "2024-09-12"
      }
    ],
    contactInfo: {
      instagram: "@lunalandscapes",
      website: "www.lunamartinezphoto.com"
    }
  }
];