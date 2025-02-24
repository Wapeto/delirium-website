import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import MotionIcon from "./MotionIcon";
import DJCard from "./DJCard";
import path from 'path';
import fs from 'fs/promises';

// This async component fetches data server-side
async function PlanningServer() {
  // Server-side data fetching
  const getPlanningData = async () => {
    try {
      const filePath = path.join(process.cwd(), 'data', 'planning.json');
      const jsonData = await fs.readFile(filePath, 'utf8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error loading planning data:', error);
      return [];
    }
  };

  const planningData = await getPlanningData();
  
  if (!planningData.length) {
    return <div className="text-beige text-xl text-center">No planning data available</div>;
  }

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
        {planningData.map((data: { date: string; time: string; name: string; description: string; }, index: number) => (
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
}

export default PlanningServer;