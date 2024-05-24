import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "Java",
      start: "Сентябрь 2021",
      end: "Декабрь 2021",
      role: "Java Basics",
      url: "https://www.oracle.com/cis/java/",
      shortDescription: [
        "Объектно-ориентированное программирование (ООП)",
        "Работа с коллекциями",
        "Выполнение основных операций CRUD (Create, Read, Update, Delete)",
        "Основы многопоточности",
      ],
    },
    {
      name: "C++",
      start: "Сентябрь 2021",
      end: "Май 2022",
      role: "C++ Basics",
      url: "https://www.cplusplus.com/",
      shortDescription: [
        "Функции",
        "Введение в объектно-ориентированное программирование (ООП)",
        "Потоки ввода/вывода (I/O Streams)",
        "Компиляция и отладка",
      ],
    },
    {
      name: "Spring",
      start: "Январь 2022",
      end: "Май 2022",
      role: "React Basics",
      url: "https://spring.io/",
      shortDescription: [
        "Spring Boot",
        "Spring Data JPA",
        "Spring AOP (Aspect-Oriented Programming)",
        "Развертывание приложений",
      ],
    },
    {
      name: "Django",
      start: "Январь 2023",
      end: "Май 2023",
      role: "Django Basics",
      url: "https://djangoproject.com/",
      shortDescription: [
        "Архитектура Django",
        "Административная панель Django",
        "Маршрутизация (URL routing)",
        "ОПредставления (Views)",
      ],
    },
    {
      name: "React",
      role: "React Basics",
      start: "Сентябрь 2022",
      end: "Декабрь 2022",
      url: "https://react.dev/",
      shortDescription: [
        "Основы JavaScript и ES6+",
        "Стилизация компонентов",
        "Жизненный цикл компонентов",
        "Оптимизация производительности",
      ],
    },
    {
      name: "Laravel",
      start: "Сентябрь 2022",
      end: "Май 2023",
      role: "Laravel Basics",
      url: "https://www.laravel.com/",
      shortDescription: [
        "Модели и работа с базой данных (Eloquent ORM)",
        "API разработка",
        "Аутентификация и авторизация",
        "Формы и валидация данных",
      ],
    },

  ];

  return (
      <motion.div
          className="experience"
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
      >
        <div className="title">
          <h2>Чему я научился</h2>
        </div>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {experiences.map((experience, index) => {
              return (
                  <li
                      className={`exp-slider-item ${
                          index === selected && "exp-slider-item-selected"
                      }`}
                      onClick={() => setSelected(index)}
                      key={experience.name}
                  >
                    <span>{experience.name}</span>
                  </li>
              );
            })}
          </ul>
          <div className="exp-details">
            <div className="exp-details-position">
              <h3>
                <span>{experiences[selected].role}</span>
                <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                  <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
              </h3>
              <p className="exp-details-range">
                {experiences[selected].start} - {experiences[selected].end}
              </p>
              <ul className="exp-details-list">
                {experiences[selected].shortDescription.map(
                    (description, index) => (
                        <li key={index} className="exp-details-list-item">
                          {description}
                        </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default Experience;
