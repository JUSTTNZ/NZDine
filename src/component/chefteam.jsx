import Team1 from '../img/team-1.jpg'
import Team2 from '../img/team-2.jpg'
import Team3 from '../img/team-3.jpg'
import Team4 from '../img/team-4.jpg'
const ChefTeam = () => {
  return (
    <div className="h-screen mt-16">
        <div className=" flex justify-center items-center font-paci text-[#FEA116]  font-[400] space-x-6 mb-4">
            <hr className="flex border-t-2 w-12  border-[#FEA116]"/>
            <p className="text-xl font-semibold">Team Members</p>
            <hr className="flex border-t-2 w-12  border-[#FEA116]"/>
        </div>
        <h2 className="mb-5 text-query text-[#0F172B] font-nun font-bold leading-custom text-center">Our Master Chefs
        </h2>
        <div className='mt-16 mx-16'>
           <ol className="grid grid-cols-4">
            <li className=' flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50'>
                <img src={Team1} alt="" className=' w-[220px] h-[220px] rounded-full inline-block mb-6'/>
                <div className='mb-6'>
                    <h2 className='font-bold text-2xl'>Full Name</h2>
                    <p className='font-light text-lg text-center'>Designation</p>
                </div>
            </li>

            <li className=' flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50'>
                <img src={Team2} alt="" className=' w-[220px] h-[220px] rounded-full inline-block mb-6'/>
                <div className='mb-6'>
                    <h2 className='font-bold text-2xl'>Full Name</h2>
                    <p className='font-light text-lg text-center'>Designation</p>
                </div>
            </li>

            <li className=' flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50'>
                <img src={Team3} alt="" className=' w-[220px] h-[220px] rounded-full inline-block mb-6'/>
                <div className='mb-6'>
                    <h2 className='font-bold text-2xl'>Full Name</h2>
                    <p className='font-light text-lg text-center'>Designation</p>
                </div>
            </li>

            <li className=' flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-500/50'>
                <img src={Team4} alt="" className=' w-[220px] h-[220px] rounded-full inline-block mb-6'/>
                <div className='mb-6'>
                    <h2 className='font-bold text-2xl'>Full Name</h2>
                    <p className='font-light text-lg text-center'>Designation</p>
                </div>
            </li>
           </ol> 
        </div>

    </div>
  )
}

export default ChefTeam
