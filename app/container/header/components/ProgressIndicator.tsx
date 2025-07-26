import { useLanguage } from "~/context/LanguageContext";

const ProgressIndicator: React.FC = () => {
  const { t } = useLanguage();
  const progress = 52; // This would come from your app state
  const completedItems = 4;
  const totalItems = 8;

  return (
    <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
      <span>
        {t("progressPercentage")}: {progress}% ({completedItems}/{totalItems}{" "}
        {t("itemsCompleted")})
      </span>
    </div>
  );
};
export default ProgressIndicator;
