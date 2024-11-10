import { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Team1 from '../img/team-1.jpg'
import Team2 from '../img/team-2.jpg'
import Team3 from '../img/team-3.jpg'
import Team4 from '../img/team-4.jpg'
const ChefTeam = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const teamData = [
    {
      img: Team1,
      name: 'Full Name 1',
      designation: 'Chef 1',
      socialHandles: ['facebook', 'twitter', 'instagram'],
    },
    {
      img: Team2,
      name: 'Full Name 2',
      designation: 'Chef 2',
      socialHandles: ['facebook', 'twitter', 'instagram'],
    },
    {
      img: Team3,
      name: 'Full Name 3',
      designation: 'Chef 3',
      socialHandles: ['facebook', 'twitter', 'instagram'],
    },
    {
      img: Team4,
      name: 'Full Name 4',
      designation: 'Chef 4',
      socialHandles: ['facebook', 'twitter', 'instagram'],
    },
  ];

  return (
    <div className="h-screen mt-16">
      <div className="flex justify-center items-center font-paci text-[#FEA116] font-[400] space-x-6 mb-4">
        <hr className="flex border-t-2 w-12 border-[#FEA116]" />
        <p className="text-xl font-semibold">Team Members</p>
        <hr className="flex border-t-2 w-12 border-[#FEA116]" />
      </div>
      <h2 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom text-center">
        Our Master Chefs
      </h2>
      <div className="mt-16 mx-16">
        <ol className="grid grid-cols-4 gap-4">
          {teamData.map((member, index) => (
            <li
              key={index}
              className={`flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50 transition ease-in-out duration-500 max-h-[350px] ${
                activeIndex === index ? 'max-h-[550px] transition duration-500 ease-in-out' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={member.img}
                alt={`Team ${index + 1}`}
                className={`w-[220px] h-[220px] rounded-full inline-block mb-6 transition-all duration-300 ${
                  activeIndex === index ? 'transform translateZ-20' : ''
                }`}
              />
              <div className="mb-6">
                <h2 className="font-bold text-2xl">{member.name}</h2>
                <p className="font-light text-lg text-center">{member.designation}</p>
              </div>
              {activeIndex === index && (
                <div className="relative bottom-4 social-icons flex space-x-4 mt-4 opacity-100 transition-opacity duration-500">
                  {member.socialHandles.includes('facebook') && (
                    <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl" />
                  )}
                  {member.socialHandles.includes('twitter') && (
                    <FaTwitter className="text-blue-400 hover:text-blue-600 text-2xl" />
                  )}
                  {member.socialHandles.includes('instagram') && (
                    <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ChefTeam
