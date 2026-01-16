function toggleMenu(){
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("menuBtn");
  sidebar.classList.toggle("show");
  btn.innerHTML = sidebar.classList.contains("show") ? "✖" : "☰";
}

/* Hero slider */
const heroImages = ["x.jpeg","y.jpeg","z.jpeg"];
let h = 0;
setInterval(()=>{
  document.querySelector(".hero").style.backgroundImage = `url(${heroImages[h]})`;
  h = (h + 1) % heroImages.length;
},3000);

/* Gallery images */
const galleryImages = ["x.jpeg","y.jpeg","z.jpeg","A.jpeg","B.jpeg","C.jpeg"];
const galleryBox = document.getElementById("galleryBox");
galleryImages.forEach(src=>{
  const img = document.createElement("img");
  img.src = src;
  galleryBox.appendChild(img);
});
