export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

export const getTopicColor = (topic) => {
    if (topic === "Web Design") {
        return "_orange";
    } else if (topic === "Research") {
        return "_green";
    } else if (topic === "Copywriting") {
        return "_purple";
    } else {return "_gray"}
  }