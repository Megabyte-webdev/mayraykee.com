import PeopleSitting from '../../assets/pngs/people-sitting.png'
function CommunityCard() {
<<<<<<< HEAD
    return ( <div className="flex-1 min-w-60 h-[30%] flex flex-col bg-white rounded-[10px]">
=======
    return ( <div className="w-[30%] h-[30%] flex flex-col bg-white rounded-[10px]">
>>>>>>> main
        <img src={PeopleSitting} className=''/>
        <div className='px-[5%]'>
        <h3 className='text-sm text-gray-500'>Details</h3>
        <p className='text-small text-gray-500'>Community wide announcements and discussions</p>
        </div>
    </div> );
}

export default CommunityCard;