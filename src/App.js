
// First, we import the React-player library. 
import React from 'react';
import ReactPlayer from "react-player"; 

// We also need some React components and hooks to handle the user interactions. 
import { useState, useEffect } from "react";

const VideoApp = () =>
 {
  // We declare a state variable and setter for the video URL
    const [videoURL, setVideoURL] 
    = useState("");
      
        // We declare a state variable and setter for the video file
          const [videoFile, setVideoFile]
           = useState(null);
            
              // This hook will be used to download the video file when the component mounts. 
                useEffect(() => {
                    // If the video URL is set, we use the React-player library to download the file. 
                        if (videoURL) {
                              ReactPlayer.download(videoURL, setVideoFile);
                                  }
                                    }, [videoURL]); 
                                      
                                        // This function is used to handle changes to the video URL input. 
                                          const handleChange = (event) => {
                                              setVideoURL(event.target.value);
                                                }
                                                  
                                                    return (
                                                        <div>
                                  <html>       
                                    <body class="background-body"         >      {/* This is the input box for the video URL. */}
                                                                    <input type="text" onChange={handleChange} />
                                                                          
                                                                                {/* This is the React-player component, which will be used to playback the video. It will render after the video file is downloaded. */}
                                                                                      {videoFile && <ReactPlayer url={videoFile} />}
                         </body>                       </html>                                          </div>
                                                                                            )
                                                                                            };

                                                                                            export default VideoApp;
