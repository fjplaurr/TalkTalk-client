// Gets generic data
export const get = async (url: string, headers = {}) => {
  const request: RequestInit = {
    method: 'GET',
    headers: {
      ...headers,
    },
  };
  const response = await fetch(url, request);
  return response.json();
};

// Posts generic data
export const post = async (url: string, data: {}, headers = {}) => {
  const body = JSON.stringify(data);
  const request: RequestInit = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  const response = await fetch(url, request);
  if (response.status === 204) {
    return response;
  }
  return response.json();
};

// Puts generic data
export const put = async (url: string, data: {}, headers = {}) => {
  const body = JSON.stringify(data);
  const request: RequestInit = {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  const response = await fetch(url, request);
  if (response.status === 204) {
    return response;
  }
  return response.json();
};

// Patches generic data
export const patch = async (url: string, data: {}, headers = {}) => {
  const body = JSON.stringify(data);
  const request: RequestInit = {
    method: 'PATCH',
    body,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  const response = await fetch(url, request);
  if (response.status === 204) {
    return response;
  }
  return response.json();
};

// Deletes single file by id
export const deleteById = async (url: string, headers = {}) => {
  const request: RequestInit = {
    method: 'DELETE',
    headers,
  };
  const response = await fetch(url, request);
  if (response.status === 204) {
    return response;
  }
  return response.json();
};

// Posts a file using FormData
export const postFile = async (url: string, file: File, headers = {}) => {
  const formData = new FormData();
  formData.append('avatar', file);
  const request: RequestInit = {
    method: 'POST',
    body: formData,
    headers,
  };
  const response = await fetch(url, request);
  if (response.status === 204) {
    return response;
  }
  return response.json();
};
