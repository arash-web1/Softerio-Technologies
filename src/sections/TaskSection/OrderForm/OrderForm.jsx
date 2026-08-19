import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { BudgetOption } from "./BudgetOption";

export default function OrderForm  ()  {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(
    "500 000 — 1 000 000 руб.",
  );

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-0 md:px-20 lg:px-40 py-0 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold text-center mb-8 md:mb-16">
          Заказать приложение
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <BudgetOption
            selected={selectedBudget}
            onSelect={setSelectedBudget}
          />
          <ContactForm budget={selectedBudget} />
        </div>
      </div>
    </div>
  );
};
