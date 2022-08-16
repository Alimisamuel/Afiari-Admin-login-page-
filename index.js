
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const inpFile = document.getElementById('inpFile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview__image');
const previewText = previewContainer.querySelector('.image-preview__text');

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

inpFile.addEventListener('change', function() {
 const file = this.files[0];
  
 if (file) {
     const reader = new FileReader();

    previewImage.style.display = "block";
    previewText.style.display = "none";

    reader.addEventListener('load', function(){
        previewImage.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
 }
 else {
    previewImage.style.display = "null";
    previewText.style.display = "null";
    previewImage.setAttribute('src', '');
 }
});




// Rough Me
// let me = "This is a pretty"
// let age = 54

// const preview = function myPreview(name){
//   // console.log("Hello World")
// let total = me += age;
// console.log(total)
// } 

// preview();

// const sumNew = area =>  50 + area;

// const total = sumNew(5)

// const bill = (products, tax) => {
// let total = 0; 
// for (let i = 0; i < products.length; i++)
// {total += products[i] + products[i] + tax;}
// return total;
// } 












// const newRender = bill([5,10,39], 0.2)
// console.log(newRender)