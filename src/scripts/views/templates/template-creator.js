/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="movie__title" id="resto__title">${restaurant.name}</h2>
  <img class="movie__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((category) => category.name).join(', ')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((category) => category.name).join(', ')}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="movie__overview">
    <h3>Review Pelanggan</h3>
  </div>

  <div class="movie-item">
    <div class="movie-item__content">
      ${restaurant.customerReviews.map((review) => (
    `<br>
            <h3>${review.name}</h3>
            <h5 class="city">${review.date}</h5>
            <p>${review.review}</p>
            <br>
            <hr>
            `
  )).join('')}
    </div>
  </div>

  </div>
</div>
`;

const createRestoItemTemplate = (restaurants) => `

  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster lazyload" alt="${restaurants.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <div class="movie-item__header__rating">
            <p><span class="star">⭐️</span><span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3 class="resto__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <h5 class="city">${restaurants.city}</h5>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
