import React from 'react';
import { useTranslation } from 'react-i18next';
import { Nutrient } from '../data/mockData';

interface NutrientRowProps {
  nutrient: Nutrient;
  isRTL: boolean;
  isLast?: boolean;
}

const NutrientRow: React.FC<NutrientRowProps> = ({ nutrient, isRTL, isLast = false }) => {
  const { t } = useTranslation();
  
  const getIndentClass = (level: number) => {
    switch (level) {
      case 1:
        return isRTL ? 'mr-4' : 'ml-4';
      case 2:
        return isRTL ? 'mr-8' : 'ml-8';
      default:
        return '';
    }
  };

  const indentClass = getIndentClass(nutrient.indentation);
  const value = Math.round(nutrient.value);
  const unit = nutrient.unit || 'g';
  const translationKey = `nutrients.${nutrient.name.toLowerCase().replace(/\s+/g, '')}`;

  return (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''} w-full`}>
      <div className={`flex justify-between items-baseline py-1 ${indentClass}`}>
        <div className={`flex-1 ${nutrient.indentation === 0 ? 'font-bold' : ''}`}>
          <span className={nutrient.name.toLowerCase() === 'trans fat' ? 'italic' : ''}>
            {t(translationKey)}
          </span>
          <span className="font-normal mx-1">{value}{unit}</span>
        </div>
        {nutrient.daily_value !== null && nutrient.daily_value !== undefined && (
          <div className="font-bold min-w-[3rem] text-end">
            {nutrient.daily_value}%
          </div>
        )}
      </div>
    </div>
  );
};

export default NutrientRow;