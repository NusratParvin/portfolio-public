"use client";
import { Download } from "lucide-react";
// import PDFViewer from "./PDFViewer";

const ResumeOptions = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => setModalOpen(!modalOpen);

  // const handleViewClick = () => {
  //   setModalOpen(true);
  // };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Resume.pdf"; // Ensure you place your file in the public folder or an accessible URL
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownloadClick}
      className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-0 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out   border border-base/30 "
    >
      <span className="absolute right-0 -mt-20 h-32 w-8 translate-x-12 rotate-12 bg-base opacity-30 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      <div className="flex items-center text-gray-300 lg:text-xl text-base font-bold">
        {" "}
        Resume
      </div>
      <div className="md:ml-0 lg:ml-2 flex items-center gap-0 text-sm md:flex">
        {/* <button
          onClick={handleViewClick}
          className=" py-2 px-4  flex items-end space-x-2"
        >
          <Eye className="w-4 h-4" />
        </button> */}
        <div className=" py-2 px-2 rounded flex items-end space-x-0">
          <Download className="w-4 h-4" />
        </div>
      </div>
      {/* <Modal isOpen={modalOpen} onClose={toggleModal}>
     
        <PDFViewer fileUrl="/assets/cv/Resume.pdf" />
      </Modal> */}
    </button>
  );
};

export default ResumeOptions;
