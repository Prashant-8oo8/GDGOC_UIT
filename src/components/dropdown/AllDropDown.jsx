import React from 'react';
import { core2023, core2024 } from './PreviousYearTeam';
import DropDown from './DropDown';

function AllDropDown() {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10 px-4 sm:px-8 lg:px-16 space-y-12">
      <DropDown core={core2023} year={2023} side="left" />
      <DropDown core={core2024} year={2024} side="right" />
    </div>
  );
}

export default AllDropDown;
