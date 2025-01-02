import HeroBg from '../img/hero.png';
const Hero = () => {
  return (
    <div>
      <div className=" pt-16 sm:pt-12 h-auto min-h-screen flex flex-wrap overflow-hidden items-center justify-center lg:justify-between md:px-12 lg:px-16 xl:px-24 md:pr-24">
                <div className="z-10 md:text-left sm:text-center" >
                    <h1 className="text-5xl sm:text-lg md:text-3xl lg:text-5xl font-bold mb-6 z-10 ">Enjoy Our <br /> Delicious Meals</h1>
                    <p className="text-lg font-bold mb-4 z-10">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="inline-block py-2 px-8 bg-[#FEA116] z-10 hover:bg-yellow-300 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="flex-1 max-w-lg ">
                    <img src={HeroBg} alt="heroBackground" className="w-full h-auto animate-spin-slow"/>
                </div>
            </div>
    </div>
  )
}

export default Hero
