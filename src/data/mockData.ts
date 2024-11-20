export interface Nutrient {
  id: number;
  name: string;
  value: number;
  unit: string | null;
  enabled: number;
  section: number;
  order: number;
  indentation: number;
  daily_value?: number;
}

export interface LabelData {
  amounts: {
    servings_per_container: number;
    serving_size: number;
  };
  serving: {
    Calories: Nutrient;
    nutrients: Nutrient[];
  };
  daily_values: Record<string, number>;
}

export const mockData: LabelData = {
  amounts: {
    servings_per_container: 1,
    serving_size: 450
  },
  serving: {
    Calories: {
      id: 1,
      name: "Calories",
      value: 990,
      unit: null,
      enabled: 1,
      section: 1,
      order: 1,
      indentation: 0
    },
    nutrients: [
      {
        id: 2,
        name: "Total Fat",
        value: 94,
        unit: "g",
        enabled: 1,
        section: 2,
        order: 1,
        indentation: 0,
        daily_value: 121
      },
      {
        id: 3,
        name: "Saturated Fat",
        value: 36,
        unit: "g",
        enabled: 1,
        section: 2,
        order: 2,
        indentation: 1,
        daily_value: 181
      },
      {
        id: 4,
        name: "Trans Fat",
        value: 0,
        unit: "g",
        enabled: 1,
        section: 2,
        order: 3,
        indentation: 1,
        daily_value: 0
      },
      {
        id: 5,
        name: "Monounsaturated Fat",
        value: 0,
        unit: "g",
        enabled: 0,
        section: 2,
        order: 4,
        indentation: 1,
        daily_value: 0
      },
      {
        id: 6,
        name: "Polyunsaturated Fat",
        value: 0,
        unit: "g",
        enabled: 0,
        section: 2,
        order: 5,
        indentation: 1,
        daily_value: 0
      },
      {
        id: 7,
        name: "Cholesterol",
        value: 35,
        unit: "mg",
        enabled: 1,
        section: 2,
        order: 6,
        indentation: 0,
        daily_value: 11
      },
      {
        id: 8,
        name: "Sodium",
        value: 150,
        unit: "mg",
        enabled: 1,
        section: 2,
        order: 7,
        indentation: 0,
        daily_value: 6
      },
      {
        id: 9,
        name: "Total Carbohydrates",
        value: 23,
        unit: "g",
        enabled: 1,
        section: 3,
        order: 1,
        indentation: 0,
        daily_value: 8
      },
      {
        id: 10,
        name: "Dietary Fiber",
        value: 2,
        unit: "g",
        enabled: 1,
        section: 3,
        order: 2,
        indentation: 1,
        daily_value: 7
      },
      {
        id: 11,
        name: "Total Sugars",
        value: 18,
        unit: "g",
        enabled: 1,
        section: 3,
        order: 3,
        indentation: 1,
        daily_value: null
      },
      {
        id: 12,
        name: "Added Sugars",
        value: 0,
        unit: "g",
        enabled: 1,
        section: 3,
        order: 4,
        indentation: 2,
        daily_value: 0
      },
      {
        id: 13,
        name: "Sugar Alcohol",
        value: 0,
        unit: "g",
        enabled: 0,
        section: 3,
        order: 5,
        indentation: 2,
        daily_value: null
      },
      {
        id: 14,
        name: "Protein",
        value: 27,
        unit: "g",
        enabled: 1,
        section: 4,
        order: 1,
        indentation: 0
      },
      {
        id: 15,
        name: "Vitamin D",
        value: 0.3,
        unit: "mcg",
        enabled: 1,
        section: 5,
        order: 1,
        indentation: 0,
        daily_value: 2
      },
      {
        id: 16,
        name: "Calcium",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 2,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 17,
        name: "Iron",
        value: 3.6,
        unit: "mg",
        enabled: 1,
        section: 5,
        order: 3,
        indentation: 0,
        daily_value: 20
      },
      {
        id: 18,
        name: "Potassium",
        value: 1060,
        unit: "mg",
        enabled: 1,
        section: 5,
        order: 4,
        indentation: 0,
        daily_value: 25
      },
      {
        id: 19,
        name: "Vitamin C",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 5,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 20,
        name: "Vitamin E",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 6,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 21,
        name: "Vitamin K",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 7,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 22,
        name: "Thiamin",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 8,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 23,
        name: "Riboflavin",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 9,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 24,
        name: "Niacin",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 10,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 25,
        name: "Vitamin B6",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 11,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 26,
        name: "Vitamin B12",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 12,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 27,
        name: "Pantothenic Acid",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 13,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 28,
        name: "Phosphorus",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 14,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 29,
        name: "Zinc",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 15,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 30,
        name: "Choline",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 16,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 31,
        name: "Beta Carotene",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 17,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 32,
        name: "Chloride",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 18,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 33,
        name: "Chromium",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 19,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 34,
        name: "Fluoride",
        value: 0,
        unit: "mg",
        enabled: 0,
        section: 5,
        order: 20,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 35,
        name: "Iodine",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 21,
        indentation: 0,
        daily_value: 0
      },
      {
        id: 36,
        name: "Molybdenum",
        value: 0,
        unit: "mcg",
        enabled: 0,
        section: 5,
        order: 22,
        indentation: 0,
        daily_value: 0
      }
    ]
  },
  daily_values: {
    "Total Fat": 78,
    "Saturated Fat": 20,
    "Cholesterol": 300,
    "Sodium": 2300,
    "Total Carbohydrates": 275,
    "Dietary Fiber": 28,
    "Added Sugars": 50,
    "Protein": 50,
    "Vitamin D": 20,
    "Iron": 18,
    "Potassium": 4700
  }
};