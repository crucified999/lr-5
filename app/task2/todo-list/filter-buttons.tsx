import { FilterType } from "./types";

type FilterButtonsProps = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export const FilterButtons = ({
  currentFilter,
  onFilterChange,
}: FilterButtonsProps) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "Все" },
    { key: "active", label: "Активные" },
    { key: "completed", label: "Выполненные" },
  ];

  return (
    <div className="flex gap-2 mb-6 z-0">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-4 py-2 cursor-pointer rounded-lg transition-colors ${
            currentFilter === key
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
