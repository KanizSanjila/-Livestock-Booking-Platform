
const TopBreeds = () => {
  return (
   <div>
         <div className="text-center mb-5 gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Top Featured Breeds</h2>
            <p className="text-slate-500 mt-2">Discover the most demanded livestock breeds for this season.</p>
          </div>
           <div className="space-y-5">
             <div className="bg-amber-100 p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800">Deshi Shahi Cow</h3>
              <p className="text-slate-500 text-sm mt-2">Deshi Shahi Cow (often a cross between the local Deshi breeds and the famous Sahiwal cattle) is one of the most prized breeds in Bangladesh, especially for Qurbani. They are highly valued for their meat quality, majestic appearance, and adaptability to the local climate.</p>
            </div>
              <div className=" bg-sky-100 p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800">Australian Brahman Bull</h3>
              <p className="text-slate-500 text-sm mt-2">The Australian Brahman Bull is a powerhouse in the livestock industry, known for its massive size, high meat yield, and incredible resilience. In the context of a marketplace like yours, these are often listed as Heavyweight or Elite category animals.</p>
            </div>
             <div className="bg-purple-100 p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800">Jamunapari Goat</h3>
              <p className="text-slate-500 text-sm mt-2">The Jamunapari Goat is often called the King of Goats in South Asia. Originating from the Jamuna River area in India, it is one of the most popular and profitable breeds in Bangladesh for both milk and meat (Qurbani).

On your platform, these would be perfect for the Premium Small Animal or Dual Purpose category</p>
            </div>
           </div>
          </div>
  );
};

export default TopBreeds;
