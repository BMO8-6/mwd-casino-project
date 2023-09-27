const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createUser = (
  id,
  firstName,
  lastName,
  email,
  password,
  balance,
  gamesPlayed,
  achievements,
  favorites
) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      firstName,
      lastName,
      email,
      password,
      balance,
      gamesPlayed,
      achievements,
      favorites
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllUsers = () => {
  return axios
    .get("/Services/users.json")
    .then((response) => {
      console.log("All users: " + JSON.stringify(response.data));
      return response.data;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
