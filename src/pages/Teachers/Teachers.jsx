import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./Teachers.module.css";

import { getTeachers } from "../../redux/teachers/operations";
import {
  selectHasMore,
  selectIsLoading,
  selectLastKey,
  selectPerPage,
  selectTeachers,
} from "../../redux/teachers/selectors";
import { resetTeachers } from "../../redux/teachers/slice";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Container from "../../components/Container/Container";
import { ErrorToast } from "../../utils/errorToast";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersList = useSelector(selectTeachers);
  const perPage = useSelector(selectPerPage);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    resetTeachers();
    dispatch(getTeachers({ perPage }))
      .unwrap()
      .then(() => {
        return;
      })
      .catch((error) => ErrorToast("Ooops... Something went wrong:", error));
  }, [dispatch, perPage]);

  const handleClick = () => {
    dispatch(getTeachers({ perPage, lastKey }));
  };

  return (
    <Container className={css.teachersPage}>
      {teachersList.map((teacher) => (
        <TeacherCard teacher={teacher} key={teacher.id} />
      ))}
      {hasMore && !isLoading && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={handleClick}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </Container>
  );
};

export default Teachers;
