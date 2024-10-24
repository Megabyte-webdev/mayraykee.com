import Plus from '../assets/pngs/plus.png'

function PictureTag({data}) {
    return ( 
        <div
        className="h-[50px] w-[50px] cursor-pointer hover:scale-105 duration-100 relative"
      >
        <img src={data.profilePic} className="h-[80%] " />
       {!data.isAFriend && <img src={Plus} className="h-[30%] absolute right-3 bottom-1 " />}
      </div>);
}

export default PictureTag;