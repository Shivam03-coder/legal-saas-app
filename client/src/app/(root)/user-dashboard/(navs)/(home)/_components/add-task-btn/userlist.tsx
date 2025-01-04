import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Filter, Search } from "lucide-react";
import React from "react";

const UsersList = () => {
  return (
    <div className="flex flex-col">
      {/* UsersList Navbar */}
      <nav className="flex flex-1 justify-between bg-secondary p-3">
        <h4 className="font-inter text-lg font-medium">Activity</h4>
        <div className="flex items-center gap-3">
          <Search size={25} className="font-bold opacity-65" />
          <Bell size={25} className="font-bold opacity-65" />
          <Filter size={25} className="font-bold opacity-65" />
        </div>
      </nav>

      <div className="flex-1">
        <div className="flex gap-3 px-2 py-3">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="font-inter">
            <h4 className="text-sm">Changed the style</h4>
            <h5 className="text-sm opacity-55">Just now</h5>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 px-2 py-3">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="font-inter">
            <h4 className="text-sm"> Released a new version.</h4>
            <h5 className="text-sm opacity-55">Today 11:50 AM</h5>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 px-2 py-3">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="font-inter">
            <h4 className="text-sm">Submitted a bug.</h4>
            <h5 className="text-sm opacity-55">Today 12:50 PM</h5>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 px-2 py-3">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="font-inter">
            <h4 className="text-sm">Modified A data in Page X.</h4>
            <h5 className="text-sm opacity-55">Today 11:50 PM</h5>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 px-2 py-3">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="font-inter">
            <h4 className="text-sm">Deleted a page in Project X.</h4>
            <h5 className="text-sm opacity-55">Today 1:50 AM</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;