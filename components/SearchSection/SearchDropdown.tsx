import { useSearchActions } from "@/hooks/useSearchActions";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useSearchStore } from "@/stores/useSearchStore";
import { useShallow } from "zustand/shallow";
import { FeaturedIcon, HistoryIcon } from "../icons";
import { RecentSearch } from "./RecentSearch";
import { FeaturedSearch } from "./FeaturedSearch";

export function SearchDropdown({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { isOpen, currentTab } = useSearchStore(
    useShallow((state) => ({
      inputValue: state.inputValue,
      setInputValue: state.setInputValue,
      setIsOpen: state.setIsOpen,
      isOpen: state.isOpen,
      currentTab: state.currentTab,
    })),
  );

  const { handleChangeTab } = useSearchActions();

  const { recent, favorites } = useSearchHistory();

  return (
    <>
      {isOpen && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="absolute -left-5 top-6 -right-4 col-start-1 row-start-2 bg-[hsl(243,27%,20%)] border border-white/10 rounded-xl shadow-[0_10px_12px_black]/25 z-100 mt-1"
        >
          {/* recents/featured tabs */}
          <div className="flex items-center border-b border-white/10 mx-6 py-5">
            <div
              onClick={() => handleChangeTab("recent")}
              className={` gap-1.5 cursor-pointer hover:opacity-80 transition flex w-auto justify-center items-center flex-1 mx-auto text-xl font-bold tracking-wider ${currentTab === "recent" ? "text-[hsl(233,100%,70%)]" : ""}`}
            >
              <HistoryIcon className="w-4.25 h-4.25 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-lg lg:text-xl">
                Recent ({recent.length})
              </span>
            </div>
            <div
              onClick={() => handleChangeTab("featured")}
              className={`flex-1 gap-1.5 cursor-pointer hover:opacity-80 transition flex items-center h-full justify-center mx-auto text-xl font-bold tracking-wider ${currentTab === "featured" ? "text-[hsl(233,100%,70%)]" : ""}`}
            >
              <div>
                <FeaturedIcon
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  allowFill={false}
                  currentTab={currentTab}
                />
              </div>
              <span className="text-sm sm:text-lg lg:text-xl">
                Featured ({favorites.length})
              </span>
            </div>
          </div>
          {/* current tab */}
          <div className="max-h-auto overflow-y-auto">
            {currentTab === "recent" &&
              recent.map((data, index) => (
                <RecentSearch
                  key={`${data.city}-${index}`}
                  data={data}
                  inputRef={inputRef}
                />
              ))}
            {currentTab === "featured" &&
              favorites.map((data, index) => (
                <FeaturedSearch
                  key={`${data.city}-${index}`}
                  data={data}
                  inputRef={inputRef}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
