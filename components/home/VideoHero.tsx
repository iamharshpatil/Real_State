// // "use client";

// // import { useEffect, useRef, useState } from "react";

// // declare global {
// //   interface Window {
// //     YT: any;
// //     onYouTubeIframeAPIReady: () => void;
// //   }
// // }

// // export default function VideoHero() {
// //   const [muted, setMuted] = useState(true);
// //   const [ready, setReady] = useState(false);
// //   const playerRef = useRef<any>(null);

// //   useEffect(() => {
// //     if (!window.YT) {
// //       const tag = document.createElement("script");
// //       tag.src = "https://www.youtube.com/iframe_api";
// //       tag.async = true;
// //       document.body.appendChild(tag);
// //     } else {
// //       initPlayer();
// //     }

// //     window.onYouTubeIframeAPIReady = () => {
// //       initPlayer();
// //     };
// //   }, []);

// //   const initPlayer = () => {
// //     playerRef.current = new window.YT.Player("yt-player", {
// //       events: {
// //         onReady: (event: any) => {
// //           event.target.mute();
// //           event.target.playVideo();
// //           setReady(true);
// //         },
// //       },
// //     });
// //   };

// //   const toggleSound = () => {
// //     const player = playerRef.current;

// //     if (!player || !ready) return;

// //     muted ? player.unMute() : player.mute();

// //     setMuted(!muted);
// //   };

// //   return (
// //     <section className="relative h-screen w-full overflow-hidden">

// //       {/* ✅ CORRECT EMBED VIDEO */}
// //       <div className="absolute top-0 left-0 w-full h-full">
// //   <iframe
// //     className="w-full h-full"
// //     src="https://www.youtube.com/embed/xPKmbnxrdRE?autoplay=1&mute=1&playsinline=1&controls=0&showinfo=0&rel=0&loop=1&playlist=xPKmbnxrdRE"
// //     title="Luxury Villa Video"
// //     frameBorder="0"
// //     allow="autoplay; fullscreen"
// //     allowFullScreen
// //   />
// // </div>


// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

// //       {/* Controls */}
// //       <div className="absolute bottom-8 w-full px-8 flex justify-between z-20">

// //         <span className="text-white text-[10px] tracking-[0.3em] uppercase">
// //           Scroll to discover
// //         </span>

// //         <button
// //           onClick={toggleSound}
// //           className="
// //             text-white text-xs tracking-[0.2em]
// //             border border-white/40
// //             px-4 py-2 rounded-sm
// //             backdrop-blur-sm
// //             hover:bg-white/10
// //             transition-all duration-300
// //           "
// //         >
// //           {muted ? "UNMUTE SOUND" : "MUTE SOUND"}
// //         </button>

// //       </div>

// //     </section>
// //   );
// // }






// export default function TestVideo() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>

// <div className="aspect-video w-full h-screen">
// <iframe
//   className="w-full h-full"
//   src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1&loop=1&playlist=aqz-KE-bpKQ"
//   allow="autoplay; fullscreen"
//   allowFullScreen
// />

// </div>


//     </div>
//   );
// }

