3️⃣ script.js

const btn = document.getElementById("analyzeBtn");

btn.addEventListener("click", analyze);

function analyze(){

const url = document.getElementById("urlInput").value.trim();

if(url === ""){
alert("Please enter a product URL");
return;
}

let score = 50;

if(url.includes(".com")) score += 10;
if(url.includes("shop")) score += 10;
if(url.includes("course")) score += 10;
if(url.includes("ebook")) score += 10;
if(url.includes("digital")) score += 10;

if(score > 100){
score = 100;
}

document.getElementById("score").innerText =
score + "/100";

document.getElementById("trust").innerText =
score >= 80 ? "High" :
score >= 60 ? "Medium" :
"Low";

document.getElementById("marketing").innerText =
score >= 80 ? "Strong" :
"Needs Improvement";

document.getElementById("audience").innerText =
"Creators & Digital Sellers";

document.getElementById("tips").innerText =
`
✓ Add testimonials
✓ Improve headline clarity
✓ Show product benefits
✓ Add call-to-action
✓ Include creator success stories
`;

document.getElementById("caption").innerText =
`🚀 Ready to grow faster?

Discover powerful digital tools designed for creators.

Start today and build your online business with confidence.

#DigitalProducts #ContentCreator #OnlineBusiness`;

document.getElementById("email").innerText =
`Subject: Transform Your Digital Product Sales

Hi there,

We analyzed your product and found several opportunities to increase conversions and improve engagement.

Focus on stronger benefits, social proof, and clearer calls to action.

Best regards,
Digital Product Checker Pro`;

document.getElementById("copy").innerText =
`Turn your knowledge into income.

Our digital solutions help creators launch faster, market smarter, and grow their audience with confidence.

Get started today and build a business that works for you.`;
}
