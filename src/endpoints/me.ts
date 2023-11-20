import { postFile } from '../helpers/fetch';
import { loadUser } from '../helpers/localStorage';

const url = `${process.env.REACT_APP_API_URL}/me/`;

// Headers
const userFromLocalStorage = loadUser();
const headers = {
  authorization: `Bearer ${userFromLocalStorage?.token}`,
};

// Patch
export const updateAvatar = (file: File) =>
  postFile(`${url}avatar`, file, headers);
