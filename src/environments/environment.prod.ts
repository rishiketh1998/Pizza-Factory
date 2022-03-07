export const environment = {
  production: true,
  // Base cooking time for an individual pizza in ms
  pizzaBaseTime: 3000,
  // Pizza Bases with cooking time multiplier.
  pizzaBases: {
    'Deep Pan': 2,
    'Stuffed Crust': 1.5,
    'Thin and Crispy': 1
  },
  // Toppings for Pizza
  pizzaToppings: ['Ham and Mushroom', 'Pepperoni', 'Vegetable'],
  // Fixed number of pizza that can be prepared
  pizzaCount: 50,
  // Interval between each pizza being cooked in ms.
  pizzaCookingIntervalTime: 500
};
