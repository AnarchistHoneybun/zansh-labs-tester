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
import ProfileStub from "./ProfileStub";

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
        <ProfileStub />
      </div>
    </header>
  );
};

export default Header;
