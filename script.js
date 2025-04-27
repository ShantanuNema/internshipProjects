const plannerDiv = document.getElementById('planner');
const hours = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// Load saved tasks from localStorage
function loadPlanner() {
  plannerDiv.innerHTML = '';
  hours.forEach((hour, index) => {
    const savedTask = localStorage.getItem(`task-${index}`) || '';
    const timeBlock = document.createElement('div');
    timeBlock.className = 'time-block';
    timeBlock.innerHTML = `
      <label>${hour}</label>
      <input type="text" id="task-${index}" value="${savedTask}" placeholder="Enter task..." />
      <button class="save-btn" onclick="saveTask(${index})">Save</button>
    `;
    plannerDiv.appendChild(timeBlock);
  });
}

function saveTask(index) {
  const input = document.getElementById(`task-${index}`);
  localStorage.setItem(`task-${index}`, input.value);
  alert('Task saved!');
}

function clearPlanner() {
  localStorage.clear();
  loadPlanner();
  alert('All tasks cleared!');
}

window.onload = loadPlanner;
