import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Mt Yokodake",
    description:
      "A beautiful and the highest mountain in Minami Yatsugatake Mountain Range, Nagano Prefecture, Japan",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Yokodake01.JPG",
    address: "Kitayama, Chino, Nagano 391-0301, Japan Mountain Peak",
    location: {
      lat: 35.9835626,
      long: 137.2206116,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Mt Yokodake",
    description:
      "A beautiful and the highest mountain in the Minami Yatsugatake Mountain Range, Nagano Prefecture, Japan",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Yokodake01.JPG",
    address: "Kitayama, Chino, Nagano 391-0301, Japan Mountain Peak",
    location: {
      lat: 35.9835626,
      long: 137.2206116,
    },
    creator: "u2",
  },
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
