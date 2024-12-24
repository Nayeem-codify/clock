function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12'; // the hour '0' should be '12'

    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = currentTime;
}

// Initial call to display the clock immediately
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);