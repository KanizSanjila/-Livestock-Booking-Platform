import { FaTeethOpen } from "react-icons/fa";
import { GiAges } from "react-icons/gi";
import { IoFitness } from "react-icons/io5";
import { PiCow } from "react-icons/pi";

const QurbaniTips = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-5">
          <h2 className="text-3xl font-extrabold text-slate-900">Qurbani Preparation Tips</h2>
          <p className="text-slate-500 mt-2">Essential guidelines for choosing a healthy sacrificial animal</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          
          <div className="p-8 bg-blue-50 rounded-2xl">
            <div className="text-3xl mb-4"><PiCow /></div>
            <h3 className="text-xl text-blue-900 font-bold mb-2">Age Limit</h3>
            <p className="text-slate-600 text-sm">Cows must be at least 2 years old, and goats/sheep should be 1 year old.</p>
          </div>

          <div className="p-8 bg-orange-50 rounded-2xl">
            <div className="text-3xl mb-4"><FaTeethOpen /></div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">Teeth Verification</h3>
            <p className="text-slate-600 text-sm">Check for two permanent front teeth (Do-Danta) to ensure the animal is mature.</p>
          </div>
          
          <div className="p-8 bg-green-50 rounded-2xl">
            <div className="text-3xl mb-4"><IoFitness /></div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Physical Fitness</h3>
            <p className="text-slate-600 text-sm">The animal should be active and free from any visible defects or sickness.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;