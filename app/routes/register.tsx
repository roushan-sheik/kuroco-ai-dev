import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useLanguage } from "~/context/LanguageContext";
import { NavLink } from "react-router";

// Validation schema
const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeToTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must agree to the terms and conditions"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation("common");
  const { language, setLanguage } = useLanguage();

  const handleLanguageSwitch = () => {
    if (language === "ja") {
      setLanguage("en");
    } else {
      setLanguage("ja");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Register data:", data);
      toast("Registration Successful", { position: "top-center" });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center login_bg justify-center">
      <ToastContainer />
      <div className="w-full p-4 max-w-lg">
        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">KUROCO AI</h1>
            <p className="text-gray-600 text-sm">
              Requirements Definition Tool
            </p>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={handleLanguageSwitch}
              className="text-blue-600 text-sm cursor-pointer"
            >
              {language === "ja" ? "English" : "日本語"}
            </button>
          </div>

          {/* Register Form */}
          <div className="space-y-6">
            {/* First Name and Last Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name Field */}
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  {t("firstName")}
                </div>
                <input
                  {...register("firstName")}
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.firstName
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                  placeholder={t("firstNamePlaceholder")}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name Field */}
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  {t("lastName")}
                </div>
                <input
                  {...register("lastName")}
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.lastName
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                  placeholder={t("lastNamePlaceholder")}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                {t("emailAddress")}
              </div>
              <input
                {...register("email")}
                type="email"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                {t("password")}
              </div>
              <input
                {...register("password")}
                type="password"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                placeholder={t("passwordPlaceholder")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                {t("confirmPassword")}
              </div>
              <input
                {...register("confirmPassword")}
                type="password"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.confirmPassword
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                placeholder={t("confirmPasswordPlaceholder")}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                {...register("agreeToTerms")}
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
              />
              <div className="ml-2 block text-sm text-gray-700">
                {t("agreeToTerms")}{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  {t("termsAndConditions")}
                </a>{" "}
                {t("and")}{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  {t("privacyPolicy")}
                </a>
              </div>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">
                {errors.agreeToTerms.message}
              </p>
            )}

            {/* Register Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {t("registering")}
                </div>
              ) : (
                `${t("register")}`
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {t("alreadyHaveAccount")}{" "}
            <NavLink to={"/login"} className="text-blue-600 hover:underline">
              {t("loginHere")}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
