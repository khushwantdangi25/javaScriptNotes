 const button = document.getElementById("devBtn");
        const message = document.getElementById("message");

        button.addEventListener("click", function () {
            message.textContent = "🚀 Welcome! I build responsive and interactive websites using HTML, CSS, JavaScript, React, and Java.";
            button.textContent = "✅ Thanks for Visiting!";
            button.style.backgroundColor = "green";
        });