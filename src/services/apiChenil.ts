import axios from 'axios';

export async function getAllAnimals() {
  const url = `hhttps://kennel-api-b46f3e223574.herokuapp.com/animal/all`;
  return axios.get(url).then((res) => res.data);
}

export type NewAnimalType = {
  name: string;
  arrival: string;
  departure: string;
  boxId: string;
  image: string;
  categoryId: string;
  ownerId: string;
};

export async function postNewAnimal(data: NewAnimalType) {
  const url = ``;
  const axiosConfig: any = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };
  return axios.post(
    url,
    {
      name: data.name,
      arrival: data.arrival,
      departure: data.departure,
      boxId: data.boxId,
      image: data.image,
      ownerId: data.ownerId,
    },
    axiosConfig
  );
}
