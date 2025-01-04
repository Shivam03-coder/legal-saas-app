import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, Plus } from "lucide-react";
import Taskbar from "./taskbar";
import Taskcol from "./taskcol";
import Activitycol from "./activity-col";

export function AddTaskBtn() {
  return (
    <Dialog>
      <DialogTrigger className="bg-highlight max-w-max flex py-1 px-2 rounded-md shadow-lg gap-2 items-center font-medium">
        <Plus />
        Add New Task
      </DialogTrigger>
      <DialogContent className="max-h-[98%] max-w-[98%] overflow-y-scroll bg-white p-5">
        <Taskbar />
        <main className="grid h-full grid-cols-7 gap-4">
          {/* Taskcol */}
          <Taskcol />
          {/* Activitycol */}
          <Activitycol />
        </main>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskBtn;
