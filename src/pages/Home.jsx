import Slogan from "components/slogan/Slogan";
import background from "../images/a2e091948a99374d.jpeg";


const Home = () => {  
    return (
      <div style={{backgroundImage: `linear-gradient(
        rgba(121, 156, 253, 0.5),
        rgba(121, 156, 253, 0.5)
      ), url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100vh"}}>
       <Slogan/>
      </div>
    );
  };
  
  export default Home;