export type registerProps = {
  name: string;
  email: string;
  password: string;
};
export type categoryProps = {
  id?: string;
  name: string;
};

export type userProps = {
  id?: string;
  name: string;
};
export type boxProps = {
  id?: string;
  name: string;
};
export type animalProps = {
  id: string;
  name: string;
  arrival: string;
  departure: string;
  image: string;
  box: boxProps;
  user: userProps;
  category: categoryProps;
};
