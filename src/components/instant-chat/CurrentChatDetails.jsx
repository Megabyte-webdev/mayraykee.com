import SharedOne from '../../assets/pngs/shared-1.png'
import SharedTwo from '../../assets/pngs/shared-2.png'
<<<<<<< HEAD
import { FaBars, FaTimes } from "react-icons/fa"; // Correctly specify the 'fa' family

function CurrentChatDetails({ selectedUser, openDetails, setOpenDetails }) {
  return (
    selectedUser && (
      <div className={"w-full flex flex-col items-center h-full gap-[8%] px-[3%] lg:px-2 pt-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white"}>
        <div className="flex flex-col justify-center items-center gap-[5px]">

=======

function CurrentChatDetails({ selectedUser }) {
  return (
    selectedUser && (
      <div className="w-[20%] flex flex-col items-center h-full gap-[8%] px-[3%] pt-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white">
        <div className="flex flex-col justify-center items-center gap-[5px]">
>>>>>>> main
          <img
            src={selectedUser.profilePic}
            className="rounded-full h-[100px] w-[100px] object-center"
          />
          <span className="text-sm">{selectedUser.name}</span>
          <span className="text-[10px] text-gray-500">3 minutes ago</span>
        </div>

        <div className="flex text-small flex-col w-full items-center gap-[20px]">
<<<<<<< HEAD
          <span className="text-gray-500">Shared Photos</span>

          <ul className="flex flex-wrap justify-center gap-4 w-full">
            <li>
              <img src={SharedOne} className='h-14 w-14' />
            </li>
            <li>
              <img src={SharedOne} className='h-14 w-14' />
            </li>
            <li>
              <img src={SharedTwo} className='h-14 w-14' />
            </li>
            <li>
              <img src={SharedOne} className='h-14 w-14' />
            </li>
            <li>
              <img src={SharedOne} className='h-14 w-14' />
            </li>
            <li>
              <img src={SharedTwo} className='h-14 w-14' />
            </li>
          </ul>
=======
            <span className="text-gray-500">Shared Photos</span>

            <ul className="grid grid-cols-3 gap-y-4 w-full">
              <li>
                <img src={SharedOne} className='h-[35px] w-[35px]'/>
              </li>
              <li>
                <img src={SharedOne} className='h-[35px] w-[35px]'/>
              </li>
              <li>
                <img src={SharedTwo} className='h-[35px] w-[35px]'/>
              </li>
              <li>
                <img src={SharedOne} className='h-[35px] w-[35px]'/>
              </li>
              <li>
                <img src={SharedOne} className='h-[35px] w-[35px]'/>
              </li>
              <li>
                <img src={SharedTwo} className='h-[35px] w-[35px]'/>
              </li>
            </ul>
>>>>>>> main

        </div>
      </div>
    )
  );
}

export default CurrentChatDetails;
