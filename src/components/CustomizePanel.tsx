import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Nutrient } from '../data/mockData';

interface CustomizePanelProps {
  nutrients: Nutrient[];
  selectedNutrients: Set<number>;
  onToggleNutrient: (id: number) => void;
  onToggleLanguage: () => void;
  isRTL: boolean;
}

const CustomizePanel: React.FC<CustomizePanelProps> = ({
  nutrients,
  selectedNutrients,
  onToggleNutrient,
  onToggleLanguage,
  isRTL
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-gray-900">{t('customize.title')}</h3>
        <button
          onClick={onToggleLanguage}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <Globe className="w-5 h-5" />
          <span className="whitespace-nowrap">{t('customize.toggleLanguage')}</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {nutrients.map((nutrient) => (
          <label
            key={nutrient.id}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedNutrients.has(nutrient.id)}
              onChange={() => onToggleNutrient(nutrient.id)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700 truncate">
              {t(`nutrients.${nutrient.name.toLowerCase().replace(/\s+/g, '')}`)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomizePanel;