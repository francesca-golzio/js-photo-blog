/* is this working? */
console.log('🍏');


/* Collect datas */
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
const rowEl = document.querySelector('row');


/* AJAX call to API */

fetch(endpoint)
  .then(res => res.json())
  .then(photos => {
    //console.log(photos);

    /* Cycling inside the array */
    photos.forEach((photo) => {
      
      /* Destructuring object */
      const {id, title, date, url} = photo;
      console.log(id, title, date, url);
      
      /* Defining markdown */  // 🤔 da spostare fuori?
      const titleUp = title.toUpperCase();
      const markdown = `
      <div class="photo col d-flex flex-column justify-content-center">
        <img src="${url}" alt="${title}" id="${id}">
        <span id="dataPhoto">
          ${date}
        </span>
        <h2 id="titoloPhoto">
          ${titleUp}
        </h2>
      </div>
      `;
      console.log(markdown);
      
      
    });
    
  })


    /* Printing object datas in page */

