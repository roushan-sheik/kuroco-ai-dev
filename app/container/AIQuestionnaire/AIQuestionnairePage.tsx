import React, { useState } from "react";
import type { QuestionnaireState } from "./types/types";
import { questions } from "./constants";

const AIQuestionnairePage: React.FC = () => {
  const [state, setState] = useState<QuestionnaireState>({
    currentStep: 0,
    answers: {},
  });

  const currentQuestion = questions[state.currentStep];
  const totalSteps = questions.length;
  const progress = ((state.currentStep + 1) / totalSteps) * 100;

  const handleOptionSelect = (option: string) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: option,
      },
    }));
  };

  const handleNext = () => {
    if (state.currentStep < totalSteps - 1) {
      setState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    } else {
      // Handle completion
      console.log("Questionnaire completed:", state.answers);
      alert("Questionnaire completed! Check console for results.");
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 0) {
      setState((prev) => ({
        ...prev,
        currentStep: prev.currentStep - 1,
      }));
    }
  };

  const handleSkip = () => {
    if (state.currentStep < totalSteps - 1) {
      setState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    }
  };

  const isAnswered = state.answers[currentQuestion.id] !== undefined;
  const selectedAnswer = state.answers[currentQuestion.id];

  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full max-w-4xl overflow-hidden">
        {/* Header */}
        <div className="pb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-heading1 title font-semibold">
              AI Questionnaire
            </h1>
            <span className="text-body3 text_third">
              {state.currentStep + 1}/{totalSteps}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className=" bg-[#2563eb] h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8 border border-gray-200 box-border bg-white rounded-lg">
          <div className="mb-6">
            <h2 className="text-heading2 title mb-4">
              {currentQuestion.title}
            </h2>
            <p className="text-body1 text_sec mb-8">
              {currentQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`
                    flex items-center py-2 px-3   cursor-pointer transition-all duration-200
                    ${
                      selectedAnswer === option
                        ? "border-primary rounded-sm  bg-blue-50  ring-opacity-20"
                        : "hover:border-gray-300 hover:bg-gray-50"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleOptionSelect(option)}
                    className="sr-only"
                  />
                  <div
                    className={`
                    w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center
                    ${
                      selectedAnswer === option
                        ? "border-primary bg-primary"
                        : "border-gray-300"
                    }
                  `}
                  >
                    {selectedAnswer === option && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-body2 text_pri flex-1">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6">
          <button
            onClick={handlePrevious}
            disabled={state.currentStep === 0}
            className={`
                px-6 py-2 text-body2 cursor-pointer font-medium rounded-lg transition-all duration-200
                ${
                  state.currentStep === 0
                    ? "text_third cursor-not-allowed"
                    : "text_sec hover:text_pri hover:bg-gray-100"
                }
              `}
          >
            Previous
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSkip}
              className="px-6 py-2 text-body2 cursor-pointer font-medium text_third hover:text_sec transition-colors duration-200"
            >
              Skip
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`
                  px-8 py-3 text-body2 cursor-pointer font-semibold rounded-lg transition-all duration-200
                  ${
                    isAnswered
                      ? "bg-primary text-white hover:bg-blue-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      : "bg-gray-200 text_third cursor-not-allowed"
                  }
                `}
            >
              {state.currentStep === totalSteps - 1 ? "Complete" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIQuestionnairePage;
