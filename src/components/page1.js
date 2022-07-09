import './page1.css';
import Bg from ".././midia/movies/Apollo-11.mp4";
import Header from "./header.js";

function Page1() {
  return (
    <>
        <div className="page1">
            <Header/>
            
              <div className="title">
                <h1>Apollo 11</h1>
                <h2>"A águia pousou…"</h2>
              </div>
            
            <video autoPlay loop muted className="bg_video">
                <source src={Bg} type="video/mp4"/>
            </video>
            
        </div>
    </> 
  );
}

export default Page1;