import AnimalsCard from "./AnimalsCard";


const FeaturedAnimals =async () => {
    const res = await fetch("https://livestock-booking-platform-alpha.vercel.app/data.json")
    const data = await res.json()
    const animals = data.slice(0,4)
    // console.log(animals)
    return (
        <div>
           <h1 className="text-center text-3xl font-bold mt-10 mb-5">Featured Animals</h1> 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {
                animals.map(animal=><AnimalsCard key={animal.id} animal={animal}></AnimalsCard>)
            }
           </div>
        </div>
    );
};

export default FeaturedAnimals;