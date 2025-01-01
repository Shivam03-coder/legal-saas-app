import React from "react";
import PageHaeder from "./_components/PageHaeder";
import { WeeklyBars } from "@/components/charts/graph/weekly-bar";
import { YearlyGraph } from "@/components/charts/graph/yearly-graph";
import { TaskManagementChart } from "@/components/charts/graph/yearly-task-assign";

const Home = () => {
  return (
    <div className="page m-2 min-h-screen rounded-xl bg-secondary">
      <div className="flex flex-1 flex-col gap-4 p-4">
        <PageHaeder />
        <div className="grid  gap-4 md:grid-cols-3">
          <WeeklyBars />
          <YearlyGraph />
          <TaskManagementChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
