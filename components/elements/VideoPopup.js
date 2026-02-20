// 'use client'
// import { useState } from 'react'
// import ModalVideo from 'react-modal-video'
// import "../../node_modules/react-modal-video/css/modal-video.css"

// export default function VideoPopup({ style , onOpen, onClose}) {
//     const [isOpen, setOpen] = useState(false)
//     return (
//         <>
//             {style == 1 &&
//                 <a onClick={() => setOpen(true)} className="popup-youtube icon-video">
//                     <i className="icon-Polygon-6" />
//                 </a>
//             }
//             {style == 2 &&
//                 <a onClick={() => setOpen(true)} className="popup-youtube btn-video ml-28">
//                     <i className="icon-Polygon-6" />
//                 </a>
//             }
//             <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="9E8q0RF8TsE" onClose={() => setOpen(false)} />

//         </>
//     )
// }

"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoPopup({ style, onOpen, onClose }) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    
    onOpen?.(); // ⛔ stop swiper autoplay
  };

  const handleClose = () => {
    setOpen(false);
    onClose?.(); // ▶ resume swiper autoplay
  };

  return (
    <>
      {style == 1 && (
        <a onClick={handleOpen} className="popup-youtube icon-video">
          <i className="icon-Polygon-6" />
        </a>
      )}

      {style == 2 && (
        <a onClick={handleOpen} className="popup-youtube btn-video ml-28">
          <i className="icon-Polygon-6" />
        </a>
      )}

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="mcbfqdblyKs"
        onClose={handleClose}
         classNames={{
    modalVideo: "modal-video",
    modalVideoBody: "modal-video-body video-below-navbar",
    modalVideoInner: "modal-video-inner",
    modalVideoIframeWrap: "modal-video-movie-wrap",
    modalVideoCloseBtn: "modal-video-close-btn",
    modalVideoEffect: "modal-video-effect",
    modalVideoClose: "modal-video-close"
  }}
         
      />
    </>
  );
}
