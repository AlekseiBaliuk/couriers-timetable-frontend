import { useEffect } from "react";
import { BtnWrapper } from "../Section/BtnWrapper";
import { Section } from "../Section/Section";
import * as SC from "./Period.styled";

export const Period = ({
  startDate,
  setStartDate,
  setStartTime,
  setEndDate,
  setEndTime,
}) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [startTime, setStartTime] = useState(null);

  // const [endDate, setEndDate] = useState(null);
  // const [endTime, setEndTime] = useState(null);

  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {}, []);

  return (
    <>
      <Section text="Start date and time">
        <BtnWrapper>
          <SC.Input
            type="date"
            name="startDate"
            min={startDate}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <SC.Input
            type="time"
            name="startTime"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </BtnWrapper>
      </Section>

      <Section text="End date and time">
        <BtnWrapper>
          <SC.Input
            type="date"
            name="endDate"
            min={startDate}
            // value={startDate.toISOString().slice(0, 10)}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <SC.Input
            type="time"
            name="endTime"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </BtnWrapper>
      </Section>
    </>
  );
};
