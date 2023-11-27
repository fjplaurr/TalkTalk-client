import { postFile } from '../helpers/fetch';

const url = `${process.env.REACT_APP_API_URL}/me/`;

// Patch
export const updateAvatar = (file: File, accessToken: string) =>
  postFile(`${url}avatar`, file, {
    authorization: `Bearer ${accessToken}`,
  });
