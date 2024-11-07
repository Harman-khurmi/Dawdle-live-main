// HoverCard.jsx
import React from 'react';

const HoverCard = ({ title,  Icon }) => {
  return (
    <>

      <div

        className="w-80 p-4 rounded-2xl border-[1px] border-slate-300 relative overflow-hidden group bg-white flex flex-col items-start justify-center content-center align-middle text-left"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-brandPrimary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

        <img src={Icon} className="absolute z-10 h-20 -top-2 -right-2 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300 opacity-30" />
        <img src={Icon} className="mb-2 h-8 text-brandPrimary group-hover:fill-white transition-colors relative z-10 duration-300" />
        <h3 className="font-medium text-lg pr-12 text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        {/* <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p> */}
      </div>

    </>
  );
};

export default HoverCard;
