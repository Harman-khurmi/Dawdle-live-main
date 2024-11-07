
import React from 'react';

const HoverCard = ({ title, Icon }) => {
  return (
    <div className="w-80 p-4 rounded-2xl border-[1px] border-slate-300 relative overflow-hidden group bg-white flex flex-col items-start justify-center content-center align-middle text-left">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-brandPrimary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-4xl md:text-5xl xs:text-3xl text-brandPrimary group-hover:text-white transition-colors relative z-10 duration-300" />

      <h3 className="font-medium text-lg pr-6 text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
    </div>

  );
};

export default HoverCard;