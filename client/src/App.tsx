import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailsPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/restaurants/:id/update" Component={UpdatePage} />
          <Route path="/restaurants/:id" Component={RestaurantDetailsPage} />
        </Routes>
      </BrowserRouter>
    </RestaurantsContextProvider>
  );
}
export default App;
