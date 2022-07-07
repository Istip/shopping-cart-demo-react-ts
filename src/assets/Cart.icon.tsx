import React from 'react';

interface Props {
  color?: string | 'currentColor';
  size?: number;
}

const CartIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.50545 12.5741L5.50678 12.5825L5.50835 12.5915L5.72827 13.911C5.92918 15.1165 6.97216 16 8.19425 16H19.5C19.7761 16 20 15.7761 20 15.5C20 15.2239 19.7761 15 19.5 15H8.19425C7.461 15 6.83521 14.4699 6.71466 13.7466L6.59023 13H19.5C19.7232 13 19.9194 12.852 19.9808 12.6374L21.9808 5.63736C22.072 5.31795 21.8322 5 21.5 5H5.25526C5.01903 3.84029 3.99756 3 2.80575 3H2.5C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H2.80575C3.539 4 4.16479 4.53012 4.28534 5.2534L5.50545 12.5741ZM6.42356 12L5.42356 6H20.8371L19.1228 12H6.42356ZM8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21ZM9 19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19ZM17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19C19 20.1046 18.1046 21 17 21ZM18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 18.4477 16.4477 18 17 18C17.5523 18 18 18.4477 18 19Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};

export default CartIcon;
