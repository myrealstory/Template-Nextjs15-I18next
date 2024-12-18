"use client";
import CustomInput from "../../components/CustomInput";
import { LocaleKeysType } from "../i18n";
import { useTranslation } from "../i18n/client";

export const InputBox = ({lang}: {lang : LocaleKeysType}) => {
    
    const { translate: t } = useTranslation(lang);
    
    const handleInputChange = (value: string) => {
        console.log(value);
      }    

    return (
        <CustomInput
        label={t("HomePage.enterName")}
        placeholder="Type here..."
        onChange={handleInputChange}
      />
    );
}