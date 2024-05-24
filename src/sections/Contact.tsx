import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
      <motion.div
          className="contact"
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
      >
        <h2 className="contact-title">Что дальше?</h2>
        <h2 className="contact-sub-title">Связаться</h2>
        <p className="contact-text">
          Хотя я в настоящее время не ищу новых возможностей, моя почта всегда открыта. Если у вас есть вопрос или вы просто хотите поздороваться, я постараюсь ответить вам как можно скорее!
        </p>
        <div className="contact-cta">
          <Button link="mailto:alibek.dyussemkhanov@narxoz.kz" text="Написать" />
        </div>
      </motion.div>
  );
}

export default Contact;
