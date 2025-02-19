import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import MotionIcon from "./MotionIcon";
import DJCard from "./DJCard";

const Planning = () => {
  const planningData = [
    {
      date: "ven 1 oct",
      description: "Set généraliste",
      name: "DJ Kévin",
      time: "23h-3h30",
    },
    {
      date: "sam 2 oct",
      description: "Set généraliste",
      name: "DJ Sam",
      time: "23h-3h30",
    },
    {
      date: "dim 3 oct",
      description: "Soirée Latino",
      name: "DJ Boule",
      time: "23h-1h30",
    },
    {
      date: "lun 4 oct",
      description: "Lundi sensuel",
      name: "DJ Sensuuuuu",
      time: "20h-1h",
    },
    {
      date: "lun 4 oct",
      description: "Lundi sensuel",
      name: "DJ Sensuuuuu",
      time: "20h-1h",
    },
  ];
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <MotionIcon
        icon={
          <RiArrowDownDoubleLine className="w-16 h-16 px-0.5 flex justify-center items-center" />
        }
        whileHover={{ scale: 1.1, transform: "translate(0, 5px)" }}
      />
      <h2 className="text-beige text-4xl font-black mb-4">PLANNING</h2>
      <ul className="flex flex-col gap-6">
        {planningData.map((data, index) => (
          <DJCard
            key={index}
            date={data.date}
            time={data.time}
            name={data.name}
            description={data.description}
            index={index}
            totalCards={planningData.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default Planning;
