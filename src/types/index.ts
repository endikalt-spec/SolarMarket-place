export type Category = 'panels' | 'inverters' | 'batteries' | 'cleaning' | 'maintenance';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  specs?: Record<string, string>;
  isService?: boolean;
}

export interface Service extends Product {
  isService: true;
}
