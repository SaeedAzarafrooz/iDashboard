import Image from "next/image";
import UnderConstruction from "@/public/assets/images/underconstruction.png";
import GoalsStatus from "@/components/madules/GoalsStatus";
import ActivitiesHistory from "@/components/madules/ActivitiesHistory";
import TasksStatus from "@/components/madules/TasksStatus";
import ActiveProgress from "@/components/madules/ActiveProgress";

export default function Home() {
  return (
    <main
      className="w-full h-screen flex flex-col justify-between items-center text-3xl text-gray-300 bg-white p-2"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPositionX: 800,
        backgroundPositionY: 270,
        backgroundSize: "40%",
        objectFit: "cover",
        backgroundImage: `url(${UnderConstruction.src})`,
      }}
    >
      <div className="w-full h-full flex  gap-2 p-4">
        <div className="w-2/3 h-full flex flex-col  gap-2 rounded-lg ">
          <GoalsStatus />
          <ActivitiesHistory />
          <TasksStatus />
        </div>
        <ActiveProgress />
      </div>
    </main>
  );
}
