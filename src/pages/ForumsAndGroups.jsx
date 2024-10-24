import CommunityCard from "../components/activity/CommunityCard";
import GeneralPost from "../components/activity/GeneralPost";
import Posts from "../components/activity/Posts";

function ForumsAndGroups() {
  return (
    <div className="w-full flex justify-start gap-[10%]">
      <div className="flex flex-col w-[50%] gap-[15px]">
        <GeneralPost />
        <Posts />
      </div>
      <CommunityCard/>
    </div>
  );
}

export default ForumsAndGroups;
