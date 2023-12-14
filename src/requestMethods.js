// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });


import axios from "axios";

const BASE_URL = "https://e-commence-api-2n0f.onrender.com/api/";

// Check if localStorage item exists and has the expected structure
// const persistedData = JSON.parse(localStorage.getItem("persist:root"));
// const user = persistedData?.user ? JSON.parse(persistedData.user) : null;
// const TOKEN = user?.currentUser?.accessToken || null;


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});