import * as SC from "./Timetable.styled";

export const Timetable = ({
  data,
  handleDelete,
  setDate,
  date,
  setTime,
  time,
}) => {
  return (
    <>
      <SC.FilterWrapper>
        <label>
          Filter by date
          <SC.Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Filter by end time
          <SC.Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>

        <SC.Button
          type="button"
          onClick={() => {
            setDate("");
            setTime("");
          }}
        >
          Reset
        </SC.Button>
      </SC.FilterWrapper>

      {data && (
        <SC.Table>
          <thead>
            <tr>
              <SC.Th>Courier</SC.Th>
              <SC.Th>Destination</SC.Th>
              <SC.Th>Start date</SC.Th>
              <SC.Th>Start time</SC.Th>
              <SC.Th>End date</SC.Th>
              <SC.Th>End time</SC.Th>
            </tr>
          </thead>
          <tbody>
            {data.map((courier) => (
              <tr key={courier.id}>
                <SC.Td>{courier.courier}</SC.Td>
                <SC.Td>{courier.destination}</SC.Td>
                <SC.Td>{courier.startdate}</SC.Td>
                <SC.Td>{courier.starttime}</SC.Td>
                <SC.Td>{courier.enddate}</SC.Td>
                <SC.Td>{courier.endtime}</SC.Td>
                <SC.Td>
                  <button onClick={() => handleDelete(courier.id)}>
                    Delete
                  </button>
                </SC.Td>
              </tr>
            ))}
          </tbody>
        </SC.Table>
      )}
    </>
  );
};
