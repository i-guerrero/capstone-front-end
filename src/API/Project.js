const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getAllProjects() {
  const request = fetch(`${BASE_URL}/projects`)
    .then((response) => response.json())
    .then((Allprojects) => Allprojects);
  // console.log(request);
  return request;
}

export function createNewProjects(projects) {
  const request = fetch(`${BASE_URL}/projects`, {
    method: "POST",
    body: JSON.stringify(projects),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((newProjectsEnd) => newProjectsEnd)
    .catch((err) => console.log("Error getting New projects"));
  return request;
}
