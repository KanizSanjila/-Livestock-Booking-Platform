import { ModalForm } from "@/components/ModalForm";
import { Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaWeight } from "react-icons/fa";


const AnimalDetailsPage =async ({params}) => {
    const {id} =await params
    // console.log(id)
     const res = await fetch("https://livestock-booking-platform-alpha.vercel.app/data.json")
    const animals = await res.json()
    const animal = animals.find(a=>a.id==id)
    // console.log(animal)
    const {name,age,price,image,weight,location,category,type,description,breed} = animal
  return (
    <div className="bg-gray-100 rounded shadow-lg flex justify-center items-center mt-10 p-5">
 <div className="relative">
     <figure>
   <Image src={image} width={300} height={200} alt={name} className="rounded-2xl"></Image>
  </figure>
   <Chip size='md' color="success" className='absolute right-2 top-2 font-bold'>{category}</Chip>
 </div>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge  badge-dash badge-success font-bold">Age:{age}</div>
    </h2>
    <p> {description}</p>
    <h3 className="font-bold text-[#631a37] text-2xl">${price}</h3>
    <div>
        <h4 className="text-xl">Type:{type}</h4>
        <h4 className="text-xl">Breed:{breed}</h4>
       <div className="flex justify-between gap-4 mt-3 text-sm border-t border-gray-400 p-5">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-orange-600 flex justify-between items-center gap-1 text-2xl"><FaWeight /> {weight}kg</span>
                </div>
                <Separator orientation='vertical'></Separator>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-blue-600 flex justify-between items-center gap-1 text-2xl"><CiLocationOn /> {location}</span>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
      <ModalForm></ModalForm>
    </div>
    </div>
  </div>
</div>
  );
};

export default AnimalDetailsPage;