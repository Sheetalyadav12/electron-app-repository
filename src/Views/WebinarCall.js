// import React, { useRef, useEffect, useState } from "react";
// import styled from "styled-components";
// import DailyIframe from "@daily-co/daily-js"
// const container = document.getElementById('call-frame-container');


// const CALL_OPTIONS = {
//  iframeStyle: {
//    width: "100%",
//    height: "100%",
//    border: "1px solid #e6eaef",
//    borderRadius: "6px 6px 0 0",
//  },
//  showLeaveButton: true,
//  showFullscreenButton: true,
//  //   showLocalVideo: false,
//  //   showParticipantsBar: false,
// };

// const DEFAULT_HEIGHT = 400;

// const WebinarCall = () => {
//  const videoRef = useRef(null);
//  const [height, setHeight] = useState(DEFAULT_HEIGHT);
//  const [callframe, setCallframe] = useState(null);

//  useEffect(() => {
//    if (!videoRef || !videoRef?.current || callframe) return;
//    CALL_OPTIONS.url = "https://[DOMAIN].daily.co/[ROOM-NAME]";

//    const newCallframe = DailyIframe.createFrame(
//      videoRef.current,
//      CALL_OPTIONS
//    );

//      newCallframe.join().then(() => {
//      setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
//      setCallframe(newCallframe);
//    });
   
//  }, [videoRef]);

//  return (

// <>
//    <div>
    

        

//      <Header>Welcome to our webinar!</Header>
//      <VideoContainer height={height}>
//        <Callframe ref={videoRef} />
//      </VideoContainer>
//    </div>
//    </>
//  );
// };

// const Header = styled.div`
//  font-size: 36px;
//  text-align: center;
//  padding: 24px;
// `;
// const VideoContainer = styled.div`
//  margin: auto;
//  max-width: 1000px;
//  height: ${(props) => (props.hidden ? "100" : props.height)}px;
// `;
// const Callframe = styled.div`
//  width: 100%;
//  height: 100%;
// `;

// export default WebinarCall;
// import React, { useRef,useState,useEffect } from 'react';
// import { DailyVideo, useCallFrame,DailyProvider } from '@daily-co/daily-react';
// import styled from "styled-components";
// const DEFAULT_HEIGHT = 400;



// const VideoCall = () => {
//     const callRef = useRef(null);
//     const [height, setHeight] = useState(DEFAULT_HEIGHT);
//     const [callframee, setCallframee] = useState(null);



//     const callFrame = useCallFrame({
//         parentElRef: callRef,
//         options: {
//             iframeStyle: {
//               width: "100%",
//               height: "100%",
//               border: "1px solid #e6eaef",
//               borderRadius: "6px 6px 0 0",
//             },
//         },
//     });

//     useEffect(() => {
//       if (!callRef || !callRef?.current || callframee) return;
//       callFrame.url = "https://[DOMAIN].daily.co/[ROOM-NAME]";
   
//       // const newCallframe = DailyIframe.createFrame(
//       //   callRef.current,
//       //   CALL_OPTIONS
//       // );
   
//       callFrame.join().then(() => {
//         setHeight((callRef?.current?.clientWidth || 500) * 0.75);
//         setCallframee(callFrame);
//       });
//     }, [callRef]);












   
//     return <div>
//       <div>
//         <h1>hellow</h1>
//      <DailyProvider height={height}>
//        <callFrame ref={callRef} />
//      </DailyProvider>
//    </div>
//     </div>
// };

// export default VideoCall;

import React, { useRef, useEffect, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import styled from "styled-components";

const CALL_OPTIONS = {
 iframeStyle: {
   width: "100%",
   height: "100%",
   border: "1px solid #e6eaef",
   borderRadius: "6px 6px 0 0",
 },
 showLeaveButton: true,
 showFullscreenButton: true,
 //   showLocalVideo: false,
 //   showParticipantsBar: false,
};

const DEFAULT_HEIGHT = 400;

const WebinarCall = () => {
 const videoRef = useRef(null);
 const [height, setHeight] = useState(DEFAULT_HEIGHT);
 const [callframe, setCallframe] = useState(null);

 useEffect(() => {
   if (!videoRef || !videoRef?.current || callframe) return;
   CALL_OPTIONS.url = "https://[DOMAIN].daily.co/[ROOM-NAME]";

   const newCallframe = DailyIframe.createFrame(
     videoRef.current,
     CALL_OPTIONS
   );

   newCallframe.join().then(() => {
     setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
     setCallframe(newCallframe);
   });
 }, [videoRef]);

 return (
   <div>
     <Header>Welcome to our webinar!</Header>
     <VideoContainer height={height}>
       <Callframe ref={videoRef} />
     </VideoContainer>
   </div>
 );
};

const Header = styled.div`
 font-size: 36px;
 text-align: center;
 padding: 24px;
`;
const VideoContainer = styled.div`
 margin: auto;
 max-width: 1000px;
 height: ${(props) => (props.hidden ? "100" : props.height)}px;
`;
const Callframe = styled.div`
 width: 100%;
 height: 100%;
`;

export default WebinarCall;

