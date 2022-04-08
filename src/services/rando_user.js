import axios from "axios";

const BASE_URL = `https://api.randomuser.me/`;

export async function fetchUser(){
try {
  let response = await axios.get(`${BASE_URL}`);
  //console.log(response.data.results[0]);
  return response.data.results[0];
} catch (error) {
  console.log(error);
}
  }
 
  // export default fetchUser;