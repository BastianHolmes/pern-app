import * as React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
