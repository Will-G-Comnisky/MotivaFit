import React from "react";


const SectionHeader = ({text, bg, length}) => {
  return (
    <div className={`${bg} flex items-center h-10 pl-4 rounded-md uppercase text-sm text-white`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {length}
      </div>
    </div>
  )
}

export default SectionHeader