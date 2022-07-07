export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}
