
async function loadWorkoutData() {
  const response = await fetch('workoutData.json');
  const data = await response.json();

  const table = document.getElementById('workout-table');
  data.schedule.forEach(day => {
    const row = document.createElement('tr');

    const dayCell = document.createElement('td');
    dayCell.textContent = day.day;
    row.appendChild(dayCell);

    const focusCell = document.createElement('td');
    focusCell.textContent = day.focus;
    row.appendChild(focusCell);

    const exercisesCell = document.createElement('td');
    const list = document.createElement('ul');
    day.exercises.forEach(ex => {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${ex.name}</strong> - ${ex.ar}`;
      list.appendChild(item);
    });
    exercisesCell.appendChild(list);
    row.appendChild(exercisesCell);

    table.appendChild(row);
  });
}

window.onload = loadWorkoutData;
