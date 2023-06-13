import { Fade} from "react-awesome-reveal";


const HeroSection = () => {
  return (
    <Fade delay={1e3} cascade damping={1e-1}>
      <div className="content-con ">
        <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/jVW3Jxp/pexels-kampus-production-5940837-1-1.jpg" className="w-full object-cover" />
            <span className="absolute w-full top-0 left-0 bg-[#00000077] h-full"></span>
          
             <Fade delay={1e3} cascade damping={1e-1}>
             <h2 className="banner-title">Life Learning</h2>
              <p className="banner-text">"The limits of my language mean the limits of my world." <br />
                Ludwig Wittgenstein</p>
             </Fade>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>


          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/4VDSzd2/pexels-katerina-holmes-5905713-2.jpg" className="w-full" />
            <span className="absolute w-full top-0 left-0 bg-[#00000077] h-full"></span>
            <Fade delay={1e3} cascade damping={1e-1}>
              <h2 className="banner-title">Life Learning</h2>
              <p className="banner-text">"He who knows no foreign languages knows nothing of his own." <br />
                Johann Wolfgang von Goethe</p>
            </Fade>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src=" https://i.ibb.co/vDLTc7C/pexels-karolina-grabowska-4497759-1-1-1.jpg" className="w-full" />
            <span className="absolute w-full top-0 left-0 bg-[#00000077] h-full"></span>
            <Fade delay={1e3} cascade damping={1e-1}>
            <h2 className="banner-title">Life Learning</h2>
            <p className="banner-text">"To have another language is to possess a second soul." <br />
              Charlemagne</p>
            </Fade>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </Fade>


  );
};

export default HeroSection;