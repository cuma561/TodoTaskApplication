export const getSubheading = (number, name) => {
  switch (true) {
    case number > 4:
      return `${number} ${name}`;
    case number > 1:
      return `${number} ${name}`;
    case number === 1:
      return `1 ${name}`;
    case number === 0:
    default:
      return `No ${name}`;
  }
};
