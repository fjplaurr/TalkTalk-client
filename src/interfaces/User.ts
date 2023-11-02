export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  following?: string[];
  followers?: string[];
  text: string;
  pictureSrc: string;
}
