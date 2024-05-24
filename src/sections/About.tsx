import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Элемент в поле зрения: ", isInView);
  }, [isInView]);
  return (
      <motion.div
          className="about"
          id="about"
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
          <h2>Обо мне</h2>
        </div>
        <div className="about-grid">
          <div className="about-grid-info">
            <p className="about-grid-info-text">
              Привет! Меня зовут Алибек, и я frontend разработчик с опытом работы с 2021 года. Мое увлечение веб-разработкой началось с создания первого сайта — онлайн-магазина для ноутбуков. Этот проект стал отправной точкой в моей карьере и дал мне ценное понимание основ веб-разработки.            </p>
            <p className="about-grid-info-text">
              С тех пор я работал над рядом интересных проектов, среди которых:
              <Link href="https://github.com/Abdurozeek/Kick-Off.git" className="link" target="_blank">
                KinoBeyne
              </Link> - сайт для просмотра фильмов с удобным и интуитивно понятным интерфейсом.
              <Link href="https://github.com/Abdurozeek/Kick-Off.git" className="link" target="_blank">
                AllFootball
              </Link> -  сайт для просмотра новостей, фактов и статистики по футболу, который предоставляет пользователям актуальную информацию и аналитические данные.
            </p>
            <p className="about-grid-info-text">
              В своих проектах я использую передовые технологии, чтобы создавать современные и высокоэффективные веб-приложения.
            </p>
            <p className="about-grid-info-text">
              Вот несколько технологий, с которыми я работал в последнее время:
            </p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">React</li>
              <li className="about-grid-info-list-item">Webpack Config</li>
              <li className="about-grid-info-list-item">Next.js</li>
              <li className="about-grid-info-list-item">TypeScript</li>
              <li className="about-grid-info-list-item">Redux Toolkit</li>
              <li className="about-grid-info-list-item">Node.js</li>
              <li className="about-grid-info-list-item">React Native</li>
              <li className="about-grid-info-list-item">CSS</li>
            </ul>
          </div>
          <div className="about-grid-photo">
            <div className="overlay"></div>
            <div className="overlay-border"></div>
            <div className="about-grid-photo-container">
              <Image src="/mengo.jpg" alt="профиль" fill />
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default About;
