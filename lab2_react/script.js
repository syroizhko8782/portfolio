document.addEventListener("DOMContentLoaded", () => {
const systemInfo = {
userAgent: navigator.userAgent, 
platform: navigator.platform || (navigator.userAgentData ?   
navigator.userAgentData.platform : "Невідомо"),
language: navigator.language,
cookieEnabled: navigator.cookieEnabled,
screenWidth: window.screen.width,
screenHeight: window.screen.height
};

localStorage.setItem("systemInfo", JSON.stringify(systemInfo));
const displayContainer = document.getElementById("local-storage-display");

if (displayContainer) {
let htmlContent = "<h3>Дані, збережені у localStorage:</h3><ul>";

for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
let value = localStorage.getItem(key);

try {
const parsedValue = JSON.parse(value);
if (typeof parsedValue === 'object' && parsedValue !== null) {
let innerHtml = "<ul>";
for (const [prop, val] of Object.entries(parsedValue)) {
innerHtml += `<li><strong>${prop}:</strong> ${val}</li>`;
}
innerHtml += "</ul>";
value = innerHtml; 
}
} catch (error) {
value = `<span style="color: red;">Помилка парсингу JSON:${error.message}</span>`;
}
if (typeof value === 'string' && value.startsWith("<ul>")) {
htmlContent += `<li><strong>Ключ: ${key}</strong>${value}</li>`;
} else {
htmlContent += `<li><strong>Ключ: ${key}</strong> - Значення: ${value}</li>`;
}
}

htmlContent += "</ul>";      
displayContainer.innerHTML = htmlContent;
}
});
