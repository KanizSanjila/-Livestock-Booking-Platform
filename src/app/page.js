import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
    </div>
  );
}
