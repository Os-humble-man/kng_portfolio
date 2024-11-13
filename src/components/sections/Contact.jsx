import React, { useState } from "react";
import emailjs from "emailjs-com";
import gmailLogo from "../../assets/gmail.png";
import ScrollLayout from "../layout/ScrollLayout";
import { useTranslation } from "react-i18next";

// EmailJS keys
const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
const USER_KEY = import.meta.env.VITE_EMAILJS_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = t("formErrorMessage.name");
    }
    if (!formData.email) {
      newErrors.email = t("formErrorMessage.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.service) {
      newErrors.service = t("formErrorMessage.service");
    }
    if (!formData.message) {
      newErrors.message = t("formErrorMessage.message");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, e.target, USER_KEY).then(
        (result) => {
          console.log(result.text);
          setStatus(t("formErrorMessage.successSend"));
          setFormData({
            name: "",
            email: "",
            service: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          console.log(error.text);
          setStatus(t("formErrorMessage.failedSend"));
        }
      );
    } else {
      setStatus(t("formErrorMessage.general"));
    }
  };

  return (
    <div
      className="w-full bg-primary dark:bg-darkPrimary py-10 px-4 sm:px-8 md:px-12 lg:px-24"
      id="contact"
    >
      <ScrollLayout>
        <div className="flex flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            {t("button.touch")}
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t("workTogether")}
            </span>
          </h2>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="w-full flex justify-center text-textColor dark:text-darkText">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col gap-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block">
                {t("formLabel.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary  bg-primary"
                id="name"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">
                {t("formLabel.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
                id="email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block">
                {t("formLabel.service")}
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
              >
                <option value="">{t("formLabel.selectMessage")}</option>
                <option value="Web Development">
                  {t("formLabel.formOption.service1")}
                </option>
                <option value="Mobile App Development">
                  {t("formLabel.formOption.service2")}
                </option>
                <option value="SEO Optimization">
                  {t("formLabel.formOption.service3")}
                </option>
                <option value="UI/UX Design">
                  {t("formLabel.formOption.service4")}
                </option>
                <option value="Mentoring and coaching">
                  {t("formLabel.formOption.service5")}
                </option>
              </select>
              {errors.service && (
                <p className="text-red-500">{errors.service}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
                rows={5}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <button className="w-full p-3 bg-gray-300 text-darkPrimary rounded-md font-semibold hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              {t("button.touch")}
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="w-full py-10 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textColor dark:text-darkText text-center lg:text-left mb-6 lg:mb-0">
              {t("sectionTitle.contactSubtitle")}
            </h1>
            <div className="flex items-center border  border-gray-500 dark:border-white rounded-md px-4 py-3 md:px-5 md:py-4">
              <img
                src={gmailLogo}
                className="w-8 h-8 md:w-10 md:h-10"
                alt="gmail logo"
              />
              <h2 className="ml-3 text-textColor dark:text-darkText font-normal text-base md:text-lg">
                Oscarkanangila01@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </ScrollLayout>
    </div>
  );
}
