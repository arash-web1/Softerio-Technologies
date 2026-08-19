import { TaskItem } from "./TaskItem";
import PhoneImg from "../../assets/iPhone X.png";
import DiamondImg from "../../assets/diamond-bg.png";

const allTasks = [
  {
    number: "1",
    title: "Повысить лояльность",
    description:
      "Мобильное приложение работает намного быстрее сайта и может выполнять многие функции даже без интернета. Также здесь не нужно каждый раз авторизовываться, чтобы оформить заказ или отследить его статус. Все это создает положительный пользовательский опыт.",
  },
  {
    number: "2",
    title: "Автоматизировать продажи",
    description:
      "С приложением легче провести пользователя по каждому этапу воронки продаж. С помощью автоматизации внутри интерфейса можно показывать ценность продукта, рассказывать о новых функциях, делать допродажи и напоминать о себе с помощью пуш-уведомлений.",
  },
  {
    number: "3",
    title: "Сократить издержки",
    description:
      "Мобильный сервис помогает сэкономить на рекламном бюджете и дополнительных сотрудниках. Например, многие маркетинговые акции можно проводить в самом приложении и адаптировать рекламу под целевых пользователей, а часть работы службы поддержки делегировать автоматическим чат-ботам.",
  },
  {
    number: "4",
    title: "Увеличить прибыль",
    description:
      "Повышение уровня клиентского сервиса, экономия на закупке рекламы на других площадках и автоматизации процессов положительно скажется и на итоговой выручке. Вложения в разработку приложения быстро окупятся, если интерфейс хорошо справляется со своими задачами.",
  },
];

const leftTasks = allTasks.slice(0, 2);
const rightTasks = allTasks.slice(2, 4);

export default function TasksSection() {
  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-10">
      <div className="relative md:bg-white md:rounded-3xl mx-auto  px-0 md:px-10 lg:px-16 py-0 md:py-10">
        <div className="absolute inset-0 hidden md:flex items-center justify-center overflow-hidden rounded-3xl pointer-events-none">
          <img
            src={DiamondImg}
            alt=""
            className="w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] object-contain"
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold text-center mb-8 md:mb-16">
            Какие задачи поможет решить <br className="hidden sm:block" />{" "}
            запуск мобильного приложения
          </h2>

          <div className="flex flex-col gap-8 md:hidden">
            {allTasks.map((task) => (
              <TaskItem key={task.number} {...task} />
            ))}
            <img
              src={PhoneImg}
              alt="Мобильное приложение"
              className="w-48 sm:w-56 h-auto mx-auto"
            />
          </div>

          <div className="hidden md:grid grid-cols-3 gap-10 items-center">
            <div className="flex flex-col gap-10 min-w-0">
              {leftTasks.map((task) => (
                <TaskItem key={task.number} {...task} />
              ))}
            </div>

            <div className="flex justify-center relative z-20">
              <img
                src={PhoneImg}
                alt="Мобильное приложение"
                className="w-80 lg:w-[420px] h-auto -mb-24 lg:-mb-32"
              />
            </div>

            <div className="flex flex-col gap-10 min-w-0">
              {rightTasks.map((task) => (
                <TaskItem key={task.number} {...task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
