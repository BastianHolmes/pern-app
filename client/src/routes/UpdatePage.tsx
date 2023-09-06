import * as React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";

interface UpdatePageProps {}

const UpdatePage: React.FunctionComponent<UpdatePageProps> = () => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">
        Update Restaurant
      </h1>
      <UpdateRestaurant />
    </div>
  );
};

export default UpdatePage;
