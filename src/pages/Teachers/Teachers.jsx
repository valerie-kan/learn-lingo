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

import { ErrorToast } from "../../utils/errorToast";

import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/Loader";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersList = useSelector(selectTeachers);
  const perPage = useSelector(selectPerPage);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (teachersList.length === 0) {
      dispatch(getTeachers({ perPage }))
        .unwrap()
        .then(() => {
          return;
        })
        .catch((error) => ErrorToast("Ooops... Something went wrong:", error));
    }
  }, [dispatch, perPage, teachersList.length]);

  const handleClick = () => {
    dispatch(getTeachers({ perPage, lastKey }));
  };

  return (
    <div className={css.teachersPage}>
      {isLoading && <Loader />}
      <Filters teachers={teachersList} />
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
    </div>
  );
};

export default Teachers;
