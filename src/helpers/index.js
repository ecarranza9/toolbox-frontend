export const formattedData = (data) => {
  let newArr = [];
  const newData = data.forEach(item => {
    item.lines.forEach(line => {
      newArr.push({
        ...line,
        file: item.file
      });
    });
  })
  return newArr;
};