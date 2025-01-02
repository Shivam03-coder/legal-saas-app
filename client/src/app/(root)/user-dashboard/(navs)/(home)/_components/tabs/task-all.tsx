import React from "react";
import TaskCard from "./task-card";
import { CircleCheck, Goal, Loader, Plus } from "lucide-react";

const dummyData = [
  {
    title: "Complete Financial Report for Q3",
    priority: "High",
    category: "Work",
    dueDate: "Today, September 23, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Design Mockups for Client Presentation",
    priority: "Medium",
    category: "Personal",
    dueDate: "Sunday, September 29, 2024",
    status: "On Going",
    tasksCompleted: 1,
    totalTasks: 4,
  },
  {
    title: "Conduct User Feedback Session",
    priority: "Medium",
    category: "Personal",
    dueDate: "Today, September 23, 2024",
    status: "Completed",
    tasksCompleted: 1,
    totalTasks: 1,
  },
  {
    title: "Update Marketing Strategy for Q4",
    priority: "High",
    category: "Work",
    dueDate: "Monday, October 2, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Prepare Monthly Performance Report",
    priority: "Medium",
    category: "Work",
    dueDate: "Wednesday, October 4, 2024",
    status: "On Going",
    tasksCompleted: 2,
    totalTasks: 5,
  },
  {
    title: "Plan Team Building Activities",
    priority: "Low",
    category: "Personal",
    dueDate: "Friday, October 6, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 3,
  },
  {
    title: "Review Project Documentation",
    priority: "Medium",
    category: "Work",
    dueDate: "Thursday, September 28, 2024",
    status: "On Going",
    tasksCompleted: 3,
    totalTasks: 6,
  },
  {
    title: "Organize Office Workspace",
    priority: "Low",
    category: "Personal",
    dueDate: "Saturday, September 30, 2024",
    status: "Completed",
    tasksCompleted: 3,
    totalTasks: 3,
  },
  {
    title: "Submit Weekly Client Updates",
    priority: "High",
    category: "Work",
    dueDate: "Today, September 23, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Finalize Budget for Upcoming Campaign",
    priority: "High",
    category: "Work",
    dueDate: "Friday, September 29, 2024",
    status: "On Going",
    tasksCompleted: 2,
    totalTasks: 4,
  },
  {
    title: "Set Up Personal Fitness Routine",
    priority: "Low",
    category: "Personal",
    dueDate: "Sunday, October 1, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 2,
  },
  {
    title: "Plan Annual Company Retreat",
    priority: "Medium",
    category: "Work",
    dueDate: "Wednesday, October 11, 2024",
    status: "On Going",
    tasksCompleted: 1,
    totalTasks: 5,
  },
  {
    title: "Update Software Documentation",
    priority: "Low",
    category: "Work",
    dueDate: "Tuesday, October 10, 2024",
    status: "Completed",
    tasksCompleted: 4,
    totalTasks: 4,
  },
  {
    title: "Clean Office Pantry",
    priority: "Low",
    category: "Personal",
    dueDate: "Monday, October 9, 2024",
    status: "Completed",
    tasksCompleted: 2,
    totalTasks: 2,
  },
  {
    title: "Prepare Presentation for Board Meeting",
    priority: "High",
    category: "Work",
    dueDate: "Friday, October 13, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
];

const TaskAll = () => {
  return (
    <div className="page grid gap-3 p-4 md:grid-cols-3">
      {/* TO DO */}
      <section className="flex flex-col gap-4 rounded-lg bg-gray-300 p-4">
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
            <Loader />
            <h6 className="font-semibold">To Do</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "To Do")
          .map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>

      {/* ON GOING */}
      <section className="flex flex-col gap-4 rounded-lg bg-gray-300 p-4">
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
            <Goal />
            <h6 className="font-semibold">On Going</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "On Going")
          .map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>

      {/* COMPLETED */}
      <section className="flex flex-col gap-4 rounded-lg bg-gray-300 p-4">
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
          <CircleCheck />
            <h6 className="font-semibold">Completed</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "Completed")
          .map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>
    </div>
  );
};

export default TaskAll;
