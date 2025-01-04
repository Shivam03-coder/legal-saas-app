import {
    CalendarRange,
    Flag,
    Hourglass,
    Sparkles,
    Tags,
    Timer,
    TrendingUp,
    Users,
  } from "lucide-react";
  import React from "react";
import Descriptionbar from "./descriptionbar";
  
  const Taskcol = () => {
    const labelsGroup1 = [
      { icon: <TrendingUp size={19} />, text: "Status" },
      { icon: <CalendarRange size={19} />, text: "Dates" },
      { icon: <Hourglass size={19} />, text: "Track Time" },
      { icon: <Tags size={19} />, text: "Tags" },
    ];
  
    const labelsGroup2 = [
      { icon: <Users size={19} />, text: "Assignees" },
      { icon: <Flag size={19} />, text: "Priority" },
      { icon: <Timer size={19} />, text: "Track Time" },
    ];
  
    const labelsGroup3 = [
      { icon: <TrendingUp size={19} />, text: "Link Task" },
      { icon: <CalendarRange size={19} />, text: "Waiting On" },
      { icon: <Hourglass size={19} />, text: "Blocking" },
      { icon: <Tags size={19} />, text: "Tags" },
    ];
  
    const labelsGroup4 = [
      { icon: <Users size={19} />, text: "Link Doc" },
      { icon: <Timer size={19} />, text: "Track Url" },
    ];
  
    return (
      <main className="col-span-5 mx-7 flex flex-col gap-5 font-inter">
        <span className="text-4xl font-medium text-primary">Task 01</span>
        <header className="inline-flex h-11 items-center justify-start gap-1 rounded-xl bg-secondary px-5 py-3 text-pink-500">
          <Sparkles />
          <div className="text-center text-sm font-medium leading-tight">
            Ask AI to write a description, create a summary, or ask about this task.
          </div>
        </header>
  
        {/* Set or Change Section */}
        <section className="space-y-4">
          <header className="font-inter text-sm font-medium leading-tight text-[#b0bac3]">
            Set or Change
          </header>
          <div className="inline-flex h-48 items-start justify-start gap-14">
            <LabelGroup labels={labelsGroup1} />
            <LabelGroup labels={labelsGroup2} />
          </div>
          <Descriptionbar />
          <div className="inline-flex h-48 items-start justify-start gap-14">
            <LabelGroup labels={labelsGroup3} />
            <LabelGroup labels={labelsGroup4} />
          </div>
        </section>
      </main>
    );
  };
  
  export default Taskcol;
  
  export const EmptyLabel = () => {
    return (
      <div className="inline-flex h-11 items-center justify-start gap-2.5 px-2.5 py-1">
        <div className="text-center text-sm font-medium leading-tight text-[#b0b0b0]">
          Empty
        </div>
      </div>
    );
  };
  
  export const LabelFields = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: string;
  }) => {
    return (
      <div className="inline-flex items-start justify-start gap-1">
        <div className="flex h-11 items-center justify-start gap-1 rounded-full bg-white px-5 py-3">
          {icon}
          <div className="text-center text-sm font-medium leading-tight">
            {text}
          </div>
        </div>
      </div>
    );
  };
  
  export const LabelGroup = ({ labels }: { labels: { icon: React.ReactNode; text: string }[] }) => {
    return (
      <div className="flex items-start justify-start gap-1">
        <div className="inline-flex flex-col items-start justify-start gap-1">
          {labels.map((label, index) => (
            <LabelFields key={index} icon={label.icon} text={label.text} />
          ))}
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-1">
          {labels.map((_, index) => (
            <EmptyLabel key={index} />
          ))}
        </div>
      </div>
    );
  };