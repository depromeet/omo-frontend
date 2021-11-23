const getObjectFromQuery = (query: string[]): { [key: string]: string } => {
  const obj = query.reduce((acc, curr) => {
    const [key, val] = curr.split('=');
    return { ...acc, [key]: val };
  }, {});
  return obj;
};

export default getObjectFromQuery;
