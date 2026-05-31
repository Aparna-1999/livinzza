import React from "react";
import { CalendarCheck2 } from "lucide-react";
import { Button } from "../atoms/Button";

const FloatingBookButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button href="/schedule" className="rounded-full px-5 py-4 shadow-[0_18px_50px_rgba(29,78,216,0.28)]">
        <CalendarCheck2 className="h-4 w-4" />
        Book appointment
      </Button>
    </div>
  );
};

export { FloatingBookButton };
