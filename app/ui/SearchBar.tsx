"use client";

import React from "react";
import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchBar = (props: SearchProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { onSearch } = props;
  const isOnSearch = usePathname() === "/search";
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  const debounceSearch = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 300);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);

    if (isOnSearch) {
      debounceSearch(target.value);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOnSearch && event.key === "Enter") {
      onSearch(value);
      router.push(`/search?q=${value}`);
    }
  };
  return (
    <div className="group flex items-center w-64 rounded-full bg-[#08171A] px-4 h-10 text-white gap-2">
      <Search size={25} className="opacity-50 group-focus-within:hidden" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none w-full text-md text-white/50 mt-0.5"
        onChange={searchHandler}
        onKeyDown={keyDownHandler}
        defaultValue={value}
      />
    </div>
  );
};

export default SearchBar;
