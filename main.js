// --- Functions and steps ----
// 1- Main Function  contain a {fetch data , if condition to see if there a data to day}
// 2- create a Filter data Function to get to day exercise
// 3- Calling The Main Function

// --- Parent -----
const parent = document.querySelector(".content");
// ------ Main Function ----
const MainFunction = async () => {
  // ---- Fetch Data ----
  const response = await fetch("workoutData.json");
  let data = await response.json();
  let todayData = filterData(data.schedule);
  // ------- condition to see if there a data to day ---
  if (todayData[0]) {
    // ----- Creae Headers By Day -----
    let dayHeader = document.createElement("h2");
    dayHeader.textContent = todayData[0].day + " - " + todayData[0].focus;
    //  ------ Create List ------
    let list = document.createElement("ul");
    let items = todayData[0].exercises
      .map(
        (exercise, index) =>
          `<li>${index + 1} - ${exercise.ar} - ${exercise.name} </li>`
      )
      .join("");
    list.innerHTML = items;
    // ---- Append Parts ---
    parent.append(dayHeader);
    parent.append(list);
  } else {
    const restDayMessage = {
      ar: "اليوم راحة ",
      en: "Rest day ",
      emo: "💤",
    };
    let { ar, en, emo } = restDayMessage;
    const message = ar + en + emo;
    const p = document.createElement("p");
    p.textContent = message;
    parent.append(p);
  }
};

// ---- Function To Return Daily excercises ----
const filterData = (data) => {
  let date = new Date().getDay();
  const dataFilterd = data.filter((item) => item.dayNum === 2);
  return dataFilterd;
};

//  --- Calling The Main Function ----
MainFunction();
