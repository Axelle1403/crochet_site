export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'accessories' | 'clothing' | 'unique';
  image: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
