import AnimalsCard from "@/components/AnimalsCard";
import Image from "next/image";


const AllAnimalsPage =async () => {
    const res = await fetch("https://livestock-booking-platform-alpha.vercel.app/data.json")
    const animals = await res.json()
    const dataSlice = animals.sort((a, b) =>b.price - a.price);
     console.log(dataSlice)
  return (
      <div>
           <h1 className="text-center text-3xl font-bold mt-10 mb-5">Featured Animals</h1> 
           <div className="grid grid-cols-1 md:2 lg:grid-cols-4 gap-20">
            {
                dataSlice.map(animal=><AnimalsCard key={animal.id} animal={animal}></AnimalsCard>)
            }
           </div>
        </div>
  );
};

export default AllAnimalsPage;