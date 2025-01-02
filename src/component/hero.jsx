import HeroBg from '../img/hero.png';
const Hero = () => {
  return (
    <div>
      <div className="h-auto lg:h-[140vh] grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  p-7 md:p-16  gap-10">
                <div className="z-10 pt-[100px] lg:pt-0   flex flex-col justify-center items-center lg:items-start " >
                    <h1 className=" text-hero font-bold font-nun  leading-tight text-center lg:text-left">Enjoy Our <br /> <span className=''>Delicious Meals</span></h1>
                    <p className="text-lg  mb-4 z-10 text-center lg:text-left">Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="inline-block py-4 px-8 bg-[#FEA116] rounded-sm  transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="max-w lg:w-[40vw]   pt-10 overflow-hidden">
                    <img src={HeroBg} alt="heroBackground" className="w-full h-auto animate-spin-slow"/>
                </div>
            </div>
    </div>
  )
}

export default Hero
