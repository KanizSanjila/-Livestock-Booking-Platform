"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import 'animate.css';
import { FaWeight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { Chip } from "@heroui/react";
import Marquee from "react-fast-marquee";

const AllAnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://livestock-booking-platform-alpha.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      });
  }, []);

  const handleSort = (order) => {
    const sortedData = [...animals].sort((a, b) => {
      return order === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });
    setAnimals(sortedData);
  };

  if (loading) return <div className="text-center py-20">Loading Animals...</div>;

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
  
      <div className="flex flex-col md:flex-row justify-between items-center mb-1 gap-4 animate__animated animate__fadeIn">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">All Livestock</h1>
          <p className="text-slate-500">Find the perfect animal for your needs</p>
      <div className="bg-gray-200 p-1 m-1">
          <Marquee pauseOnHover={true}> This platform connects farmers and traders through a seamless, modern interface.</Marquee>
      </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-700">Sort By:</span>
          <select 
            className="select select-bordered w-full max-w-xs focus:outline-none shadow-sm"
            onChange={(e) => handleSort(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select Price Range</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map((animal, index) => (
          <div 
            key={animal.id} 
            className="card bg-base-100 shadow-lg border border-slate-100">
          
           <div className='relative w-full aspect-square'>
                      <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={animal.image} alt={animal.name} className='rounded-xl object-cover'></Image>
                      <Chip size='md' color="success" className='absolute right-2 top-2 font-bold'>{animal.category}</Chip>
                      </div> 

            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-xl font-bold text-slate-800">{animal.name}</h2>
                <div className="badge badge-outline text-xs">{animal.type}</div>
              </div>
              
              <div className="space-y-2 mt-4 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <FaWeight/> <span>Weight: <strong>{animal.weight} kg</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn /> <span>Location: <strong>{animal.location}</strong></span>
                </div>
              </div>

              <div className="divider my-2"></div>

              <div className="card-actions justify-between items-center mt-2">
                <div className="text-2xl font-black text-[#631a37]">
                  $ {animal.price.toLocaleString()}
                </div>
                <Link href={`/all-animals/${animal.id}`}>
                  <button className="btn bg-[#631a37] text-white btn-sm rounded-lg px-5">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;