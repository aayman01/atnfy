import Footer from "@/components/Footer";
import Banner from "@/components/homepage/banner/Banner";
import NewArrivalsItems from "@/components/homepage/NewArrivalsItems";
import Heading from "@/components/Shared/Heading";

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner />
      <Heading text="NEW ARRIVALS" />
      <NewArrivalsItems/>
      <Footer />
    </div>
  );
};

export default HomePage;
