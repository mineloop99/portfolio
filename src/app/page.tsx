import { Suspense } from "react";
import Loading from "@portfolio/components/utils/Loading";
import HeroSection from "@portfolio/components/home/HeroSection";
import HeaderSection from "@portfolio/components/home/HeaderSection";
import AboutMe from "@portfolio/components/home/AboutMe";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* {Only header & auth section} */}
      <Suspense fallback={<Loading />}>
        <HeaderSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HeroSection
          title1="Smart AI Assistant for"
          title1Colored="Top Trending Business"
          title2="With a good assistant: easy decision, clear vision, get success."
        />
      </Suspense>
    </div>
  );
};

export default Home;
