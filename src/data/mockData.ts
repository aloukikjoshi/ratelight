
import { Item, Review, User, Category } from "./types";

// Mock Users
export const users: User[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    reviewCount: 42,
  },
  {
    id: "u2",
    name: "Maya Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    reviewCount: 28,
  },
  {
    id: "u3",
    name: "Jordan Lee",
    avatar: "https://i.pravatar.cc/150?img=3",
    reviewCount: 17,
  },
  {
    id: "u4",
    name: "Taylor Chen",
    avatar: "https://i.pravatar.cc/150?img=9",
    reviewCount: 35,
  },
  {
    id: "u5",
    name: "Sam Wilson",
    avatar: "https://i.pravatar.cc/150?img=7",
    reviewCount: 22,
  },
];

// Mock Items (Places)
export const items: Item[] = [
  {
    id: "i1",
    name: "Gourmet Palace",
    category: "Restaurants",
    description: "Fine dining with a modern twist, serving fusion cuisine.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    address: "123 Culinary Ave, Downtown",
    avgRating: 4.7,
    reviewCount: 128,
  },
  {
    id: "i2",
    name: "Boutique Luxe Hotel",
    category: "Hotels",
    description: "Luxury boutique hotel with personalized service and elegant rooms.",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    address: "456 Comfort Lane, City Center",
    avgRating: 4.8,
    reviewCount: 87,
  },
  {
    id: "i3",
    name: "Fashion Forward",
    category: "Shopping",
    description: "Trendy boutique offering the latest fashion and accessories.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww",
    address: "789 Style Street, Fashion District",
    avgRating: 4.5,
    reviewCount: 64,
  },
  {
    id: "i4",
    name: "Cinema Paradiso",
    category: "Entertainment",
    description: "Modern cinema with the latest releases and comfortable seating.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fHww",
    address: "101 Entertainment Blvd, Arts District",
    avgRating: 4.6,
    reviewCount: 92,
  },
  {
    id: "i5",
    name: "Tech Repair Pro",
    category: "Services",
    description: "Professional tech repair services with quick turnaround times.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D",
    address: "202 Gadget Street, Tech Park",
    avgRating: 4.4,
    reviewCount: 53,
  },
  {
    id: "i6",
    name: "Green Valley Spa",
    category: "Services",
    description: "Relaxing spa treatments in a tranquil environment.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww",
    address: "303 Wellness Way, Relaxation District",
    avgRating: 4.9,
    reviewCount: 76,
  },
  {
    id: "i7",
    name: "Urban Brews",
    category: "Restaurants",
    description: "Artisanal coffee shop with freshly baked pastries.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    address: "404 Bean Street, Hipster Quarter",
    avgRating: 4.6,
    reviewCount: 103,
  },
  {
    id: "i8",
    name: "Vintage Finds",
    category: "Shopping",
    description: "Curated collection of vintage items and antiques.",
    image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlZCUyMGJvb2tzfGVufDB8fDB8fHww",
    address: "505 Nostalgia Lane, Historic District",
    avgRating: 4.3,
    reviewCount: 45,
  },
];

// Mock Reviews
export const reviews: Review[] = [
  {
    id: "r1",
    userId: "u1",
    itemId: "i1",
    rating: 5,
    comment: "Absolutely fantastic experience! The food was exceptional and the service was top-notch. Will definitely be returning soon.",
    date: "2024-06-15",
    helpful: 24,
  },
  {
    id: "r2",
    userId: "u2",
    itemId: "i1",
    rating: 4,
    comment: "Great food and atmosphere. Service was a bit slow during peak hours, but the quality of the dishes made up for it.",
    date: "2024-07-02",
    helpful: 12,
  },
  {
    id: "r3",
    userId: "u3",
    itemId: "i2",
    rating: 5,
    comment: "The hotel exceeded all my expectations. The room was immaculate and the staff went above and beyond to make our stay comfortable.",
    date: "2024-05-20",
    helpful: 32,
  },
  {
    id: "r4",
    userId: "u4",
    itemId: "i3",
    rating: 4,
    comment: "Great selection of clothes and helpful staff. Prices are a bit on the higher side, but the quality justifies it.",
    date: "2024-08-10",
    helpful: 8,
  },
  {
    id: "r5",
    userId: "u5",
    itemId: "i4",
    rating: 5,
    comment: "The cinema has the most comfortable seats I've ever experienced. Great sound system and the snack bar offers unique options.",
    date: "2024-09-05",
    helpful: 19,
  },
  {
    id: "r6",
    userId: "u1",
    itemId: "i5",
    rating: 4,
    comment: "They fixed my laptop quickly and at a reasonable price. The technician explained everything clearly.",
    date: "2024-07-28",
    helpful: 15,
  },
  {
    id: "r7",
    userId: "u2",
    itemId: "i6",
    rating: 5,
    comment: "Best massage I've ever had! The atmosphere is so relaxing and the staff are true professionals. Worth every penny.",
    date: "2024-08-15",
    helpful: 27,
  },
  {
    id: "r8",
    userId: "u3",
    itemId: "i7",
    rating: 4,
    comment: "Love their specialty coffees and the morning pastries are always fresh. Can get crowded on weekends though.",
    date: "2024-09-18",
    helpful: 11,
  },
  {
    id: "r9",
    userId: "u4",
    itemId: "i8",
    rating: 5,
    comment: "A treasure trove of unique items! I spent hours browsing and found some amazing pieces. The owner is very knowledgeable.",
    date: "2024-06-30",
    helpful: 22,
  },
  {
    id: "r10",
    userId: "u5",
    itemId: "i1",
    rating: 3,
    comment: "Food was good but portions were smaller than expected for the price. The ambiance is nice though.",
    date: "2024-07-10",
    helpful: 7,
  },
  {
    id: "r11",
    userId: "u1",
    itemId: "i4",
    rating: 4,
    comment: "Great movie selection and the premium screens are worth the extra cost. Concession prices are typical for a cinema.",
    date: "2024-09-12",
    helpful: 14,
  },
  {
    id: "r12",
    userId: "u2",
    itemId: "i5",
    rating: 5,
    comment: "They saved my data from a failing hard drive! Fast service and they kept me updated throughout the process.",
    date: "2024-08-05",
    helpful: 31,
  },
  {
    id: "r13",
    userId: "u3",
    itemId: "i3",
    rating: 3,
    comment: "Decent selection but sizes run small. The return policy is convenient though, and staff are helpful.",
    date: "2024-07-22",
    helpful: 6,
  },
  {
    id: "r14",
    userId: "u4",
    itemId: "i6",
    rating: 5,
    comment: "The hot stone massage was incredible! Left feeling completely refreshed. The facilities are clean and modern.",
    date: "2024-06-10",
    helpful: 29,
  },
  {
    id: "r15",
    userId: "u5",
    itemId: "i7",
    rating: 4,
    comment: "Their cold brew is the best in town. Comfortable seating area to work or chat. WiFi can be spotty during busy times.",
    date: "2024-08-28",
    helpful: 17,
  },
];

// Helper function to get reviews for a specific item
export const getReviewsForItem = (itemId: string): Review[] => {
  return reviews.filter(review => review.itemId === itemId);
};

// Helper function to get user by ID
export const getUserById = (userId: string): User | undefined => {
  return users.find(user => user.id === userId);
};

// Helper function to get item by ID
export const getItemById = (itemId: string): Item | undefined => {
  return items.find(item => item.id === itemId);
};

// Helper function to get all categories
export const getAllCategories = (): Category[] => {
  return ["Restaurants", "Hotels", "Shopping", "Entertainment", "Services"];
};
