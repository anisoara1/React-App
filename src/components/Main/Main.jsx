import React from 'react';
import Card from '../Card/Card';

import collectionData from './data.json';
import Tutors from '../Tutors/Tutors';
import Cities from '../Cities/Cities';
import Faculties from '../Faculties/Faculties';
import Description from '../Description/Description';

export default function Main() {
  return (
    <div>
      <div className="univ">
        <Card />
        <Description />
      </div>
      <Tutors data={collectionData.tutors} />
      <Cities data={collectionData.cities} />
      <Faculties faculties={collectionData.department} />
    </div>
  );
}
