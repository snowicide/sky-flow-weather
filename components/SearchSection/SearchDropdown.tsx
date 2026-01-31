import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import searchIcon from "@/public/icons/icon-search.svg";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SearchDropdownProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}
type ActiveTab = "recent" | "featured";

interface LastSearchesItem {
  name: string;
  value: string;
}

const lastSearches = [
  { name: "Minsk, Belarus", value: "Minsk" },
  { name: "Moscow, Russia", value: "Moscow" },
  { name: "London, United Kingdom", value: "London" },
  { name: "Alice, United States", value: "Alice" },
  { name: "Berlin, Germany", value: "Berlin" },
];

export default function SearchDropdown({
  inputValue,
  setInputValue,
  handleKeyDown,
  handleSearch,
}: SearchDropdownProps) {
  const [isActive, setIsActive] = useState<ActiveTab>("recent");
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeTab = (value: ActiveTab) => {
    setIsActive(value);
  };

  const handleOptionSelect = (city: string) => {
    router.push(`${pathname}?city${encodeURIComponent(city)}`);
  };

  return (
    <div className="relative grid w-full">
      <Combobox
        value={inputValue}
        immediate={true}
        onChange={(value: LastSearchesItem | string) => {
          const city = typeof value === "object" ? value?.value : value;
          handleOptionSelect(city);
        }}
      >
        <div className="col-start-1 row-start-1 flex items-center w-full group">
          <Image
            src={searchIcon}
            className="w-5 h-5 mr-3 cursor-pointer shrink-0"
            alt="Search"
            onClick={handleSearch}
          />
          <ComboboxInput
            aria-label="Search"
            className="flex-1 min-w-0 bg-transparent placeholder-white/70 text-base sm:text-lg outline-none"
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            displayValue={() => inputValue}
            placeholder="Search for a place..."
          />
        </div>

        <ComboboxOptions className="absolute -left-5 top-5 -right-4 col-start-1 row-start-2 bg-[hsl(243,27%,20%)] border border-white/10 rounded-xl shadow-[0_10px_12px_black]/25 z-100 mt-1">
          {/* recents/featured tabs */}
          <div className="flex border-b border-white/10 mx-6 py-5">
            <div className="flex-1">
              <div
                className={`flex justify-center flex-1 mx-auto  text-xl font-bold tracking-wider hover:opacity-80 transition ${isActive === "recent" ? "text-[hsl(233,100%,70%)] underline" : ""}`}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleChangeTab("recent")}
                >
                  Recent
                </span>
              </div>
            </div>
            <div className="flex-1 h-full">
              <div
                className={`flex h-full justify-center mx-auto text-xl font-bold tracking-wider hover:opacity-80 transition ${isActive === "featured" ? "text-[hsl(233,100%,70%)] underline" : ""}`}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleChangeTab("featured")}
                >
                  Featured
                </span>
              </div>
            </div>
          </div>
          <div className="max-h-auto overflow-y-auto">
            {lastSearches.map(({ name, value }, index) => (
              <ComboboxOption
                key={`${name}-${index}`}
                value={{ name, value }}
                className="font-medium mx-2 px-5 py-3 my-3 cursor-pointer text-white hover:bg-[hsl(243,23%,30%)] rounded-xl"
                onClick={() => handleOptionSelect(value)}
              >
                {name}
              </ComboboxOption>
            ))}
          </div>
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
