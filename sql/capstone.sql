drop table if exists rating;
drop table if exists message;
drop table if exists listing;
drop table if exists card;
drop table if exists profile;

create table profile(
    profile_id uuid not null,
    profile_activation_token char(32),
    profile_email varchar(128) not null unique,
    profile_hash char(97) not null,
    profile_phone_number varchar(10) not null,
    profile_username varchar(32) not null unique,
    primary key(profile_id)
);

create table card(
    card_id uuid not null,
    card_description varchar(1000),
    card_market_value varchar(16) not null,
    card_name varchar(32) not null unique,
    primary key(card_id)

);

create table listing(
    listing_id uuid not null,
    listing_card_id uuid not null,
    listing_profile_id uuid not null,
    listing_back_img varchar(255) not null,
    listing_claimed boolean not null,
    listing_date timestamptz not null,
    listing_card_description varchar(500),
    listing_card_desired_value varchar(16) not null,
    listing_front_img varchar(255) not null,
    foreign key(listing_card_id) references card(card_id),
    foreign key(listing_profile_id) references profile(profile_id),
    primary key(listing_id)

);

create table message(
    message_id uuid not null,
    message_receiving_profile_id uuid not null,
    message_sending_profile_id uuid not null,
    message_content varchar(1000) not null,
    message_date_time timestamptz not null,
    foreign key(message_receiving_profile_id) references profile(profile_id),
    foreign key(message_sending_profile_id) references profile(profile_id),
    primary key(message_id)

);

create table rating(
    rating_profile_id uuid not null,
    rated_profile_id uuid not null,
    rating_comment varchar(1000),
    rating_star_value int,
    foreign key(rating_profile_id) references profile(profile_id),
    foreign key(rated_profile_id) references profile(profile_id)
);