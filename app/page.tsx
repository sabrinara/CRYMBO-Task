import BannerLayout from "./components/banner/BannerLayout";
import HowCrymboPayWork from "./components/howcrymbopaywork/HowCrymboPayWork";
import WhyChooseCrymbo from "./components/whyChoosecrymbo/WhyChooseCrymbo";




export default function Home() {
  return (
    <div className="w-[1600px]">
      <BannerLayout />
      <WhyChooseCrymbo />
      <HowCrymboPayWork />
    </div>
  );
}
