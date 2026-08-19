import "./Services.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 6.5c-1 0-1.5 .6-1.5 1.6v.9c0 .8-.4 1-1 1 .6 0 1 .2 1 1v.9c0 1 .5 1.6 1.5 1.6" />
      <path d="M13 6.5c1 0 1.5 .6 1.5 1.6v.9c0 .8 .4 1 1 1-.6 0-1 .2-1 1v.9c0 1-.5 1.6-1.5 1.6" />
    </svg>
  );
}
function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M9 9l-2.5 3L9 15" />
      <path d="M15 9l2.5 3L15 15" />
    </svg>
  );
}
function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="8" height="8" rx="2" />
      <rect x="14" y="4" width="7" height="6" rx="2" />
      <circle cx="17.5" cy="16.5" r="3" />
      <path d="M11 12h3" strokeDasharray="2 2" />
      <path d="M17.5 10v3.5" strokeDasharray="2 2" />
    </svg>
  );
}

const services = [
  {
    id: 1,
    icon: <PhoneIcon />,
    title: "Разработка мобильных приложений",
    tags: ["iOS", "Android"],
    featured: false,
    paragraphs: [],
  },
  {
    id: 2,
    icon: <WebIcon />,
    title: "Web разработка",
    tags: ["Frontend", "Backend"],
    featured: true,
    paragraphs: [
      "Разрабатываем сайты персонально под ваш бизнес. Анализируем рынок и целевую аудиторию в соответствии с задачами, которые вы хотите решить с помощью веб-сайта.",
      "Создаём web-сервисы для любого направления бизнеса: продажи, коммуникации, управление, серверную часть и API, гибкие административные инструменты для управления приложениями и сбора статистики.",
    ],
  },
  {
    id: 3,
    icon: <DesignIcon />,
    title: "Проектирование мобильного приложения",
    tags: ["Дизайн", "ТЗ"],
    featured: false,
    paragraphs: [],
  },
];

function ServiceCard({ icon, title, tags, featured, paragraphs }) {
  return (
    <article className={`service-card ${featured ? "" : "service-card--center"}`}>
      {featured ? (
        <>
          <div className="service-card__head">
            <div className="service-card__icon">{icon}</div>
            <h3 className="service-card__title">{title}</h3>
          </div>
          {paragraphs.map((text, i) => (
            <p className="service-card__text" key={i}>{text}</p>
          ))}
        </>
      ) : (
        <>
          <div className="service-card__icon">{icon}</div>
          <h3 className="service-card__title">{title}</h3>
        </>
      )}

      <div className="service-card__tags">
        {tags.map((tag) => (
          <span className="service-card__tag" key={tag}>{tag}</span>
        ))}
      </div>

      <a href="#" className="service-card__more">
        Подробнее <span className="arrow">→</span>
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Наши услуги</h2>
          <p className="services__subtitle">
            Разработка мобильных приложений и веб-проектов
            для бизнеса и стартапов
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
