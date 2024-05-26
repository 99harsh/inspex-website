import "./Style.scss";
import { useEffect, useRef } from 'react';

const VideoPlayer = ({videoURL}:any) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video: any = videoRef.current;
        if (video) {
            video.play();
            video.loop = true;
        }
    }, []);

    return (
        <video
            ref={videoRef}
            width="100%"
            height="auto"
            muted
        >
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;