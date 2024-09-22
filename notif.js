

// document.getElementById("andazTXT").innerHTML = andazebi[Math.floor(Math.random() * 32)]
// const rand = andazebi[Math.floor(Math.random() * 32)]

function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    // var notification = new Notification(rand);
    
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        // const notification = new Notification("შენ გააქტიურე შეტყობინებები!");
        // …
      }
    });
  }}