const form = document.getElementById("messageForm");
const messagesList = document.getElementById("messagesList");

// Replace with your deployed API endpoints
const POST_URL = "https://aqpklbxra9.execute-api.ap-southeast-2.amazonaws.com/send";
const GET_URL = "https://aqpklbxra9.execute-api.ap-southeast-2.amazonaws.com/messages";

// Submit new message
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("title").value;
  const message = document.getElementById("message").value;

  await fetch(POST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  });

  form.reset();
  loadMessages();
});

// Load existing messages
async function loadMessages() {
  messagesList.innerHTML = "<li>Loading...</li>";
  const res = await fetch(GET_URL);
  const messages = await res.json();

  messagesList.innerHTML = "";
  messages.forEach(msg => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${msg.name}</strong>: ${msg.message} <br/><small>${new Date(msg.timestamp).toLocaleString()}</small>`;
    messagesList.appendChild(li);
  });
}

loadMessages();
