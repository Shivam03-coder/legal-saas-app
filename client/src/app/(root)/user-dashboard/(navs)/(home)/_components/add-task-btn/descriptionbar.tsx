import { Textarea } from "@/components/ui/textarea";
import { File, Sparkles } from "lucide-react";

export default function Descriptionbar() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6">
      <header className="flex gap-3 font-semibold text-primary">
        <File />
        Add Description
      </header>
      <div className="flex space-x-2">
        <Sparkles size={19} color="pink" />
        <Textarea
          className="border-none p-0 shadow-none outline-none"
          placeholder="Write with Ai"
        />
      </div>
    </div>
  );
}