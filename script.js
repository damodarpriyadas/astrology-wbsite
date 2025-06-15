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
