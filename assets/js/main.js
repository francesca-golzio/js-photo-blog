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
      const photosEl = document.querySelectorAll("div.photo");
      const overlayPrewiewEl = document.getElementById("overlayPrewiew");
      //console.log(overlayPrewiewEl);

      /* Destructuring object */
      const { id, title, date, url } = photo;
      //console.log(id, title, date, url);

      /* Defining markup */ 
      const titleUp = title.toUpperCase();
      const markup = `
      <div class="photo col col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3">
        <img src="./assets/img/pin.svg" class="pin">
        <div class="container">
          <div class="row row-col-1">
            <img src="${url}" alt="${title}" id="${id}" class="img photoImg col">
            <p id="dataPhoto" class="">
            ${date}
            </p>
            <h2 id="titoloPhoto" class="col">
            ${titleUp}
            </h2>
          </div>
        </div>
      </div>
      `;
      //console.log(markup);

      /* Printing object datas in page */
      photoFrameEl.insertAdjacentHTML("beforeend", markup);

      /*  L’overlay ricompare cliccando una qualunque foto */
      for (const photo of photosEl) {
        photo.addEventListener('click', function () {
          overlayPrewiewEl.classList.remove('d-none');
        })

      }

    /* L’overlay scompare nuovamente al click del button */
    const escButton = document.getElementById("closeOverlayPreview");
    escButton.addEventListener('click', function () {
      overlayPrewiewEl.classList.add('d-none');
    })  

    }; 
    
    



  })
