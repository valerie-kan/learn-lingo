import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import css from "./Teachers.module.css";

import { getTeachers } from "../../redux/teachers/operations";
import { selectTeachers } from "../../redux/teachers/selectors";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Container from "../../components/Container/Container";
import { ErrorToast } from "../../utils/errorToast";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersList = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(getTeachers())
      .unwrap()
      .then(() => {
        return;
      })
      .catch((error) => ErrorToast("Ooops... Something went wrong:", error));
  }, [dispatch]);

  return (
    <Container className={css.teachersPage}>
      {teachersList.map((teacher) => (
        <TeacherCard teacher={teacher} key={nanoid()} />
      ))}
    </Container>
  );
};

export default Teachers;
