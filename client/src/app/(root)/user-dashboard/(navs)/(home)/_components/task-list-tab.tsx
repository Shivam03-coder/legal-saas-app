import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TaskAll from "./tabs/task-all";
import TaskSearch from "./task-tab-btn";
import TaskTabsBtn from "./task-tab-btn";
import DueTask from "./tabs/due-task";
import MyTask from "./tabs/my-task";

const TaskListTab = () => {
  return (
    <section className="col-span-full space-y-2 p-3">
      <h3>Task Lists</h3>
      <Tabs defaultValue="All" className="bg-secondary">
        <TabsList className="flex items-center justify-between">
          <div className="rounded bg-white p-1">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="My-Task">My Task</TabsTrigger>
            <TabsTrigger value="Due-Task">Due Task</TabsTrigger>
          </div>
          <TaskTabsBtn />
        </TabsList>
        <TabsContent value="All">
          <TaskAll />
        </TabsContent>
        <TabsContent value="My-Task">
          <MyTask />
        </TabsContent>
        <TabsContent value="Due-Task">
          <DueTask />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TaskListTab;
