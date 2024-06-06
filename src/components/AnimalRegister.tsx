import React, { useEffect, useState } from 'react';
import DropdownList from './UI/DropdownList';
import { InputForm } from './UI/InputForm';
import { getAllBox, postNewAnimal } from '@/services/apiChenil';

const AnimalRegister = () => {
  const [animalName, setAnimalName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const jwt: string | any = localStorage.getItem('jwt');
    getAllBox(jwt);
  }, []);

  useEffect(() => {
    console.log({
      animalName: animalName,
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      image: image,
    });
  }, [animalName, arrivalDate, departureDate, image]);
  return (
    <div className="w-full bg-grey-500">
      <div className="container mx-auto py-8">
        <div className="w-96 mx-auto bg-white rounded shadow">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
            Register Animal
          </div>
          <form name="student_application" id="student_application" action="">
            <div className="py-4 px-8">
              <InputForm
                title={'Animal name'}
                name={'animal_name'}
                setter={setAnimalName}
              />

              <InputForm
                title={'Arrival date'}
                name={'arrival_date'}
                setter={setArrivalDate}
              />

              <InputForm
                title={'Departure date'}
                name={'departure_date'}
                setter={setDepartureDate}
              />

              <InputForm
                title={'image(url)'}
                name={'image'}
                setter={setImage}
              />

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Box :
                </label>
                <DropdownList content={'box'} listContent={undefined} />
              </div>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Category :
                </label>
                <DropdownList content={'category'} listContent={undefined} />
              </div>

              <div className="mb-4">
                <button className="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalRegister;
