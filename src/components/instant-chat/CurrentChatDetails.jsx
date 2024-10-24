import SharedOne from '../../assets/pngs/shared-1.png'
import SharedTwo from '../../assets/pngs/shared-2.png'

function CurrentChatDetails({ selectedUser }) {
  return (
    selectedUser && (
      <div className="w-[20%] flex flex-col items-center h-full gap-[8%] px-[3%] pt-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white">
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <img
            src={selectedUser.profilePic}
            className="rounded-full h-[100px] w-[100px] object-center"
          />
          <span className="text-sm">{selectedUser.name}</span>
          <span className="text-[10px] text-gray-500">3 minutes ago</span>
        </div>

        <div className="flex text-small flex-col w-full items-center gap-[20px]">
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

        </div>
      </div>
    )
  );
}

export default CurrentChatDetails;
