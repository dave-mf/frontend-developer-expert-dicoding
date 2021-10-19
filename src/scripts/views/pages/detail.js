/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="review" class="reviews"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#movie');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
