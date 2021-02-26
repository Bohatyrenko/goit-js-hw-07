const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesListEl = document.querySelector('#gallery');
console.log(imagesListEl);

const itemImageEl = images.map(image => {
    const itemImageListEl = document.createElement('img');
    const imageItemEl = document.createElement('li');
    itemImageListEl.src = image.url;
    itemImageListEl.alt = image.alt;
    imageItemEl.append(itemImageListEl);
    itemImageListEl.classList.add('image-item');
    itemImageListEl.width = 500;
 
    return imageItemEl;
});

imagesListEl.append(...itemImageEl);
const imageStyle = document.querySelector('.image-item');

// console.log(imagesListEl);