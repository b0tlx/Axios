document.querySelector('.fetch-data').addEventListener('click', function () {

  const options = {
    method: 'get',
    url: 'https://fakestoreapi.com/products'
  };


  axios(options).then(function (success) {
    let parent = document.querySelector('.container');

    let items = success.data;

    items.map(function (item) {
      // console.log(item);
      const sectionElement = document.createElement('section');
      sectionElement.setAttribute('class', 'card');

      const header = document.createElement('header');

      const headingTwo = document.createElement('h2');
      headingTwo.setAttribute('class', 'category');
      headingTwo.innerText = item.category;

      const headerParagraph = document.createElement('p');
      headerParagraph.setAttribute('class', 'description');
      headerParagraph.innerText = item.description;

      const figure = document.createElement('figure');

      const img = document.createElement('img');
      img.setAttribute('class', 'image');
      img.setAttribute('src', item.image);

      const figcaption = document.createElement('figcaption');

      const figcaptionHeading = document.createElement('h2');
      figcaptionHeading.setAttribute('class', 'title');
      figcaptionHeading.innerText = item.title;

      const span = document.createElement('span');
      span.setAttribute('class', 'rating');
      span.innerText = `${item.rating.rate} out of 5`;

      const priceParagraph = document.createElement('p');
      priceParagraph.setAttribute('class', 'price');
      priceParagraph.innerText = `$ ${item.price}`;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      figcaption.appendChild(figcaptionHeading);
      figcaption.appendChild(span);
      figcaption.appendChild(priceParagraph);
      sectionElement.appendChild(header);
      sectionElement.appendChild(figure);
      header.appendChild(headingTwo);
      header.appendChild(headerParagraph);
      parent.appendChild(sectionElement);
    });
  }).catch(function (error) {
    console.log(error);
  });
});