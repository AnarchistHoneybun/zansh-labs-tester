// components/ui/ProfileStub.tsx
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const ProfileStub = () => {
  const [userStatus, setUserStatus] = useState<"online" | "offline">("online");

  return (
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
                backgroundColor: userStatus === "online" ? "hsl(152, 82%, 39%)" : "hsl(0, 100%, 50%)",
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
  );
};

export default ProfileStub;