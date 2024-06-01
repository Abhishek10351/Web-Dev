import Rating from "@mui/material/Rating";

import { useState } from "react";
export default function RatingDemo() {
    const [ratingValue, setRatingValue] = useState(2);

    return (
        <div>
            <h1>Rating value : {ratingValue}</h1>
            <Rating
                name="half-rating"
                precision={0.1}
                value={ratingValue}
                onChange={(e, newVal) => {
                    setRatingValue(newVal);
                }}
            />
        </div>
    );
}
