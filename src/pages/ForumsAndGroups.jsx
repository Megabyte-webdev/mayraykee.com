import CommunityCard from "../components/activity/CommunityCard";
import GeneralPost from "../components/activity/GeneralPost";
import Posts from "../components/activity/Posts";

function ForumsAndGroups() {
  return (
<<<<<<< HEAD
    <div className="w-full flex flex-col min-[900px]:flex-row justify-start gap-[10%]">
      <div className="flex-grow-1 flex flex-col w-full gap-[15px]">
=======
    <div className="w-full flex justify-start gap-[10%]">
      <div className="flex flex-col w-[50%] gap-[15px]">
>>>>>>> main
        <GeneralPost />
        <Posts />
      </div>
      <CommunityCard/>
    </div>
  );
}

export default ForumsAndGroups;
