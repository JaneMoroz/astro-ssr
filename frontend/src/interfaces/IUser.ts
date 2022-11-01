import type ICartItem from "./ICartItem";

interface IUser {
  name: string;
  email: string;
  cart: ICartItem[];
}

export default IUser;
