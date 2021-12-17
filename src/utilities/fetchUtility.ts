const getDataFromFetch = async <T>(response: Response): Promise<T> => {
  const fetchedData: T = await response.json();
  return fetchedData;
}

export { getDataFromFetch }