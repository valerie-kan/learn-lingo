import css from "./Teachers.module.css";

import { useEffect } from "react";

import { getTeachers } from "../../redux/teachers/operations";
import { useDispatch } from "react-redux";

const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers())
      .unwrap()
      .then((data) => console.log("Отримано вчителів:", data))
      .catch((err) => console.error("Помилка при запиті:", err));
  }, [dispatch]);

  return <div>Teachers</div>;
};

export default Teachers;
