export const getDate = ({ ms }) => {
  const dateObject = new Date(ms);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();

  return `${year}년 ${month}월 ${date}일`;
};
