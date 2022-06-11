import { atom, selector } from "recoil";

export const queryState = atom({
  key: "query",
  default: "",
});

export const querySelector = selector({
  key: "querySelector",
  get: async ({ get }) => {
    const queryAtom = get(queryState);
    if (queryAtom) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + queryAtom
      );
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  },
});

export const itemIdState = atom({
  key: "itemIdState",
  default: "",
});
export const itemIdSelector = selector({
  key: "itemIdSelector",
  get: async ({ get }) => {
    const item = get(itemIdState);
    if (item) {
      const res = await fetch("https://api.mercadolibre.com/items/" + item);
      const data = await res.json();
      return data;
    } else {
      return [];
    }
  },
});

export const itemPicturesState = atom({
  key: "itemPicturesState",
  default: [],
});

export const logStatusState = atom({
  key: "logStatusState",
  default: false,
});
