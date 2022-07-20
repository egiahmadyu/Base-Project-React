import { useEffect } from "react";
import ContentContainer from "../components/ContentContainer/content-container";
import DescContrainer from "../components/DescContainer/desc-container";
import HeroContainer from "../components/HeroContainer/hero-container";
import FooterContainer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar"
import { getToken } from "../services/RestApi";


const Home = () => {

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        let res = await getToken()
        console.log(res)
    }

    return (
        <>
            <Navbar />
            <HeroContainer />
            <DescContrainer />
            <ContentContainer />
            <FooterContainer />
        </>
        
    )
}

export default Home;