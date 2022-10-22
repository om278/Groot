const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Jarvii";
      texts.appendChild(p);
    }


     if (
      text.includes("play a song") ||
      text.includes("play a song")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "how is your mood sir...";
      texts.appendChild(p);
    }
      if (text.includes("sad")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "playing Arjit singh's song";
      texts.appendChild(p);
      console.log("playing Arjit singh's song");
      window.open("https://youtu.be/_51KXfwcPMs");
    }
     if (text.includes("happy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "playing party song";
      texts.appendChild(p);
      console.log("playing party song");
      window.open("https://youtu.be/bzW9fmwcmG4");
    }
     if (text.includes("romantic")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "playing romantic song";
      texts.appendChild(p);
      console.log("playing romantic song");
      window.open("https://youtu.be/NK5cxNJz1Uo");
    }
    if (
      text.includes("who is your boss") ||
      text.includes("who is your boss")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "OM SHENDE";
       console.log("My Boss");
      window.open("https://api.Whatsapp.com/send?phone=919359086635");
      texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube boss";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
    }
    if (text.includes("open Instagram")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Instagram Boss";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.Instagram.com");
    }
     if (text.includes("open Facebook")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening Facebook Boss";
      texts.appendChild(p);
      console.log("Opening Facebook");
      window.open("https://www.facebook.com");
    }
    if (text.includes("open email")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening email";
      texts.appendChild(p);
      console.log("opening email");
      window.open("https://mail.google.com");
    }
if (text.includes("open WhatsApp")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening WhatsApp";
      texts.appendChild(p);
      console.log("opening WhatsApp");
      window.open("https://wa.me");
    }
    if (text.includes("open LinkedIn")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening LinkedIn";
      texts.appendChild(p);
      console.log("opening LinkedIn");
      window.open("https://linkedin.com");
    }
    if (text.includes("what's the time")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "showing a time.....";
      texts.appendChild(p);
      console.log("showing a time.....");
      window.open("https://www.google.com/search?q=time&oq=time+&aqs=chrome..69i57j69i60l2j0i131i433i512l6j0i512.2495j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8");
    }
     if (text.includes("today's weather")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "showing.....";
      texts.appendChild(p);
      console.log("showing.....");
      window.open("https://www.google.com/search?q=todays+whether&oq=todays+whether+&aqs=chrome..69i57j0i10i433i457j0i402l2j0i10j0i10i433j0i10l3.17156j1j9&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8");
    }




	 if (text.includes('what is') || text.includes('who is') || text.includes('what are') || text.includes(' ')) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "showing.....";
      texts.appendChild(p);
      console.log("showing.....");
      window.open(`https://www.google.com/search?q=${text.replace(" ", "+")}`, "_blank");
    }


if (text.includes('calculator') || text.includes('open calculator')) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "showing.....";
      texts.appendChild(p);
      console.log("showing.....");
      window.open("https://www.calculator.com/");
    }




    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

