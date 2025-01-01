import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search, SortAscIcon, SortDescIcon } from "lucide-react";
import React from "react";

const TaskTabsBtn = () => {
  return (
    <div className="flex items-center gap-2">
      <TaskSearch />
      <FilterButton />
      <SortByButton />
      <AddNewTask />
    </div>
  );
};

const TaskSearch = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded bg-white px-2">
      <Search />
      <Input
        placeholder="Serach Task......."
        className="flex-1 border-none shadow-none outline-none"
      />
    </div>
  );
};

const FilterButton = () => {
  return (
    <Button className="bg-white">
      <Filter />
      Filter
    </Button>
  );
};

const SortByButton = () => {
  return (
    <Button className="bg-white">
      <SortAscIcon />
      Sort By
    </Button>
  );
};

const AddNewTask = () => {
  return (
    <Button className="bg-highlight">
      <Plus />
      Add New Task
    </Button>
  );
};

export default TaskTabsBtn;
