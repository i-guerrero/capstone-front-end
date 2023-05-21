const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getAllProjects() {
  const request = fetch(`${BASE_URL}/projects`)
    .then((response) => response.json())
    .then((Allprojects) => Allprojects);
  console.log(request);
  return request;
}
