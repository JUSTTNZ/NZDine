
import HeroBg from '../img/bg-hero.jpg';

import ChefTeam from "../component/chefteam";
import Experience from "../component/experience";

const AboutUs = () => {

    

    
  return (
    <div className="w-full mb-10">
     
        <div 
            className="h-[390px] relative bg-cover bg-center bg-no-repeat text-white" 
            style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${HeroBg})` 
            }}>    
             <div className=" py-5  mb-5">
              <div className="text-center my-12 pt-5 pb-4">
                  <h1 className="text-h1 text-center font-bold text-white mb-3 ">About Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
                        <li className="breadcrumb-item">
                            <a href="#" className="text-[#FEA116]">Home </a>/
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#" className="text-[#FEA116]">Pages </a>/
                        </li>
                        <li className="breadcrumb-item text-white" aria-current="page">
                        About
                        </li>
                    </ol>
                  </nav>
              </div>
            </div>
        </div>
        <Experience/>
        <div className="mt-4">
        <ChefTeam />
        </div>
    </div>
  )
}

export default AboutUs
