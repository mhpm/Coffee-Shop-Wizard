// Types for coffee shop data
export interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  bgColor: string;
}

export interface Size {
  id: number;
  name: string;
  price: number;
}

export interface MilkType {
  id: number;
  name: string;
  price: number;
}

export interface Extra {
  id: number;
  name: string;
  price: number;
}

// Category mapping type
export interface CategoryMapping {
  [key: string]: string[];
}