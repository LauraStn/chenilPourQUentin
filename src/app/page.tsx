"use client";
import Header from "@/components/Header/Header";
import Card from "@/components/card/Card";
import Wrapper from "@/components/wrapper/Wrapper";
import { getAllAnimals } from "@/services/apiChenil";
import { animalProps } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [animalsList, setAnimalsList] = useState<animalProps[]>([]);

  useEffect(() => {
    getAllAnimals().then((res) => setAnimalsList(res));
  }, []);
  console.log(animalsList);

  return (
    <main>
      <Header />
      <Wrapper>
        {animalsList &&
          animalsList.map((animal) => (
            <Card
              id={animal.id}
              name={animal.name}
              arrival={animal.arrival}
              departure={animal.departure}
              image={animal.image}
              user={animal.user}
              box={animal.box}
              category={animal.category}
            />
          ))}
      </Wrapper>
    </main>
  );
}
