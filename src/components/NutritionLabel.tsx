import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LabelData } from '../data/mockData';
import NutrientRow from './NutrientRow';
import CustomizePanel from './CustomizePanel';

interface NutritionLabelProps {
  data: LabelData;
}

const NutritionLabel: React.FC<NutritionLabelProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [selectedNutrients, setSelectedNutrients] = useState<Set<number>>(
    new Set(data.serving.nutrients.filter(n => n.enabled).map(n => n.id))
  );

  const toggleNutrient = (id: number) => {
    const newSelected = new Set(selectedNutrients);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedNutrients(newSelected);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  };

  const groupedNutrients = data.serving.nutrients.reduce((acc, nutrient) => {
    if (!acc[nutrient.section]) {
      acc[nutrient.section] = [];
    }
    acc[nutrient.section].push(nutrient);
    return acc;
  }, {} as Record<number, typeof data.serving.nutrients>);

  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Label Container */}
          <div className={`w-full lg:w-auto ${isRTL ? 'lg:order-2' : 'lg:order-1'} mb-8 lg:mb-0`}>
            <div className="max-w-[320px] mx-auto bg-white border-2 border-black p-4 nutrition-label shadow-lg">
              <h1 className="text-[44px] leading-[1] tracking-tight mb-1 border-b-[8px] border-black">{t('title')}</h1>
              
              <div className="border-b-[8px] border-black pb-1">
                <p className="text-base leading-tight">
                  {t('servingInfo.perContainer', { count: data.amounts.servings_per_container })}
                </p>
                <div className="flex justify-between text-2xl font-bold leading-none">
                  <span>{t('servingInfo.size')}</span>
                  <span>{data.amounts.serving_size}g</span>
                </div>
              </div>

              <div className="border-b-[8px] border-black py-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-sm">{t('servingInfo.amountPer')}</span>
                    <span className="block text-2xl font-bold leading-none">{t('calories')}</span>
                  </div>
                  <span className="text-[45px] font-bold leading-none">
                    {Math.round(data.serving.Calories.value)}
                  </span>
                </div>
              </div>

              <div className="border-t border-b border-black text-xs py-1">
                <div className={`text-${isRTL ? 'left' : 'right'} font-bold`}>{t('dailyValue')}</div>
              </div>

              {Object.entries(groupedNutrients).map(([section, nutrients], sectionIndex) => {
                const visibleNutrients = nutrients
                  .filter(n => selectedNutrients.has(n.id))
                  .sort((a, b) => a.order - b.order);

                if (visibleNutrients.length === 0) return null;

                return (
                  <div 
                    key={section}
                    className={`${sectionIndex === 0 ? 'border-t-[8px]' : ''} 
                               ${sectionIndex === Object.keys(groupedNutrients).length - 1 ? 'border-b-[8px]' : ''} 
                               border-black`}
                  >
                    {visibleNutrients.map((nutrient, index) => (
                      <NutrientRow 
                        key={nutrient.id} 
                        nutrient={nutrient} 
                        isRTL={isRTL}
                        isLast={index === visibleNutrients.length - 1}
                      />
                    ))}
                  </div>
                );
              })}

              <p className="text-xs mt-3 leading-tight">{t('disclaimer')}</p>
            </div>
          </div>

          {/* Customize Panel */}
          <div className={`w-full lg:flex-1 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <CustomizePanel
              nutrients={data.serving.nutrients}
              selectedNutrients={selectedNutrients}
              onToggleNutrient={toggleNutrient}
              onToggleLanguage={toggleLanguage}
              isRTL={isRTL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionLabel;