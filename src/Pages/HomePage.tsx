import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/homepage/NavBar";

const HomePage = () => {
    return (
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    );
};

export default HomePage;