import { animalProps } from '@/utils/types';
import axios from 'axios';

export async function getAllAnimals() {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/animal/all`;
  return axios.get(url).then((res) => res.data);
}

export async function getAllBox(jwt?: string) {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/box/all`;
  const axiosConfig: any = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`,
    },
  };
  return axios.get(url, axiosConfig);
}

export async function getAllCategory(jwt?: string) {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/category/all`;
  const axiosConfig: any = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`,
    },
  };
  return axios.get(url, axiosConfig);
}

export async function getAllUser(jwt?: string) {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/user/all`;
  const axiosConfig: any = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`,
    },
  };
  return axios.get(url, axiosConfig);
}

export async function postNewAnimal(data: animalProps) {
  const url = `https://kennel-api-b46f3e223574.herokuapp.com/animal/create`;
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
      image: data.image,
      box: data.box,
      category: data.category,
      owner: data.user,
    },
    axiosConfig
  );
}
