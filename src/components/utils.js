import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const words = () => {
  return {
    Word: namor.generate({ words: 1, numbers: 0 }),
    Occurance: Math.floor(Math.random() * 45)
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...words(),
      children: range(10).map(words)
    };
  });
}

