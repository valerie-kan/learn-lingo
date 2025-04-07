import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import css from "./Teachers.module.css";

import { getTeachers } from "../../redux/teachers/operations";
import { selectTeachers } from "../../redux/teachers/selectors";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Container from "../../components/Container/Container";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersList = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(getTeachers())
      .unwrap()
      .then((data) => console.log("Отримано вчителів:", data))
      .catch((err) => console.error("Помилка при запиті:", err));
  }, [dispatch]);

  return (
    <Container>
      <div className={css.teachersPage}>
        {teachersList.map((teacher) => (
          <TeacherCard
            teacher={teacher}
            key={Math.ceil(nanoid() * Math.random())}
          />
        ))}
      </div>
    </Container>
  );
};

export default Teachers;
