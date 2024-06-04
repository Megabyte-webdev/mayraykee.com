import NameTag from "../NameTag";
import { CiMenuKebab } from "react-icons/ci";
import LikesImg from '../../assets/pngs/likes-img.png'
import Comments from '../../assets/pngs/comments.png'

function PostCard({ currentUser, postInfo }) {
  return (
    <div className="w-full flex flex-col items-end pt-[3%] divide-y-[1px] divide-dashed ">
      <div className="w-full flex justify-between">
        <NameTag
          initials={currentUser.initials}
          initialsBackground={currentUser.initialsBackground}
          name={currentUser.name}
        />
        <CiMenuKebab className="cursor-pointer" />
      </div>

      <div className="w-[90%] flex flex-col gap-[8px]">
        <span className="text-small text-gray-500 leading-1">{postInfo.post}</span>
        <div className="flex w-[50%] gap-[15px] items-center">
            <div className="flex gap-[5px] items-center">
               <img src={LikesImg} className="h-[18px]"/>
               <span className="text-small text-gray-500 items-center">{postInfo.likes.length}</span>
            </div>
            <div className="flex gap-[5px]">
               <img src={Comments} className="h-[18px] items-center"/>
               <span className="text-small text-gray-500 hover:underline cursor-pointer items-center">{postInfo.comments.length} Comments</span>
            </div>
        </div>
      </div>

    </div>
  );
}

export default PostCard;
