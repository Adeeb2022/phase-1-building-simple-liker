const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        console.log(heart);
        heart.innerHTML = `<span class="activated-heart">${FULL_HEART}</span>`;
      } else {
        heart.innerHTML = `<span class="">${EMPTY_HEART}</span>`;
      }
    })
    .catch(error => {
      const modal = document.getElementById("modal");
      console.log(modal);
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => (modal.className = "hidden"), 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



// ------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
