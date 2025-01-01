"use client";

import { Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TimerTrackerCard = () => (
  <Card className="max-w-sm bg-white">
    <CardHeader>
      <CardTitle>Timer Tracker</CardTitle>
      <CardDescription>Track your daily time usage</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center">
        <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition">
          <Play className="text-white w-8 h-8" />
        </button>
        <p className="mt-4 text-2xl font-bold text-gray-800">00:21:23</p>
      </div>
    </CardContent>
    <CardFooter>
      <div className="flex justify-between w-full text-sm text-gray-600">
        <span>Today's spent</span>
        <span className="font-semibold">00:21:23 / 03:00:00</span>
      </div>
    </CardFooter>
  </Card>
);

export default TimerTrackerCard;
