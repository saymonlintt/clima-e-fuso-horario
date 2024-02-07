function updateClock() {
    const timezone = document.getElementById("timezone-select").value;
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    const clock = document.getElementById("clock");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  
  const timezoneSelect = document.getElementById("timezone-select");
  timezoneSelect.addEventListener("change", updateClock);  
