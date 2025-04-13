import BannerLayout from "./components/banner/BannerLayout";
import CompetitiveAdvantage from "./components/competitiveadvantage/CompetitiveAdvantage";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/getintouch/GetInTouch";
import HowCrymboPayWork from "./components/howcrymbopaywork/HowCrymboPayWork";
import KeyFeatures from "./components/keyfeatures/KeyFeatures";
import WhoIsCrymboPayFor from "./components/whoiscrymbopayfor/WhoIsCrymboPayFor";
import WhyChooseCrymbo from "./components/whyChoosecrymbo/WhyChooseCrymbo";




export default function Home() {
  return (
    <div className="lg:w-[1600px]">
      <BannerLayout />
      <WhyChooseCrymbo />
      <HowCrymboPayWork />
      <WhoIsCrymboPayFor/>
      <KeyFeatures/>
      <CompetitiveAdvantage/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}
