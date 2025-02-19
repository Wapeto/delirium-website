import React from "react";
import { CiCalendar } from "react-icons/ci";

interface DJCardProps {
  date: string;
  time: string;
  name: string;
  description: string;
}

const DJCard: React.FC<DJCardProps> = ({ date, time, name, description }) => {
  return (
    <div className="w-[364px] h-[97px] relative flex items-center justify-between">
      <div className="w-full h-full left-0 top-0 absolute bg-bleu rounded-lg shadow-[0px_4px_8px_0px_rgba(31,157,188,0.25)] border border-white" />
      <div className="left-3 absolute flex-col justify-center items-start gap-px inline-flex">
        <div className="justify-center items-center gap-1 inline-flex">
          <CiCalendar className="w-6 h-6 text-beige" />
          <div className="w-[77px] text-beige text-base font-normal font-['Titillium Web']">
            {date}
          </div>
        </div>
        <div className="text-beige text-[28px] font-semibold">{name}</div>
      </div>
      <div className="w-32 py-1.5 right-3 absolute bg-black/25 rounded-lg border border-bleu-light flex-col justify-center items-center gap-1 inline-flex">
        <div className="self-stretch text-center text-[#fcefef] text-[28px] font-normal font-['Quinlliyk']">
          {time}
        </div>
        <div className="self-stretch h-[18px] text-center text-[#fcefef] text-base font-normal font-['Titillium Web']">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DJCard;
