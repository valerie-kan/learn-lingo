export const selectTeachers = (state) => state.teachers.teachers;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;
