export type registerProps = {
  name: string;
  email: string;
  password: string;
};

export type animalProps = {
  id: string;
  name: string;
  arrival: string;
  departure: string;
  image: string;
  boxId: string;
  ownerId: string;
  categoryId: string;
};

export type NewAnimalType = {
  name: string;
  arrival: string;
  departure: string;
  boxId: string;
  image: string;
  categoryId: string;
  ownerId: string;
};
