import HeroBg from '../img/bg-hero.jpg';
import { Navbar } from '../component/navbar'
import Testimonial from '../component/Testimonial'

const Testimony = () => {
  return (
    <div>
        <div 
          className="h-[390px] relative bg-cover bg-center bg-no-repeat text-white" 
          style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${HeroBg})` 
          }}>
          {/* <Navbar /> */}
            <div className=" py-5  mb-5">
              <div className="text-center my-12 pt-5 pb-4">
                  <h1 className="text-h1 text-center font-bold text-white mb-3 ">Testimonials</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="flex justify-center space-x-4 text-sm text-gray-600 uppercase">
                        <li className="breadcrumb-item">
                            <a href="#" className="text-[#FEA116]">Home </a>/
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#" className="text-[#FEA116]">Pages </a>/
                        </li>
                        <li className="breadcrumb-item text-white " aria-current="page">
                        Testimonials
                        </li>
                    </ol>
                  </nav>
              </div>
            </div>
        </div>
        <Navbar/>
        <Testimonial/>
    </div>
  )
}

export default Testimony
