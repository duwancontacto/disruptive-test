import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
interface Props {
  isPlaying: boolean;
  setIsPlaying: any;
}
export function Video({ isPlaying, setIsPlaying }: Props) {
  return (
    <>
      {isPlaying && (
        <ModalVideo
          channel="custom"
          isOpen={isPlaying}
          url="http://localhost:3001/public/Robotic/robotic.mp4"
          onClose={() => setIsPlaying(false)}
        />
      )}
    </>
  );
}
