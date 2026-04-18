// "use client"

// import { useEffect } from "react";

// export default function Loading() {
  
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//       Loading...
//     </div>
//   );
// }

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      Loading...
    </div>
  );
}