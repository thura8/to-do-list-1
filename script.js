const taskInput = document.querySelector("#tasksInput"),
  clearAll = document.querySelector(".clear-btn"),
  taskLists = document.querySelector(".tasklists");

//Accepting value and appending in tasklists and display
//Enabling clearAll button and overflow-y
taskInput.addEventListener("keyup", function (event) {
  let listItem = document.createElement("li");
  if (event.key == "Enter" && taskInput.value != "") {
    listItem.innerHTML = `${taskInput.value}
    <i></i>`;
    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    taskLists.appendChild(listItem);
    this.value = "";

    //Adding active class
    taskLists.getElementsByTagName("li").length > 0
      ? document.querySelector(".clear-btn").classList.add("active")
      : document.querySelector(".clear-btn").classList.remove("active");

    //Adding and enabling clear all button
    taskLists.offsetHeight >= 330
      ? taskLists.classList.add("overflow")
      : taskLists.classList.remove("overflow");

    //clear a single task

    listItem.querySelector("i").addEventListener("click", function () {
      listItem.remove();

      if (taskLists.innerHTML == "") {
        document.querySelector(".clear-btn").classList.remove("active");
      }
    });

    //clear all tasks
    document.getElementById("clear").addEventListener("click", function () {
      taskLists.innerHTML = "";
      this.classList.remove("active");
    });
  } else if (event.key == "Enter" && taskInput.value === "") {
    // listItem.innerHTML = `<p>No new tasks here</p>`;
    // taskLists.appendChild(listItem);
    alert("Please enter a valid task");
    // this.value = "";
  }
});
function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  //convert to 12 hour format
  hour = hour % 12;
  hour = hour ? hour : 12;

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("clock").innerText =
    hour + ":" + minute + ":" + second + " " + ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();
