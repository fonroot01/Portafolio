import React from "react";
import { ContactForm } from "../forms/contact-form";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900" id="contacto">
      <div className="w-full max-w-xl p-8 rounded-xl shadow-lg bg-white/90 dark:bg-gray-800/90">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary/90 dark:text-primary hover:text-primary dark:hover:text-primary/90 transition-colors">
          Contacta conmigo
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
