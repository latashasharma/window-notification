document.getElementById('notifyBtn').addEventListener('click', () => {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        showNotification();
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification();
            }
        });
    }
});

function showNotification() {
    const options = {
        body: "This is a notification message",
        icon: "icon.png" // Path to an icon image if you want to display one
    };
    new Notification("Hello, World", options);
}
