import { faker } from "@faker-js/faker";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { useIngredients } from "../composables/useIngredients";

export const useMenuStore = defineStore("menuStore", () => {
  // could be native fetch, axios, or inertia router GET/POST
  const fetchMenu = () => {
    try {
      console.log("fetching menu...");
      const localMenu = JSON.parse(localStorage.getItem("menu"));

      if (localMenu) {
        return localMenu;
      } else {
        const { breads, cheeses, veggies, meats, sauces } = useIngredients();
        const menu = Array.from({ length: 9 }).map((_, i) => {
          return {
            id: faker.string.alphanumeric(12),
            name: `Sandwich ${i + 1}`,
            description: faker.lorem.sentences(3),
            price: Math.floor(Math.random() * 20) + 0.99,
            options: {
              bread:
                breads[faker.number.int({ min: 0, max: breads.length - 1 })],
              cheese:
                cheeses[faker.number.int({ min: 0, max: cheeses.length - 1 })],
              meat: meats[faker.number.int({ min: 0, max: meats.length - 1 })],
              veggies:
                veggies[faker.number.int({ min: 0, max: veggies.length - 1 })],
              sauces:
                sauces[faker.number.int({ min: 0, max: sauces.length - 1 })],
            },
          };
        });
        localStorage.setItem("menu", JSON.stringify(menu));
        return menu;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // could be native fetch, axios, or inertia router GET/POST
  const fetchItem = async (itemId) => {
    let menu = JSON.parse(localStorage.getItem("menu"));
    if (!menu) {
      menu = fetchMenu();
    }

    let item;

    const mockRead = setTimeout(async () => {
      const localMenu = JSON.parse(localStorage.getItem("menu"));
      item = localMenu[itemId];
    }, 800);

    try {
      mockRead(resolve);
    } catch (error) {
      console.error(error);
    }
  };

  // how could you build client side filtering on the menu?

  return { fetchMenu, fetchItem };
});
