import React from 'react';

const Review = ({ review }) => {
    const { img, rating, name, comment } = review;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-24 mask mask-hexagon">
                        <img src={img} />
                    </div>
                </div>
                <h2 class="card-title">Ratings: {rating}</h2>
                <h2 class="card-title">{name}</h2>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;