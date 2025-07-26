import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t } = useTranslation("blogs");

  return (
    <section>
      <h1>{t("qualityTitle")}</h1>
      <p>{t("qualityContent")}</p>

      <h2>{t("blogTitle")}</h2>
      <p>{t("blogContent")}</p>
    </section>
  );
};
export default Blogs;
