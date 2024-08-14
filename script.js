

document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {
      "id": "1",
      "image": "./watch-1.png",
      "title": "Exquisite Watches",
      "subtitle": "Gold Luxury,",
    
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$499.00",
      "backgroundColor": "linear-gradient(to right,#edae77, #edd5c0)"
    },
    {
      "id": "2",
      "image": "./watch-2.png",
      "title": "Dainty Timepieces",
       "subtitle": "Silver luxury, ",
     
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$469.00",
      "backgroundColor": "linear-gradient(to right,#b8b6b4, #e0dedc)"
    },
    {
      "id": "3",
      "image": "./watch-3.png",
      "title": "Elegant Timepieces",
        "subtitle": "Chooses Luxury, ",
      
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$529.00",
      "backgroundColor": "linear-gradient(to right,#4ff07f, #95e8ad)"
    },
    {
      "id": "4",
      "image": "./watch-4.png",
      "title": "Refined Timepieces",
       "subtitle": "Choose Luxury, ",
     
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$599.00",
      "backgroundColor": "linear-gradient(to right,#f78172, #f79e92)"
    }
  ];

  const splideList = document.getElementById('splide-list');
  const body = document.getElementById('body');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  
  const description = document.getElementById('description');
  const price = document.getElementById('price');

  data.forEach((item) => {
    const slide = document.createElement('li');
    slide.classList.add('splide__slide');

    slide.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="mx-auto">
    `;

    splideList.appendChild(slide);
  });

  // Initialize Splide.js
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    pagination: false,
  }).mount();

  // Set initial content
  function setContent(index) {
    const selectedItem = data[index];
    title.textContent = selectedItem.title;
    subtitle.textContent = selectedItem.subtitle;
    description.textContent = selectedItem.description;
    price.textContent = selectedItem.price;
    body.style.backgroundImage = selectedItem.backgroundColor;
  }

  // Set initial content based on the first slide
  setContent(0);

  // Update content when the slide changes
  splide.on('moved', (newIndex) => {
    setContent(newIndex);
  });
});
