import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Team1 from '../img/team-1.jpg';
import Team2 from '../img/team-2.jpg';
import Team3 from '../img/team-3.jpg';
import Team4 from '../img/team-4.jpg';

const teamMembers = [
  { id: 1, img: Team1, name: 'Full Name 1', designation: 'Designation 1' },
  { id: 2, img: Team2, name: 'Full Name 2', designation: 'Designation 2' },
  { id: 3, img: Team3, name: 'Full Name 3', designation: 'Designation 3' },
  { id: 4, img: Team4, name: 'Full Name 4', designation: 'Designation 4' },
];

const ChefTeam = () => {
  return (
    <div className=" mb-24 mt-10 pt-10 pb- 24">
      <div className="flex justify-center items-center font-paci text-[#FEA116] font-[400] space-x-6 mb-4">
        <hr className="flex border-t-2 w-12 border-[#FEA116]" />
        <p className="text-xl font-semibold">Team Members</p>
        <hr className="flex border-t-2 w-12 border-[#FEA116]" />
      </div>
      <h2 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom text-center">Our Master Chefs</h2>
      <div className="mt-10 mx-16">
        <ol className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className="flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50 group overflow-hidden transition-all duration-500 ease-in-out max-h-[355px] hover:max-h-[400px] w-full"
            >
            <div className='px-3'>
              <img
                  src={member.img}
                  alt={member.name}
                  className="md:w-[220px] md:h-[220px] rounded-full inline-block mb-6 transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
              <div className="mb-6">
                <h2 className="font-bold text-2xl p-2">{member.name}</h2>
                <p className="font-light text-lg text-center p-2">{member.designation}</p>
                <div className="flex items-center mt-3 mb-10">
                  <div className="hidden group-hover:flex items-center transition-opacity duration-300 ease-in-out">
                    <a className="flex items-center bg-[#FEA116] rounded-tl-[38px] rounded-tr-[38px] w-[38px] h-[38px] mx-1" href="#">
                      <FaFacebookF className="mx-3" size="18" color="#fff" />
                    </a>
                    <a className="flex items-center bg-[#FEA116] rounded-tl-[38px] rounded-tr-[38px] w-[38px] h-[38px] mx-1" href="#">
                      <FaTwitter className="mx-3" size="18" color="#fff" />
                    </a>
                    <a className="flex items-center bg-[#FEA116] rounded-tl-[38px] rounded-tr-[38px] w-[38px] h-[38px] mx-1" href="#">
                      <FaInstagram className="mx-3" size="18" color="#fff" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ChefTeam;
