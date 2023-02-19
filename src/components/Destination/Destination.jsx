import Select from "react-select";

// import { useState } from "react";

import { Section } from "../Section/Section";

export const Destination = ({ setDestination, destination }) => {

  const options = [
    { value: "destination-1", label: "destination-1" },
    { value: "destination-2", label: "destination-2" },
    { value: "destination-3", label: "destination-3" },
  ];

  const handleChange = (e) => {
    setDestination(e.value);
  };

  return (
    <Section text="Select destination">
      <Select
        options={options}
        onChange={setDestination}
        name="destination"
        value={destination}
      />
    </Section>
  );
};
