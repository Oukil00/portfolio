import { useState } from "react";

const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 border-[#00040f] h-[490px] max-sm:h-[450px] p-8 bg-[#e1e1e1] dark:bg-transparent hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] transition-all duration-300">
        <div className="HEADER flex ">
          <div className="max-w-[80px] pr-3 mr-3">
            <img src={props.img} alt="" />
          </div>

          <div className="flex-1">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.title}
            </h1>
            <p className="text-[#00040f] dark:text-white text-lg my-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {props.subtitle}
            </p>
            <p className="italic text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">
              {props.date}
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
          {props.para}
        </p>
      </div>
    </>
  );
};
export default Exp_prop;
