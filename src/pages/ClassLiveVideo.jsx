import LiveChatBox from "../components/live-classes/LiveChatBox";
import VideoComponent from "../components/live-classes/VideoComponent";
import ViewParticipants from "../components/live-classes/ViewParticipants";

function ClassLiveVideo() {
    return ( 
    <div className="w-full h-full flex justify-between">
      <VideoComponent/>

      <div className="w-[35%] items-center gap-[5%] flex flex-col">
      <ViewParticipants/>
      <LiveChatBox/>
      </div>

    </div> );
}

export default ClassLiveVideo;