"use client";
import { useState } from "react";
import Link from "next/link";


const AllAnimalsPage =() => {
    // Your JSON Data
  const [animals, setAnimals] = useState([
  {
    "id": 1,
    "name": "Deshi Shahi Cow",
    "type": "Cow",
    "breed": "Local Deshi",
    "price": 120000,
    "weight": 280,
    "age": 3,
    "location": "Bogura",
    "description": "A healthy local deshi cow, well-fed with natural food and suitable for Qurbani.",
    "image": "https://i.ibb.co/7xnwS5kx/lachlan-rennie-p4-LVGLDTf-Po-unsplash.jpg",
    "category": "Large Animal"
  },
  {
    "id": 2,
    "name": "Australian Brahman Bull",
    "type": "Cow",
    "breed": "Brahman",
    "price": 220000,
    "weight": 450,
    "age": 4,
    "location": "Dhaka",
    "description": "An imported Brahman bull with a large body size, ideal for Qurbani.",
    "image": "https://i.ibb.co/hRjwfhZM/kristine-kozaka-47-KMnzu-Ft-WI-unsplash.jpg",
    "category": "Large Animal"
  },
  {
    "id": 3,
    "name": "Black Bengal Goat",
    "type": "Goat",
    "breed": "Black Bengal",
    "price": 18000,
    "weight": 25,
    "age": 2,
    "location": "Rajshahi",
    "description": "A popular Black Bengal goat from Bangladesh, healthy and well-fattened.",
    "image": "https://i.ibb.co/LDt62W85/wilsan-u-XW0kfll-B3i8-unsplash.jpg",
    "category": "Small Animal"
  },
  {
    "id": 4,
    "name": "Jamunapari Goat",
    "type": "Goat",
    "breed": "Jamunapari",
    "price": 35000,
    "weight": 40,
    "age": 3,
    "location": "Khulna",
    "description": "A tall and premium Jamunapari goat, suitable for high-quality Qurbani.",
    "image": "https://i.ibb.co/VWJLkv71/nandhu-kumar-j-AMc-Ubs-Tv-WE-unsplash.jpg",
    "category": "Small Animal"
  },
  {
    "id": 5,
    "name": "Sahiwal Cow",
    "type": "Cow",
    "breed": "Sahiwal",
    "price": 180000,
    "weight": 380,
    "age": 4,
    "location": "Chattogram",
    "description": "A high-quality Sahiwal breed cow with good health and impressive weight.",
    "image": "https://i.ibb.co/Dg1C5FrM/suryadip-dodiya-ex-gf-Teq-Kx8-unsplash.jpghttps://i.ibb.co/tpT3xk2g/arpan-mondal-fzwq-RUe-Ypws-unsplash.jpghttps://i.ibb.co/1YC2vVrd/billow926-s-Gad-Ug0r2-I-unsplash.jpghttps://i.ibb.co/NgNX1XPj/matthew-stephenson-96jl3-R-EI58-unsplash.jpghttps://i.ibb.co/hRjwfhZM/kristine-kozaka-47-KMnzu-Ft-WI-unsplash.jpghttps://i.ibb.co/7xnwS5kx/lachlan-rennie-p4-LVGLDTf-Po-unsplash.jpg",
    "category": "Large Animal"
  },
  {
    "id": 6,
    "name": "Local White Goat",
    "type": "Goat",
    "breed": "Deshi",
    "price": 15000,
    "weight": 20,
    "age": 2,
    "location": "Sylhet",
    "description": "A local white goat, healthy and a good option for Qurbani.",
    "image": "https://i.ibb.co/VWJLkv71/nandhu-kumar-j-AMc-Ubs-Tv-WE-unsplash.jpg",
    "category": "Small Animal"
  }
]);

  const [sortOrder, setSortOrder] = useState("");

  // Sorting Logic
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...animals].sort((a, b) => {
      return order === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });
    setAnimals(sortedData);
  };

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
      {/* Header & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">All Livestock</h1>
          <p className="text-slate-500">Find the perfect animal for your needs</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-700">Sort By:</span>
          <select 
            className="select select-bordered w-full max-w-xs focus:outline-none"
            onChange={(e) => handleSort(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select Price Range</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map((animal) => (
          <div key={animal.id} className="card bg-base-100 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
            {/* Image Section */}
            <figure className="relative h-60 w-full overflow-hidden">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 badge badge-neutral opacity-90">{animal.category}</div>
            </figure>

            {/* Content Section */}
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-xl font-bold text-slate-800">{animal.name}</h2>
                <div className="badge badge-outline text-xs">{animal.type}</div>
              </div>
              
              <div className="space-y-2 mt-4 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <span>⚖️</span> <span>Weight: <strong>{animal.weight} kg</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span> <span>Location: <strong>{animal.location}</strong></span>
                </div>
              </div>

              <div className="divider my-2"></div>

              <div className="card-actions justify-between items-center mt-2">
                <div className="text-2xl font-black text-primary">
                  ৳ {animal.price.toLocaleString()}
                </div>
                <Link href={`/animals/${animal.id}`}>
                    <button className="btn btn-primary btn-sm rounded-lg px-5 shadow-md">Details</button>
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