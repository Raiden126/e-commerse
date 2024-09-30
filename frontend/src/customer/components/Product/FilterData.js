export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "S", label: "S" },
      { value: "S", label: "S" },
    ],
  },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "Rs 159 to Rs 399" },
            { value: "399-999", label: "Rs 399 to Rs 999" },
            { value: "999-1999", label: "Rs 999 to 1999" },
            { value: "1999-2999", label: "Rs 1999 to 2999" },
            { value: "3999-4999", label: "Rs 3999 to 4999" },
        ]
    },
    {
        id: "discount",
        name: "DISCOUNT RANGE",
        options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "20% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
            { value: "60", label: "60% and above" },
            { value: "70", label: "70% and above" },
        ]
    },
    {
        id: "stock",
        name: "Availabitlity",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ]
    }
]