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
    .then((data) => console.log(data))
    .catch(err => console.log(err));
};
loadCatariose();
