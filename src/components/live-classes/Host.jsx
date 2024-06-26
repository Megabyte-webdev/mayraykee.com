import { useEffect, useMemo, useRef, useState } from "react";
import Mic from "../../assets/pngs/mic.png";
import { useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player"; // replace with actual import

function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStreamURL = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return URL.createObjectURL(mediaStream);
    }
    return null;
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) =>
          console.error('micRef.current.play() failed', error)
        );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  useEffect(() => {
    return () => {
      if (videoStreamURL) {
        URL.revokeObjectURL(videoStreamURL);
      }
    };
  }, [videoStreamURL]);

  return (
    <div>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? 'ON' : 'OFF'} | Mic: {micOn ? 'ON' : 'OFF'}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline // extremely crucial prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStreamURL}
          height="300px"
          width="300px"
          onError={(err) => {
            console.log(err, 'participant video error');
          }}
        />
      )}
    </div>
  );
}

export default ParticipantView;
