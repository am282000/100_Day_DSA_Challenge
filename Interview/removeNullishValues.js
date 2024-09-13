// INPUT
const input = {
  name: "Ashish",
  age: "18",
  time: "",
  moreInfo: {
    address: "",
    nickname: "-",
  },
  extras: {
    acadmic: "",
    nickname: "N/A",
    school: "ABC",
  },
  moreCases: [1, "3", "-", "N/A", ""],
};

//OUTPUT

/***
const res = {
    name: "Ashish",
    age: "18",
   
    extras: {
      school: "ABC",
    },
    moreCases: [1, "3"],
  };
  
 ***/

const nullishValues = ["", "-", "N/A"];
function removeEmptyValues(response) {
  for (let key in response) {
    let value = response[key];

    if (nullishValues.includes(value)) {
      delete response[key];
    } else if (Array.isArray(value)) {
      response[key] = value.filter((p) => !nullishValues.includes(p));
    } else if (typeof value === "object") {
      const res = removeEmptyValues(value);
      const isObjectEmpty = Object.keys(res).length === 0;
      if (isObjectEmpty) {
        delete response[key];
      }
    }
  }
  return response;
}

console.log(removeEmptyValues(input));
