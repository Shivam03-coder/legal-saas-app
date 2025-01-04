import {
    EllipsisIcon,
    GalleryHorizontal,
    Minimize2,
    Rows2,
    SendHorizontal,
    Star,
  } from "lucide-react";
  
  const Taskbar = () => {
    return (
      <header className="inline-flex h-[3.875rem] w-[98%] items-center justify-between bg-white py-2">
        <div className="flex items-center justify-start gap-2">
          <Rows2 size={19} />
          <div className="text-center font-inter text-sm font-normal leading-tight text-primary">
            Workspace/
          </div>
          <div className="text-center font-inter text-sm font-normal leading-tight text-primary">
            Project B/
          </div>
          <div className="text-center font-inter text-base font-normal text-primary">
            Task01
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center gap-3">
            <div className="text-center font-inter text-base font-normal text-primary">
              Created on Aug 02
            </div>
            <div className="inline-flex flex-col items-start justify-start">
              <EllipsisIcon />
            </div>
            <Star />
          </div>
          <div className="flex items-center justify-start gap-4 py-[3px]">
            <Minimize2 size={19} />
            <GalleryHorizontal size={19} />
            <button className="flex items-center justify-start gap-2 rounded border border-primary bg-primary px-3 py-2.5">
              <div className="flex items-center justify-center gap-3">
                <SendHorizontal className="text-secondary" size={20} />
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Share Task
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Taskbar;