"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toggleform } from "@/store/states/form";
import { useAppDispatch } from "@/store";

// AddTaskBtn component
function AddTaskBtn() {
  const dispatch = useAppDispatch();
  
  // Manage the selected value for the dropdown
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  // Handle value change from the dropdown
  const handleValueChange = (value: string) => {
    setSelectedValue(value); // Update selected value in state
    dispatch(toggleform(`${value}form`)); // Dispatch to toggle the form
  };

  // Handle closing of the dialog and reset the value
  const handleCloseDialog = () => {
    setSelectedValue(""); // Reset selected value when closing the dialog
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="flex max-w-[200px] items-center gap-2 rounded-md border-none bg-highlight px-2 py-1">
        <Plus />
        <span>Add New Task</span>
      </SelectTrigger>
      <SelectContent className="border bg-secondary">
        <SelectGroup>
          <SelectLabel>Task Forms</SelectLabel>
          <SelectItem value="company">Company</SelectItem>
          <SelectItem value="person">Person</SelectItem>
          <SelectItem value="corporate">Corporate Matter</SelectItem>
          <SelectItem value="litigation">Litigation Case</SelectItem>
          <SelectItem value="hearing">Hearing</SelectItem>
          <SelectItem value="intellectual">Intellectual Property</SelectItem>
          <SelectItem value="task">Task</SelectItem>
          <SelectItem value="meeting">Meeting</SelectItem>
          <SelectItem value="reminder">Reminder</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AddTaskBtn;
