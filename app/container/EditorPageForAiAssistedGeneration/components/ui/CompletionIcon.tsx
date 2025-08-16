import { Check, Circle } from "lucide-react";

const CompletionIcon: React.FC<{ completed: boolean }> = ({ completed }) => {
  if (completed) {
    return (
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
        <Check size={12} className="text-white" />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
      <Circle size={12} className="text-gray-500" />
    </div>
  );
};

export default CompletionIcon;
