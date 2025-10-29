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
    contactInfo: {
      email: "alex@sportsshots.com",
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
    contactInfo: {
      email: "sarah@wildlifecaptures.com",
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
    contactInfo: {
      email: "marcus@streetvibes.com",
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
    contactInfo: {
      email: "emily@festivalshots.com",
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
    contactInfo: {
      email: "david@portraitpro.com",
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
    contactInfo: {
      email: "luna@landscapes.com",
      instagram: "@lunalandscapes",
      website: "www.lunamartinezphoto.com"
    }
  }
];