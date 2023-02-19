import toast, { Toaster } from "react-hot-toast";

import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Wrapper, TableWrapper, Button } from "./App.styled";
import { Couriers } from "./components/Couriers/Couriers";
import { Period } from "./components/Period/Period";
import { useEffect, useState } from "react";
import { Destination } from "./components/Destination/Destination";
import axios from "axios";
import { Timetable } from "./components/Timetable/Timetable";

const BASE_URL = "https://couriers-timetable.onrender.com";

function App() {
  const [courierName, setCourier] = useState("");
  const [destination, setDestination] = useState("");

  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("en-ca")
  );
  const [startTime, setStartTime] = useState(null);

  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [couriers, setCouriers] = useState([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const deleteCourier = async (id) => {
    await axios.delete(BASE_URL + `/api/couriers/${id}`);
    const filterData = couriers.filter((courier) => courier.id !== id);
    setCouriers(filterData);
  };

  const handleDelete = (id) => {
    deleteCourier(id);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(BASE_URL + `/api/couriers`);
      setCouriers(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData();
        setCouriers([...data]);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (!couriers) {
      fetchData();
    }
  }, [couriers]);

  const addData = async (rows) => {
    if (rows) {
      const { data } = await axios.post(BASE_URL + "/api/couriers", rows);

      setCouriers((prev) => [...prev, ...data]);
    }
  };

  // ==========================================
  function checkScheduleOverlap(newCourier, couriers) {
    for (const existingCourier of couriers) {
      if (
        existingCourier.courier === newCourier.courier &&
        existingCourier.startdate === newCourier.startDate &&
        existingCourier.enddate === newCourier.endDate &&
        ((existingCourier.starttime <= newCourier.startTime &&
          newCourier.startTime < existingCourier.endtime) ||
          (newCourier.startTime <= existingCourier.starttime &&
            existingCourier.starttime < newCourier.endTime))
      ) {
        // If there's an overlap, return false
        return false;
      }
    }

    // If there's no overlap, return true
    return true;
  }

  // =============================

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newCourier = {
      courier: form.elements.courier.value,
      destination: form.elements.destination.value,
      startDate: form.elements.startDate.value,
      startTime: form.elements.startTime.value,
      endDate: form.elements.endDate.value,
      endTime: form.elements.endTime.value,
    };

    if (!courierName) {
      return toast.error("Select courier");
    }

    if (!destination) {
      return toast.error("Select destination");
    }

    if (!endDate) {
      return toast.error("Select endDate");
    }

    if (!startTime) {
      return toast.error("Select startTime");
    }

    if (!endTime) {
      return toast.error("Select endTime");
    }

    if (endDate === startDate && endTime <= startTime) {
      return toast.error("End time must be bigger then start time");
    }

    const isOverlap = checkScheduleOverlap(newCourier, couriers);

    // Check the result
    if (isOverlap) {
      // If there's no overlap, save the new courier schedule
      addData(newCourier);

      form.reset();

      setCourier("");
      setDestination("");
      toast.success("No overlap. Schedule saved.");
    } else {
      // If there's an overlap, don't save the new courier schedule
      toast.error("Courier is busy");
    }
  };

  const fetchByDate = async (date) => {
    try {
      if (date) {
        const { data } = await axios.get(
          BASE_URL + `/api/couriers/date/${date}`
        );

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getByDate = async () => {
      const data = await fetchByDate(date);
      setCouriers(data);
    };
    getByDate();
  }, [date]);

  const fetchByTime = async (time) => {
    try {
      if (time) {
        const { data } = await axios.get(
          BASE_URL + `/api/couriers/time/${time}`
        );

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getByTime = async () => {
      const data = await fetchByTime(time);
      setCouriers(data);
    };
    getByTime();
  }, [time]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <Couriers setCourier={setCourier} courier={courierName} />
          <Destination
            setDestination={setDestination}
            destination={destination}
          />
          <Period
            startDate={startDate}
            setStartDate={setStartDate}
            setStartTime={setStartTime}
            setEndDate={setEndDate}
            setEndTime={setEndTime}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
      <TableWrapper>
        <Timetable
          data={couriers}
          handleDelete={handleDelete}
          setDate={setDate}
          date={date}
          setTime={setTime}
          time={time}
        />
      </TableWrapper>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Wrapper>
  );
}

export default App;
