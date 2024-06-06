// export async function register(registerProps: registerProps) {

import { registerProps } from "@/utils/types";
import axios from "axios";

//   }

export const register = async (registerProps: registerProps) => {
  let url = `https://kennel-api-b46f3e223574.herokuapp.com/auth/signup`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios.post(
    url,
    {
      email: registerProps.email,
      password: registerProps.password,
      name: registerProps.name,
    },
    axiosConfig
  );
};
