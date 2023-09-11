import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

interface UpdateRestaurantProps {}

const UpdateRestaurant: React.FC<UpdateRestaurantProps> = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestautant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchApi();
  }, []);

  return (
    <div className="p-30">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-range">Price Range</label>
          <input
            id="price-range"
            type="text"
            className="form-control"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
