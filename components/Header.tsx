"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell,BellOff, CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AnimatedBell = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsMuted(!isMuted);
    }, 500);
  };

  return (
    <div
      className={`cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
      onClick={handleClick}
    >
      {isMuted ? (
        <BellOff className="h-4 w-4 text-muted-foreground" />
      ) : (
        <Bell className="h-4 w-4 text-muted-foreground" />
      )}
    </div>
  );
};

const Header = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [userStatus, setUserStatus] = useState<"online" | "offline">("online");

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-background shadow-sm">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-foreground hover:text-gray-900 font-semibold"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/applicants"
              className="text-foreground hover:text-gray-900 font-semibold"
            >
              Applicants
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className="text-foreground hover:text-gray-900 font-semibold"
            >
              Messages
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <CalendarIcon className="h-4 w-4" />
              <span>Calendar</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-popover">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* <Bell className="h-4 w-4 text-muted-foreground" /> */}
        <AnimatedBell />
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>OR</AvatarFallback>
                </Avatar>
                <span
                  style={{
                    backgroundColor:
                      userStatus === "online"
                        ? "hsl(152, 82%, 39%)"
                        : "hsl(0, 100%, 50%)",
                    borderColor: "white",
                  }}
                  className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border"
                ></span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-white shadow-lg rounded-lg">
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setUserStatus("online")}
              >
                Online
              </Button>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setUserStatus("offline")}
              >
                Offline
              </Button>
            </PopoverContent>
          </Popover>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Olivia Rhye</span>
            <span className="text-xs text-gray-500">olivia@untitledui.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
