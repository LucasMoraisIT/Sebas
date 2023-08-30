const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

    menuButton.addEventListener("mouseenter", () => {
        sidebar.classList.add("active");
    });
    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("active");
    });

document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const sendMessage = document.getElementById("sendMessage");
    const messageInput = document.getElementById("messageInput");
    const chatMessages = document.getElementById("chatMessages");
    
    chatButton.addEventListener("click", function () {
        chatBox.style.display = "block";
        });
    
    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
    
    sendMessage.addEventListener("click", function () {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    });
});
    
