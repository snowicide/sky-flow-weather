import Image from "next/image";
import retryIcon from "@/public/icons/icon-retry.svg";
import type { StatusSectionProps } from "./StatusSection.types";

export default function StatusSection({
  isError,
  error,
  data,
}: StatusSectionProps) {
  const getErrorMessage = () => {
    if (isError) {
      if (error?.message === "FORECAST_FAILED")
        return "Server is temporarily unavailable...";
      if (error?.message === "UNKNOWN-ERROR")
        return "Check your network connection.";
      return "Unexpected error.";
    }
    if (!data?.success) return data?.error.message || "City not found...";
  };

  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="text-3xl font-bold">{getErrorMessage()}</h2>
      <button className="flex items-center gap-2 px-4 py-3 bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,24%)] transition rounded-lg">
        <Image src={retryIcon} alt="Retry" />
        <span>Go back</span>
      </button>
    </section>
  );
}
