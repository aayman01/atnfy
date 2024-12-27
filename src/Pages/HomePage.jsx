import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/homepage/NavBar";
import Slide from "@/components/Slide";
const HomePage = () => {
    return (
      <div className="container mx-auto"> 
        <Navbar />
        <Banner/>
        <Footer/>
      </div>
    );
};

export default HomePage;