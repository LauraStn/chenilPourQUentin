import Header from "@/components/Header/Header";
import Card from "@/components/card/Card";
import Wrapper from "@/components/wrapper/Wrapper";
import { useState } from "react";

export default function Home() {
  const [animalsList, setAnimalsList] = useState([]);

  // useEffect(()=>{
  //   getAllAnimals.then((res)=>setAnimalsList(res))
  // },[])
  return (
    <main>
      <Header />
      <Wrapper>
        <Card
          id={""}
          name={""}
          arrival={""}
          departure={""}
          image={""}
          boxId={""}
          ownerId={""}
          categoryId={""}
        />
      </Wrapper>
    </main>
  );
}
