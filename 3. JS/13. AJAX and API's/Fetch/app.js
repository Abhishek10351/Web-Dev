fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/4/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/10/");
    const data2 = await res2.json();
    console.log(data2);
    // get anakin data
    const res3 = await fetch("https://swapi.dev/api/people/11/");
    const data3 = await res3.json();
    console.log(data3);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
