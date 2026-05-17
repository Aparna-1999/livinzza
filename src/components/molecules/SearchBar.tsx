"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

const SearchBar = ({ placeholder = "Search by city or college...", onSearch, className }: SearchBarProps) => {
  const [value, setValue] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={`relative flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_60px_rgba(2,6,23,0.25)] ${className}`}
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <Input 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="border-none bg-transparent pl-12 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <Button type="submit" className="rounded-xl px-8">
        Search
      </Button>
    </form>
  );
};

export { SearchBar };
