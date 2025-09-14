import getTranslation from "../../i18n";
import noData from "../../public/animations/no-data.json";
import { LottiePlayer } from "@/components/LottiePlayer";

const NoDataFound = async () => {
  const { t } = await getTranslation();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <LottiePlayer animation={noData} className="w-96" />
      <p className="text-xl font-medium">{t("NO_DATA_YET")}</p>
    </div>
  );
};

export default NoDataFound;
