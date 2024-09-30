// src/VideoPlayer.js
import React, { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                className="video"
                controls
            >
                <source src="https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="play-button" onClick={playVideo}>
                ▶
            </div>
        </div>
    );
};

export default VideoPlayer;
