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
      p.innerText = "My Name is Badshaha";
      texts.appendChild(p);
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
    if (text.includes("open email")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening email";
      texts.appendChild(p);
      console.log("opening youtube");
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
    
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

