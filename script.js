// ==========================
// MindMate AI - Script.js
// ==========================

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active-link");
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Chatbot toggle popup
function openChat() {
  let chatBox = document.getElementById("chatBox");
  if (!chatBox) {
    chatBox = document.createElement("div");
    chatBox.id = "chatBox";
    chatBox.innerHTML = `
      <div style="background:#4a90e2;color:#fff;padding:10px;border-radius:8px 8px 0 0;">
        <strong>MindMate AI Chatbot</strong>
        <button onclick="closeChat()" style="float:right;background:red;color:white;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;">X</button>
      </div>
      <div id="chatContent" style="height:200px;overflow-y:auto;padding:10px;background:#f9f9f9;"></div>
      <input id="chatInput" type="text" placeholder="Type a message..." style="width:80%;padding:5px;">
      <button onclick="sendMessage()" style="padding:6px 10px;background:#4a90e2;color:#fff;border:none;border-radius:4px;cursor:pointer;">Send</button>
    `;
    chatBox.style.position = "fixed";
    chatBox.style.bottom = "20px";
    chatBox.style.right = "20px";
    chatBox.style.width = "300px";
    chatBox.style.border = "1px solid #ccc";
    chatBox.style.borderRadius = "8px";
    chatBox.style.background = "#fff";
    chatBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    document.body.appendChild(chatBox);
  }
}

function closeChat() {
  const chatBox = document.getElementById("chatBox");
  if (chatBox) chatBox.remove();
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatContent = document.getElementById("chatContent");
  if (input.value.trim() !== "") {
    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + input.value;
    userMsg.style.margin = "5px 0";
    chatContent.appendChild(userMsg);

    // Simple AI reply (placeholder)
    const botMsg = document.createElement("div");
    botMsg.textContent = "MindMate AI: I'm here to support you. Try a deep breath exercise.";
    botMsg.style.margin = "5px 0";
    botMsg.style.color = "green";
    chatContent.appendChild(botMsg);

    chatContent.scrollTop = chatContent.scrollHeight;
    input.value = "";
  }
}

// Mood tracking (localStorage)
function saveMood(mood) {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("mood-" + today, mood);
  alert("Mood for today saved: " + mood);
}

function checkMood() {
  const today = new Date().toISOString().split("T")[0];
  const mood = localStorage.getItem("mood-" + today);
  if (mood) {
    alert("Your mood today: " + mood);
  } else {
    alert("No mood saved today yet.");
  }
}

// FAQ toggle
document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
