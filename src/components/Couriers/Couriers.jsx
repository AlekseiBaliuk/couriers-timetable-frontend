import Select from "react-select";

// import { useState } from "react";

import { Section } from "../Section/Section";

export const Couriers = ({ setCourier, courier }) => {

  const options = [
    { value: "courier-1", label: "courier-1" },
    { value: "courier-2", label: "courier-2" },
    { value: "courier-3", label: "courier-3" },
  ];

    const handleChange = (e) => {
      setCourier(e.value);
    };

  return (
    <Section text="Select courier">
      <Select
        options={options}
        onChange={setCourier}
        name="courier"
        value={courier}
      />
    </Section>
  );
};
