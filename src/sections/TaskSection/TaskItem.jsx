interface TaskItemProps {
  number: string;
  title: string;
  description: string;
}

export default function TaskItem  ({ number, title, description }: TaskItemProps)  {
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0C4AB3] text-white text-sm md:text-[16px] font-semibold shrink-0">
          {number}
        </span>
        <p className="font-semibold text-black text-base sm:text-lg md:text-[20px] leading-[128%]">
          {title}
        </p>
      </div>
      <p className="text-sm md:text-[14px] text-black leading-[133%] max-w-full md:max-w-[400px]">
        {description}
      </p>
    </div>
  );
};
