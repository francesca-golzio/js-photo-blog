/* is this working? */
console.log('🍏');


/* Collect datas */
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
const photoFrameEl = document.querySelector('.photoFrame');
//photoFrameEl.innerHTML = 'ciao';
//console.log(photoFrameEl.innerHTML);


/* AJAX call to API */

fetch(endpoint)
  .then(res => res.json())
  .then(photos => {
    //console.log(photos);

    /* Cycling inside the array */
    for (const photo of photos) {
      
      /* Destructuring object */
      const {id, title, date, url} = photo;
      //console.log(id, title, date, url);
      
      /* Defining markup */  // 🤔 da spostare fuori?
      const titleUp = title.toUpperCase();
      const markup = `
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
      console.log(markup);
      
      /* Printing object datas in page */      
      photoFrameEl.insertAdjacentHTML("beforeend", markup);      
      
    };
    
  })
