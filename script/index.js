// My Pricktise use
// const loadAysn = () => {
//   try {
//     fetch("https://news-api-fs.vercel.app/api/categories")
//       .then((res) => res.json())
//       .then((data) => loadCataroeyDisplay(data));
//   } catch (error) {
//     console.log(error);
//   }
// };

const cataoryUL = document.getElementById("cointanerCaritory");
const newscointnar = document.getElementById("newscointnar");
// Nav Api Call
const loadCatariose = () => {
  fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
      let dates = data.categories;
      loadCataroeyDisplay(dates);
    })
    .catch((err) => console.log(err));
};

// .categories
const loadCataroeyDisplay =  (data) => {
  data.forEach((element) => {
    let creat = document.createElement("li");
    creat.innerHTML = `
       <li id="${element.id}" class="hover:border-b-3  hover:border-red-600 border-red-600 cursor-pointer ">${element.title}</li>
        `;
    cataoryUL.append(creat);
  });


  // Add EventLisenar
  cataoryUL.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("border-b-4");
    });

    if (e.target.localName === "li") {
        e.target.classList.add("border-b-4");
        loadNewsPat(e.target.id);
    }
  });
};

const loadNewsPat = (id) => {
  fetch(`https://news-api-fs.vercel.app/api/categories/${id}
`)
    .then((res) => res.json())
    .then((data) =>showArtical(data.articles))

    .catch(err => console.log(err));
};

const showArtical= (artical) =>{
  console.log(artical);
   newscointnar.innerHTML = ""
  artical.forEach(element => {
    newscointnar.innerHTML += `
     <div class="border-1 border-gray-200  rounded-b-md">
     <div class="flex">
       <img src="${element.image.srcset[5].url}" >
     </div>
      <div class="px-3 py-4">
      <h1 class="mt-2 font-bold">${element.title}</h1>
      <p class="text-[14px] mt-1">${element.time}</p>
      <button class="btn">BookMark</button>
      </div>
     </div>
    `
   
  })
}
loadCatariose();
loadNewsPat('main')
