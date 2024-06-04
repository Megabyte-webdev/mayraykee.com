import PostCard from "./PostCard";
import {
  usersWithPost,
  usersDummyForMeeting,
} from "../../utils/dashboard/dummys";
import NameTag from "../NameTag";

function Posts() {
  const user = usersDummyForMeeting[1];

  const getPostCard = () => {
    return usersWithPost().map((current, index) => (
      <PostCard
        currentUser={current.currentUser}
        postInfo={current.postDetail}
      />
    ));
  };

  return (
    <div className="flex flex-col w-full h-fit relative gap-[5px]">
      <h3 className="font-semibold text-black">Posts</h3>

      <div className="flex flex-col w-full bg-white h-[70%] py-[3%] rounded-[10px]">
        <ul className="flex flex-col gap-[15px] bg-white overflow-y-auto px-[5%] divide-y-[1px] ">
          {getPostCard()}
        </ul>

        <div className="flex w-full h-fit  bg-white py-[3%] px-[5%]">
          <NameTag
            initials={user.initials}
            initialsBackground={user.initialsBackground}
          />
          <input
            className={`h-[40px] outline-gray-400 rounded-[10px] bg-gray-100 border w-[80%] pl-[3%] text-small`}
            placeholder="Write something....."
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
