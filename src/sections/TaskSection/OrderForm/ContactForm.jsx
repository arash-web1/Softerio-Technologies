import { useState, type FormEvent } from "react";

interface ContactFormProps {
  budget: string | null;
}

export default function ContactForm ({ budget }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, comment, budget });
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Контакты:</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full md:max-w-[480px]"
      >
        <input
          type="text"
          placeholder="Александр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-blue-200 rounded-lg px-4 py-3 sm:py-4 text-sm focus:outline-none focus:border-blue-500 w-full"
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-blue-200 rounded-lg px-4 py-3 sm:py-4 text-sm focus:outline-none focus:border-blue-500 w-full"
        />
        <textarea
          placeholder="Комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="border border-blue-200 rounded-lg px-4 py-3 sm:py-6 text-sm resize-none focus:outline-none focus:border-blue-500 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-4 sm:py-5 text-sm font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto sm:px-8"
        >
          Заказать обратный звонок
        </button>
      </form>
    </div>
  );
};
