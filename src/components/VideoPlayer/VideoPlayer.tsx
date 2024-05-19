import "./Style.scss";
import { useEffect, useRef } from 'react';

import HomeVideo from '../../assets/videos/homepage.mp4'

const VideoPlayer = () => {
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
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;