const issueDateFormat = (createdAt) => {
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day =
    date.getDate() + 1 <= 10 ? `0${date.getDate() + 1}` : date.getDate() + 1;

  return `${year}년 ${month}월 ${day}일`;
};

export default issueDateFormat;
