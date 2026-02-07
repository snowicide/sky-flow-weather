import Image from "next/image";
import searchIcon from "@/public/icons/icon-search.svg";
import { useSearchParams } from "next/navigation";
import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { useSearchActions } from "@/hooks/useSearchActions";
import { useSearchStore } from "@/stores/useSearchStore";
import { useShallow } from "zustand/shallow";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import type { SearchBarProps } from "./SearchBar.types";

export function SearchBar({ inputRef }: SearchBarProps) {
  const { setIsOpen, inputValue } = useSearchStore(
    useShallow((state) => ({
      setIsOpen: state.setIsOpen,
      inputValue: state.inputValue,
      setInputValue: state.setInputValue,
    })),
  );

  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get("city") || "minsk";
  const { error } = useWeatherQuery(cityFromUrl);

  const { searchSelectedCity, handleKeydown, handleChangeInput } =
    useSearchActions();

  return (
    <div className="col-start-1 row-start-1 flex items-center w-full group">
      <Image
        src={searchIcon}
        className="w-5 h-5 mr-3 cursor-pointer shrink-0"
        alt="Search"
        onClick={() => searchSelectedCity()}
      />
      <SearchInput
        ref={inputRef}
        aria-label="Search"
        onKeyDown={(e) => handleKeydown(e, inputRef)}
        onChange={(e) => handleChangeInput(e)}
        value={inputValue}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder={
          error?.message === "GEOCODING_FAILED"
            ? "City not found..."
            : "Search for a place..."
        }
      />
    </div>
  );
}

export const SearchInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="flex-1 min-w-0 bg-transparent placeholder-white/70 text-base sm:text-lg outline-none"
    />
  );
});
SearchInput.displayName = "SearchInput";
