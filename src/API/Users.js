const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getUserByFirebaseId( firebase_uid ) {
  const request = fetch(`${BASE_URL}/users/${firebase_uid}/firebase`)
    .then((response) => response.json())
    .then((user) => user);
    return request;
}
