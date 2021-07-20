export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Jack',
      price: 799,
      description: 'I am happy with this blog.'
    },
    {
      id: 2,
      name: 'Harry',
      price: 699,
      description: 'Wonderful ever!'
    },
    {
      id: 3,
      name: 'Susan',
      price: 299,
      description: 'Welcome to our platform.'
    }
  ];