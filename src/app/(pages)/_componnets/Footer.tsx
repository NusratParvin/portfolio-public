import React from "react";

function Footer() {
  return (
    <footer className="bg-none text-white mb-8">
      <div className="md:w-11/12 w-full flex flex-col mx-auto text-center  border-t border-gray-500/30 pb-6 pt-16">
        <p className="text-[1rem] mb-2">
          © Nusrat Parvin 2024. All rights reserved.
        </p>
        <p className="text-sm mb-4">Location: UAE</p>
        <p className="text-xs">
          This site showcases my personal projects and professional work.
          Content may not be used without permission.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
