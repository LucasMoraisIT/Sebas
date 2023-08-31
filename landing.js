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
    
let aliqex = document.querySelector("#aliqex")
let aliqin = document.querySelector("#aliqin")
let vnota = document.querySelector("#vnota")
function difal(){
    let dif = ((((100-Number(aliqex.value))/100)/((100-Number(aliqin.value))/100)*100)-100)
    let vnres = Number(vnota.value)+((Number(vnota.value)/100)*dif)
    let res=document.querySelector("#res") 
    res.innerHTML=`A diferença de aliquota é de ${dif.toFixed(3)}%. E o valor real da nota é R$${vnres.toFixed(2)} `
}