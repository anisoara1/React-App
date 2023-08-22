import React from "react";
import collectionData from "../data/collectionData.json";
import Faculties from "../views/Faculties/Faculties";
import Description from "../views/Description/Description";
import Tutors from "../views/Tutors/Tutors";

export default function Main() {
  return (
    <div>
      <Description />
      <Tutors tutors={collectionData.tutors} />
      <Faculties faculties={collectionData.department} />
    </div>
  );
}
