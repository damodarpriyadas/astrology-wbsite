console.log("AstroVision is ready!");
alert("Welcome to AstroVision 🌟");
function showHoroscope(sign) {
  const messages = {
    Aries: "Today is a great day to start something new, Aries!",
    Taurus: "Focus on stability and comfort today, Taurus.",
    Gemini: "Communication is your superpower today, Gemini.",
    Cancer: "Spend quality time with loved ones, Cancer.",
    Leo: "You’re glowing with confidence today, Leo!",
    Virgo: "Perfect day to organize and plan, Virgo.",
    Libra: "Seek balance and harmony, Libra.",
    Scorpio: "Trust your intuition today, Scorpio.",
    Sagittarius: "Adventure awaits you, Sagittarius!",
    Capricorn: "Work hard and rewards will follow, Capricorn.",
    Aquarius: "Think outside the box today, Aquarius.",
    Pisces: "Creativity flows through you, Pisces."
  };

  const message = messages[sign] || "No horoscope found.";
  document.getElementById("horoscope-output").innerText = `${sign}: ${message}`;
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
