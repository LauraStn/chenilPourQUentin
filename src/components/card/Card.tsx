import { animalProps } from "@/utils/types";
import React from "react";

const Card = (animalProps: animalProps) => {
  return (
    <div className="max-w-sm text-black bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">
        Category: {animalProps.category.name}{" "}
      </h3>
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={animalProps.image}
          alt="Colors"
        />
        <p className="absolute top-0 bg-gray-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Owner: {animalProps.user.name}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {animalProps.name}
      </h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p>Arrival: {new Date(animalProps.arrival).toLocaleDateString()}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p>
            Departure: {new Date(animalProps.departure).toLocaleDateString()}
          </p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>Box Number: {animalProps.box.name} </p>
        </div>

        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Card;
