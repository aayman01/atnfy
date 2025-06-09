import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/homepage/navbar/NavBar";

const HomePage = () => {
    return (
      <div>
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
        </div>
        <Banner />
        <Footer />
      </div>
    );
};

export default HomePage;