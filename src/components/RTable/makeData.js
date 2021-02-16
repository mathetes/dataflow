const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const myjson = {
  myvalue: "Слово",
  mysubject: "Быт.1,1-24",
  perpose: "Исследовать библейское богословие текста",
  task: "Доработать статью",
  progress: "В процессе",
  issue: "Как?",
  variant: "best",
};

const dataList = () => {
  const statusChance = Math.random();
  return {
    myvalue: myjson.myvalue,
    mysubject: myjson.mysubject,
    perpose: myjson.perpose,
    task: myjson.task,
    progress: myjson.progress,
    issue: myjson.issue,
    variant: myjson.variant,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...dataList(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
