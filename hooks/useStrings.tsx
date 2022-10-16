export const useStrings = () => {
  const chString = (str: string) => {
    let count = 0;
    for (let i = 0; i < str.length; i++)
      count = str.charAt(i) === ' ' ? count + 1 : count;
    return str.length - count;
  };

  const toFirstUppercase = (str: string) => {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  };

  return { chString, toFirstUppercase };
};
