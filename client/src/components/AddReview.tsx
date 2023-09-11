import { useState } from "react";

interface AddReviewProps {}

const AddReview: React.FunctionComponent<AddReviewProps> = (props) => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-8">
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            name=""
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
