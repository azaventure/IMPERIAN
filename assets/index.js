// this is really hacky sorry
function markCurrentLink() {
  const here = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (new URL(link.getAttribute("href"), location.href).pathname === here) {
      link.classList.add("is-current");
    }
  });
}



document.addEventListener("DOMContentLoaded", () => {
  document.body.dataset.page =
    location.pathname.split("/").filter(Boolean)[0] || "home";

  fetch("/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      markCurrentLink();
    });
  fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

