var zodiac = "Sagittarius";
var month = "November";
var birthday = 22;
var luckyNumber = 22.0;
var horoscopesDesc = "Sagittarius is adventurous, optimistic, and independent, always looking for new experiences and opportunities to learn. They are known for being honest, curious, and fun-loving, but sometimes they can be impatient or speak their minds a little too freely.";
var believe = false;
var moodRating = 8;
var partMoodRating1 = 8;
var partMoodRating2 = 8;
var avgMood = (moodRating + partMoodRating1 + partMoodRating2) / 3;
var zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

var zodiac = zodiacSigns[8];      
var partner1Sign = zodiacSigns[8];    
var partner2Sign = zodiacSigns[8]; 

var signHeading = document.getElementById('sign');
signHeading.textContent = zodiac;

var birthdayHeading = document.querySelector('.birthday');
birthdayHeading.textContent += month + " " + birthday + "nd";

var luckyHeading = document.querySelector('.luckyNum');
luckyHeading.textContent += luckyNumber;

var paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = horoscopesDesc;
paragraphs[1].innerHTML += "<strong>" + believe + "</strong>";

var moodParagraph = document.getElementById('mood');
moodParagraph.textContent =
  "Today's mood rating for " + zodiac + ": " + moodRating + " out of 10. " +
  "The average mood rating of me and my partners is: " + avgMood.toFixed(1) + ".";

var meParagraph = document.getElementById('me');
var partner1Paragraph = document.getElementById('partner1');
var partner2Paragraph = document.getElementById('partner2');

meParagraph.textContent = "My zodiac sign is: " + zodiac + ".";
partner1Paragraph.textContent = "Devin's zodiac sign is: " + partner1Sign + ".";
partner2Paragraph.textContent = "Mustaan's zodiac sign is: " + partner2Sign + ".";

var horoscopes = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
];


horoscopes[2] = "Drop your heavy worries and lean into success or an exciting distraction";

var myHoroscope = horoscopes[8];
var partner1Horoscope = horoscopes[8];
var partner2Horoscope = horoscopes[8]; 

meParagraph.textContent += " " + zodiac + " Horoscope: " + myHoroscope;
partner1Paragraph.textContent += " " + partner1Sign + " Horoscope: " + partner1Horoscope;
partner2Paragraph.textContent += " " + partner2Sign + " Horoscope: " + partner2Horoscope;