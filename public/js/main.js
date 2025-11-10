const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Function to get current time
function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Function to add a message bubble
function addMessage(text, type) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);

  msgDiv.innerHTML = `
    <div>${text}</div>
    <div class="timestamp">${getTime()}</div>
  `;

  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // auto scroll
}

// Send message
sendBtn.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (msg !== "") {
    addMessage(msg, "sent");
    messageInput.value = "";

    // Simulate reply after 1 sec
    setTimeout(() => {
      addMessage("Got it 👍", "received");
    }, 1000);
  }
});

// Send message on Enter key
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
