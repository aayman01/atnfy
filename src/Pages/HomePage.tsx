import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/homepage/NavBar";

const HomePage = () => {
    return (
      <div className="container mx-auto"> 
        <Navbar />
        {/* <Test/> */}
        <Banner/>
        <Footer/>
      </div>
    );
};

export default HomePage;