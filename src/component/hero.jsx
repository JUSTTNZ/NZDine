import HeroBg from '../img/hero.png';
const Hero = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className=" pt-16 sm:pt-12 h-auto min-h-screen flex flex-wrap overflow-hidden items-center justify-center lg:justify-between md:px-12 lg:px-16 xl:px-24 md:pr-24">
                <div className="z-10 md:text-left sm:text-center" >
                    <h1 className="text-5xl sm:text-lg md:text-3xl lg:text-5xl font-bold mb-6 z-10 ">Enjoy Our <br /> Delicious Meals</h1>
                    <p className="text-lg font-bold mb-4 z-10">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br /> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br /> sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="inline-block py-2 px-8 bg-[#FEA116] z-10 hover:bg-yellow-300 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="flex-1 max-w-lg ">
=======
      <div className="h-auto lg:h-[140vh] grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  p-7 md:p-16  gap-10">
                <div className="z-10 pt-[100px] lg:pt-0   flex flex-col justify-center items-center lg:items-start " >
                    <h1 className=" text-hero font-bold font-nun  leading-tight text-center lg:text-left">Enjoy Our <br /> <span className=''>Delicious Meals</span></h1>
                    <p className="text-lg  mb-4 z-10 text-center lg:text-left">Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="inline-block py-4 px-8 bg-[#FEA116] rounded-sm  transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="max-w lg:w-[40vw]   pt-10 overflow-hidden">
>>>>>>> dd25cb4cfa7ff26b27d102dfa9bd35f19f4b4401
                    <img src={HeroBg} alt="heroBackground" className="w-full h-auto animate-spin-slow"/>
                </div>
            </div>
    </div>
  )
}

export default Hero
