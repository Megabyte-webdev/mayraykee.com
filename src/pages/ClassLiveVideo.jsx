import LiveChatBox from "../components/live-classes/LiveChatBox";
import VideoComponent from "../components/live-classes/VideoComponent";
import ViewParticipants from "../components/live-classes/ViewParticipants";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import {
  authToken,
  createMeeting,
} from "../components/live-classes/video-sdk/API";
import { useState } from "react";
import { onSuccess } from "../utils/notifications/OnSuccess";
import RequestLoader from "../utils/RequestLoader";
import FormBotton from "../components/FormButton";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
}

function ParticipantView(props) {
  return null;
}

function Controls(props) {
  return null;
}

function MeetingView(props) {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      onSuccess({
        message: 'Class Success',
        success: 'Joined meeting succesfully'
      })
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
    
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="w-full h-full flex justify-between">
     { joined && joined === 'JOINED' ? <MeetingComponent participants={participants}/>
      : joined && joined === 'JOINED' ? <RequestLoader />
      : <span>Unable to join meeting <FormBotton onClick={joinMeeting} loading={false}>Try Again</FormBotton></span>
    }
    </div>
  );
}


function MeetingComponent ({participants}) {
 return <>
      <VideoComponent participants={participants} />
      <div className="w-[35%] items-center gap-[5%] flex flex-col">
        <ViewParticipants />
        <LiveChatBox />
      </div>
      </>
}



function ClassLiveVideo() {
  const [meetingId, setMeetingId] = useState(null);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
    console.log(meetingId)
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default ClassLiveVideo;
