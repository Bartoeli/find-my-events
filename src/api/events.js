export const getEventsOld = async (setLoading, setEvents) => {
  setLoading(true);
  const response = await fetch("http://localhost:8000/events");
  const data = await response.json();

  console.log(data);

  setEvents(data);
  setLoading(false);
};
