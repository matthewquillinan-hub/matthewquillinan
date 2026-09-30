const links=document.querySelectorAll('a[href^="#"]');
links.forEach(link=>link.addEventListener('click',()=>document.activeElement?.blur()));


// PROFESSIONAL RECOMMENDATIONS ROLODEX

const rolodex = document.querySelector(
  ".recommendations-rolodex"
);

if (rolodex) {
  const track = rolodex.querySelector(".rolodex-track");
  const cards = track.querySelectorAll(".recommendation-card");
  const prev = document.getElementById("rolodex-prev");
  const next = document.getElementById("rolodex-next");
  const counter = document.getElementById("rolodex-counter");

  let currentIndex = 0;

  function updateRolodex() {
    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;

    counter.textContent =
      `${currentIndex + 1} / ${cards.length}`;
  }

  prev.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + cards.length) % cards.length;

    updateRolodex();
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;

    updateRolodex();
  });

  updateRolodex();
}

