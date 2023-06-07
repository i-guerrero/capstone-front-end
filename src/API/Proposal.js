const BASE_URL = process.env.REACT_APP_BASE_URL;


export function getAllProposals() {
  const request = fetch(`${BASE_URL}/proposals`)
    .then((response) => response.json())
    .then((AllProposals) => AllProposals);
  // console.log(request)
  return request;
}

//idea; every time mentors click join appears the project in detail in the next page 

export function createNewProposals(proposals) {
  const request = fetch(`${BASE_URL}/proposals`, {
    method: "POST",
    body: JSON.stringify(proposals),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((newProposalsEnd) => newProposalsEnd)
    .catch((err) => console.log("Error getting New proposals"));
  return request;
}























// export function getOneproposals(id) {
//   const request = fetch(`${BASE_URL}/${id}`)
//     .then((response) => response.json())
//     .then((oneproposals) => oneproposals)
//     .catch((err) => console.log("Error getting one proposals"));
//   return request;
// }



// export function updateproposals(id, proposals) {
//   const request = fetch(`${BASE_URL}/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(proposals),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((proposalsUpdated) => proposalsUpdated)
//     .catch((err) => console.log("Error updating"));

//   return request;
// }

// export function deleteproposals(id) {
//   const request = fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
//     .then((response) => response.json())
//     .then((proposalsDeleted) => proposalsDeleted)
//     .catch((error) => console.log("Error deleting"));
//   return request;
// }
