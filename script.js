document.addEventListener("DOMContentLoaded", function () {
    let wordCount = prompt("Nechta so'z bo'lishi kerak?");
    let fontSize = prompt("Matnning o'lchamini kiriting (px)?");
    let wordColor = prompt("So'zlarning rangini kiriting (masalan, red, #ff0000)?");
    let backgroundColor = prompt("Orqa fon rangini kiriting (masalan, #f3f4f6)?");

    if (wordCount && fontSize && wordColor && backgroundColor) {
        // Lorem so'zlarini yaratish
        const lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
        const words = lorem.slice(0, wordCount).join(" ");

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.height = "100vh";
        container.style.backgroundColor = backgroundColor;

        const message = document.createElement("div");
        message.textContent = words;
        message.style.fontSize = `${fontSize}px`;
        message.style.fontWeight = "bold";
        message.style.color = wordColor;
        message.style.marginTop = "20px";

        container.appendChild(message);
        document.body.prepend(container);
    }
});
