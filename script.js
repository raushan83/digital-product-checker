const btn = document.getElementById("analyzeBtn");

btn.addEventListener("click", function () {

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

if(score > 100) score = 100;

document.getElementById("score").innerText = score + "/100";

document.getElementById("trust").innerText =
score >= 80 ? "High" :
score >= 60 ? "Medium" : "Low";

document.getElementById("marketing").innerText =
score >= 80 ? "Strong" : "Needs Improvement";

document.getElementById("audience").innerText =
"Creators & Digital Sellers";

document.getElementById("tips").innerText =
"Add testimonials, improve headline clarity, show product benefits, add call-to-action.";

document.getElementById("caption").innerText =
"Ready to grow faster? Discover powerful digital tools for creators.";

document.getElementById("email").innerText =
"Subject: Transform Your Digital Product Sales";

document.getElementById("copy").innerText =
"Turn your knowledge into income with digital products.";
});
