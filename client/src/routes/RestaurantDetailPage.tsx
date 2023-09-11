import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import StarRating from "../components/starRating";
import Review from "../components/Reviews";
import AddReview from "../components/AddReview";

interface RestaurantDetailsProps {}

const RestaurantDetailsPage: React.FunctionComponent<
  RestaurantDetailsProps
> = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1>{selectedRestaurant.restaurant.name}</h1>
          <div className="mt-3">
            <Review reviews={selectedRestaurant.review} />
            <AddReview />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
