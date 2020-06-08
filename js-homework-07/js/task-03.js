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

const createGallery = image => {
   const itemRef = document.createElement('li');
   itemRef.textContent = `Image: ${image.alt}`;
   itemRef.classList.add('gallery-images__item');

   const imgRef = document.createElement('img');
   imgRef.classList.add('gallery-images__img');
   imgRef.setAttribute('src', image.url);
   imgRef.setAttribute('alt', image.alt);
   itemRef.append(imgRef);

   return itemRef;
};

const variable = images.map(image => createGallery(image));

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery-images');
galleryRef.append(...variable);
console.log(galleryRef);
