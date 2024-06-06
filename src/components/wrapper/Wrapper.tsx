import React from "react";

const Wrapper = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
