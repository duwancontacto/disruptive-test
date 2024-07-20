import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
          url={`${BASE_URL}/public/Robotic/robotic.mp4`}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </>
  );
}
