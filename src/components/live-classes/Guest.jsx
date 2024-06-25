import { useEffect, useMemo, useRef, useState } from "react";
import Mic from "../../assets/pngs/mic.png";
import { useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

function Guest({ data }) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(data.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);
  const [isMicEnabled, setIsMicEnabled] = useState(false);

  const toogleMic = () => setIsMicEnabled(!isMicEnabled);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <li className="h-full relative w-[25%] min-w-[18%]  items-center flex">
      <img
        src={data.profileImg}
        className="h-full object-cover object-center rounded-[10px] w-full"
      />

      <audio ref={micRef} autoPlay playsInline muted={isLocal} />

      {webcamOn && (
        <ReactPlayer
          //
          playsinline // extremely crucial prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"150px"}
          width={"150px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}

      {/* <div
        onClick={toogleMic}
        className={`absolute cursor-pointer hover:scale-105 duration-100 flex items-center justify-center left-2 bottom-2 ${
          isMicEnabled ? "bg-green" : "bg-red-700"
        } rounded-full h-[20px] w-[20px]`}
      >
        <img src={Mic} className="h-[10px]" />
      </div> */}
    </li>
  );
}

export default Guest;
