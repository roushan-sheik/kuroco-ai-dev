import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useLanguage } from "~/context/LanguageContext";
import { NavLink } from "react-router";

// Validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  keepLoggedIn: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
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
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "demo@kuroco.ai",
      password: "demo123",
      keepLoggedIn: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login data:", data);
      toast("Login Successfully", { position: "top-center" });
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center login_bg justify-center">
      <ToastContainer />
      <div className="w-full p-4 max-w-md">
        {/* Login Card */}
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

          {/* Login Form */}
          <div className="space-y-6">
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
                placeholder="demo@kuroco.ai"
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
                placeholder="demo123"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Keep me logged in */}
            <div className="flex items-center">
              <input
                {...register("keepLoggedIn")}
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <div className="ml-2 block text-sm text-gray-700">
                {t("keepMeLoggedIn")}
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className={`w-full py-3 px-4 cursor-pointer rounded-lg font-medium text-white transition-all duration-200 ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {t("loggingIn")}
                </div>
              ) : (
                `${t("login")}`
              )}
            </button>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              {t("forgotPassword")}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {t("noAccount")}{" "}
            <NavLink to={"/register"} className="text-blue-600 hover:underline">
              {t("signUpHere")}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
