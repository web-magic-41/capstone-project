
export interface Rating {
    ratingProfileId:
    rating
}

rating_profile uuid not null,
    rated_profile uuid not null,
    rating_comment varchar(1000),
    rating_star_value varchar(5),