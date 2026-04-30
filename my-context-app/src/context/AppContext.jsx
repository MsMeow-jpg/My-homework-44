import { createContext } from "react";

export const AppContext = createContext({
  cityName: "Unknown Ancient City",
  ruler: "Unknown Ruler",
  theme: "Mythic Gold",
  cityMood: "Confused but still dramatic",
  citizens: [],
});

export function AppProvider({ children }) {
  const cityData = {
    cityName: "Krapopolis",
    ruler: "King Tyrannis",
    theme: "Mythic Gold",
    cityMood: "Chaotic, divine, and slightly suspicious",
    divineMessage:
      "The gods are watching. Unfortunately, they are also judging your city planning.",
    citizens: [
      {
        id: 1,
        name: "Stupendous",
        role: "Warrior Princess",
        status: "Ready to fight literally anything",
      },
      {
        id: 2,
        name: "Hippocampus",
        role: "Inventor",
        status: "Currently improving something that was not broken",
      },
      {
        id: 3,
        name: "Shlub",
        role: "Party Creature",
        status: "Emotionally unavailable but very festive",
      },
      {
        id: 4,
        name: "Deliria",
        role: "Goddess",
        status: "Powerful, dramatic, and not accepting criticism",
      },
    ],
  };

  return (
    <AppContext.Provider value={cityData}>
      {children}
    </AppContext.Provider>
  );
}