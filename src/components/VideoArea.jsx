import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

// Background image
// import bgImage from "../assets/images/video-bg.jpg";

const VideoArea = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div
            className="video-area-2 bg-image"
            style={{
                backgroundImage: `url(/assets/images/bg/bg-14.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* VIDEO MODAL */}
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="PICj5tr9hcc"
                onClose={() => setOpen(false)}
            />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="video-banner-content">

                            <div className="video-btn">
                                <button
                                    className="video-play-btn"
                                    onClick={() => setOpen(true)}
                                >
                                    <i className="icon-18"></i>
                                </button>
                            </div>

                            <h2 className="title">
                                Take a Video Tour to Learn Intro of Campus
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoArea;
