import { useState, createContext } from "react";

export const RestaurantsContext = createContext({});

interface RestaurantContextProps {
  children: React.ReactNode;
}

export const RestaurantsContextProvider = ({
  children,
}: RestaurantContextProps) => {
  const [restaurants, setRestaurants] = useState([]);
  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurant }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
