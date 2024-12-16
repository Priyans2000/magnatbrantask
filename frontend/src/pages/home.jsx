import  { useState, useEffect } from "react";
import a from "../images/img1.jpg"
import b from "../images/img2.avif"
import c from "../images/img3.avif"


const Home=()=>{
  const images = [a,b,c];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          style={{
            width: "100%",
            height: "30rem",
            borderRadius: "10px",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
    </>
  );
};

export default Home;
