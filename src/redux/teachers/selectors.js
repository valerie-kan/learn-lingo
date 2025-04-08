export const selectTeachers = (state) => state.teachers.teachers;

export const selectIsLoading = (state) => state.teachers.isLoading;

export const selectError = (state) => state.teachers.error;

export const selectLastKey = (state) => state.teachers.lastKey;

export const selectPerPage = (state) => state.teachers.perPage;

export const selectHasMore = (state) => state.teachers.hasMore;
