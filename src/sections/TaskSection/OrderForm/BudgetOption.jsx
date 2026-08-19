const budgetOptions = [
  "20 000 — 50 000 руб.",
  "50 000 — 100 000 руб.",
  "100 000 — 500 000 руб.",
  "500 000 — 1 000 000 руб.",
  "1 000 000 руб. — 2 000 000 руб.",
  "2 000 000 руб. — 3 000 000 руб.",
];

interface BudgetPickerProps {
  selected: string | null;
  onSelect: (value: string) => void;
}

export default function BudgetOption  ({ selected, onSelect }: BudgetPickerProps)  {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Бюджет проекта:</h3>

      <select
        value={selected ?? ""}
        onChange={(e) => onSelect(e.target.value)}
        className="md:hidden w-full border border-blue-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-blue-500"
      >
        {budgetOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="hidden md:grid grid-cols-2 gap-3 max-w-[520px]">
        {budgetOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`px-4 py-7 rounded-full border text-sm text-center transition-colors ${
              selected === option
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-blue-200 text-gray-900 hover:border-blue-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
