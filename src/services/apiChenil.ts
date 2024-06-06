import axios from "axios";

export async function getAllAnimals() {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/animal/all`;
  return axios.get(url).then((res) => res.data);
}
