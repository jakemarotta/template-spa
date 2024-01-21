export const fetchData = async <T>(data: T): Promise<T> => {
  return await new Promise<T>((resolve) =>
    setTimeout(() => resolve(data), 500)
  );
};
