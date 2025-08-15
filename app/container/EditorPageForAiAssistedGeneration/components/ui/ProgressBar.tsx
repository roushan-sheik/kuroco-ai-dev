const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
    <div
      className="h-full bg-primary transition-all duration-300 ease-in-out rounded-full"
      style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
    />
  </div>
);

export default ProgressBar;
