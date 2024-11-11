import { useEffect, useState, useRef } from "react";
import aboutImg1  from '../img/about-1.jpg'
import aboutImg2  from '../img/about-2.jpg'
import aboutImg3  from '../img/about-3.jpg'
import aboutImg4  from '../img/about-4.jpg'
const Experience = () => {
    const [experienceYears, setExperienceYears] = useState(0);
    const [experienceChefs, setExperienceChefs] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.75 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [])

    useEffect(() => {
        if(isInView) {
            const experienceInterval = setInterval(() => {
                setExperienceYears((prevExperienceYears) => {
                    if(prevExperienceYears < 15) {
                        return prevExperienceYears + 1;
                    } else {
                        clearInterval(experienceInterval)
                        return prevExperienceYears;
                    }
                })
            }, 100);
            const chefsInterval = setInterval(() => {
                setExperienceChefs((prevChefNumber) => {
                    if(prevChefNumber < 50) {
                        return prevChefNumber + 1;
                    } else {
                        clearInterval(chefsInterval)
                        return prevChefNumber;
                    }
                })
            },30)
            return () => clearInterval(chefsInterval)
        }
    },[isInView]);
  return (
    <div>
      <div className="flex" ref={sectionRef}>
            <div className="max-w-xl h-screen mx-16">
                <div className="grid grid-cols-2 relative gap-4 my-24 ml-12">
                    <div className="w-full">
                        <img src={aboutImg1} alt="" />
                    </div>
                    <div className="w-3/4 translate-x-[-0.1%] translate-y-[25%] ">
                        <img src={aboutImg2} alt="" />
                    </div>
                    <div className="w-3/4 translate-x-[33%] translate-y-[0]">
                        <img src={aboutImg3} alt="" />
                    </div>
                    <div className="w-full">
                        <img src={aboutImg4} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[150px]">
                <div className=" flex items-center font-paci text-[#FEA116]  font-[400] space-x-6 mb-4">
                    <p className="text-xl font-semibold">About us</p>
                    <hr className="flex border-t-2 w-12 border-[#FEA116]"/>
                </div>
                <h2 className="text-4xl font-bold mb-4">Welcome to NZDine</h2>
                <p className="text-lg text-gray-500">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br /> amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                  <br /> <br />
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br /> duo justo magna dolore erat amet
                </p>

                <div className="flex space-x-16 mt-6">
                    <div className="flex ">
                        <div className="border-l-8 border-[#FEA116] h-14 pl-4"></div>
                        <div className="flex space-x-8">
                            <p className="text-5xl text-[#FEA116] font-bold">
                            {experienceYears}
                            </p>
                            <div>
                                <p className="text-lg font-light text-gray-500">Years of</p>
                                <p className="text-lg font-semibold mt-[-5px]">EXPERIENCE</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="border-l-8 border-[#FEA116] h-14 pl-4"></div>
                        <div className="flex space-x-8">
                            <p className="text-5xl text-[#FEA116] font-bold">
                            {experienceChefs}
                            </p>
                            <div>
                                <p className="text-lg text-gray-500 font-light">Popular</p>
                                <p className="text-lg font-semibold mt-[-5px]">MASTER CHEFS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="inline-block mt-8 py-4 px-10 rounded-sm text-gray-100 bg-[#FEA116] z-10 hover:bg-orange-400 transition duration-300 ease-in-out cursor-pointer">BOOK A TABLE</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
