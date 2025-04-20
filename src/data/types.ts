
export type Category = 
  | "Restaurants" 
  | "Hotels" 
  | "Shopping" 
  | "Entertainment" 
  | "Services";

export interface Review {
  id: string;
  userId: string;
  itemId: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  images?: string[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  reviewCount: number;
}

export interface Item {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  address: string;
  avgRating: number;
  reviewCount: number;
}
