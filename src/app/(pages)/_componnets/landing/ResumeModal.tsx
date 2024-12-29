// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-20 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="relative p-8 bg-white w-full max-w-3xl m-auto flex-col flex rounded-lg shadow-lg">
//         <button
//           onClick={() => {
//             console.log("Attempting to close modal");
//             onClose();
//           }}
//           className="absolute top-0 -right-5 p-4 text-black text-3xl font-bold z-50"
//         >
//           &times;
//         </button>

//         {children}
//       </div>
//     </div>
//   );
// };
// export default Modal;
