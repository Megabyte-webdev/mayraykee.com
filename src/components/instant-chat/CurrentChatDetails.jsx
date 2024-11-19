import SharedOne from '../../assets/pngs/shared-1.png'
import SharedTwo from '../../assets/pngs/shared-2.png'
q
function CurrentChatDetails({ selectedUser, openDetails, setOpenDetails}) {
  return (
    selectedUser && (
      <div className={`absolute top-0 ${openDetails ? 'left-0':'left-[-100%]'} bottom-0 w-[300px] md:relative md:w-1/4 flex flex-col items-center h-full gap-[8%] px-[3%] pt-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white`}>
        <div className="flex flex-col justify-center items-center gap-[5px]">
   openDetails && <p onClick={()=>setOpenDetails (false)}>close</p>
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
