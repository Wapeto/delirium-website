import React from "react";
import { CiCalendar } from "react-icons/ci";

interface DJCardProps {
  date: string;
  time: string;
  name: string;
  description: string;
  index: number;
  totalCards: number;
}

const DJCard: React.FC<DJCardProps> = ({
  date,
  time,
  name,
  description,
  index,
  totalCards,
}) => {
  const getSegmentGradient = () => {
    const startColor = [252, 239, 239];
    const endColor = [34, 174, 209];

    const segmentStart = index / totalCards;
    const segmentEnd = (index + 1) / totalCards;

    const topColor = interpolateColor(startColor, endColor, segmentStart);
    const bottomColor = interpolateColor(startColor, endColor, segmentEnd);

    return `linear-gradient(to bottom, rgb(${topColor[0]}, ${topColor[1]}, ${topColor[2]}), rgb(${bottomColor[0]}, ${bottomColor[1]}, ${bottomColor[2]}))`;
  };

  const interpolateColor = (
    color1: number[],
    color2: number[],
    position: number
  ) => {
    return [
      Math.round(color1[0] + position * (color2[0] - color1[0])),
      Math.round(color1[1] + position * (color2[1] - color1[1])),
      Math.round(color1[2] + position * (color2[2] - color1[2])),
    ];
  };

  return (
    <div className="relative h-24 w-72 flex items-center justify-between">
      {/* Left box with time and description */}
      <div className="w-32 h-16 rounded-lg flex-col justify-center items-center gap-1 inline-flex overflow-hidden bg-gradient-to-br from-slate-50 to-blue-400 p-[1.2px]">
        <div className="w-full h-full flex-col justify-center items-center gap-1 inline-flex rounded-lg bg-background/90">
          <div className="w-full px-1 text-center text-beige text-xl font-spaceGrotesk tracking-wider truncate">
            {time}
          </div>
          <div className="w-full px-1 text-center text-beige text-base font-normal truncate">
            {description}
          </div>
        </div>
      </div>

      {/* Center divider - mini-gradient based on position */}
      <div
        className="h-full rounded-full"
        style={{
          width: "4px",
          background: getSegmentGradient(),
        }}
      />

      {/* Right box with calendar and name */}
      <div className="w-32 h-16 flex-col justify-center items-start gap-px inline-flex overflow-hidden">
        <div className="w-full justify-start items-center gap-1 inline-flex">
          <CiCalendar className="min-w-6 h-6 text-beige" />
          <div className="w-20 text-beige text-base font-normal font-spaceGrotesk truncate">
            {date}
          </div>
        </div>
        <div className="w-full text-beige text-2xl font-semibold truncate">
          {name}
        </div>
      </div>
    </div>
  );
};

export default DJCard;
