console.log("AstroVision is ready!");
alert("Welcome to AstroVision 🌟");
function showHoroscope(sign) {
  fetch(`https://corsproxy.io/?https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {

    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    const output = `
      <strong>${sign} - ${data.current_date}</strong><br>
      ${data.description}<br><br>
      Mood: ${data.mood}<br>
      Lucky Number: ${data.lucky_number}<br>
      Compatibility: ${data.compatibility}<br>
      Color: ${data.color}
    `;
    document.getElementById("horoscope-output").innerHTML = output;
  })
  .catch(error => {
    document.getElementById("horoscope-output").innerText = "Something went wrong. Please try again.";
    console.error("Error fetching horoscope:", error);
  });
}

document.getElementById("birth-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const date = document.getElementById("birth-date").value;
  const time = document.getElementById("birth-time").value;
  const place = document.getElementById("birth-place").value;

  document.getElementById("chart-result").innerText = 
    `Hi ${name}, your birth chart based on ${date} at ${time} in ${place} is being generated... (feature coming soon).`;
});
document.getElementById("compatibility-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const sign1 = document.getElementById("sign1").value;
  const sign2 = document.getElementById("sign2").value;

  const message = `${sign1} and ${sign2} have an interesting cosmic connection! 💫 Compatibility reading coming soon.`;
  document.getElementById("compatibility-result").innerText = message;
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  document.getElementById("contact-result").innerText = 
    `Thanks ${name}, your message has been received. We'll reach out to you at ${email} soon.`;
});
const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

let currentIndex = 0;

// Load the first sign initially
loadHoroscope(zodiacSigns[currentIndex]);

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + zodiacSigns.length) % zodiacSigns.length;
  loadHoroscope(zodiacSigns[currentIndex]);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % zodiacSigns.length;
  loadHoroscope(zodiacSigns[currentIndex]);
});

function loadHoroscope(sign) {
  // Update sign label
  document.getElementById("slider-sign-name").textContent = sign;

  // Set image (optional: later we can make it change based on sign)
  document.getElementById("horoscope-img").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zodiac_Wheel.svg/1024px-Zodiac_Wheel.svg.png";

  // Fetch horoscope using API with CORS proxy
  fetch(`https://corsproxy.io/?https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
    method: "POST"
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("horoscope-output").innerHTML = `
        <strong>${sign} - ${data.current_date}</strong><br>
        ${data.description}<br><br>
        Mood: ${data.mood}<br>
        Lucky Number: ${data.lucky_number}<br>
        Compatibility: ${data.compatibility}<br>
        Color: ${data.color}
      `;
    })
    .catch(error => {
      document.getElementById("horoscope-output").innerText = "Something went wrong. Please try again.";
      console.error("Error fetching horoscope:", error);
    });
}
