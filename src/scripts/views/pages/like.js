/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran Favoritmu</h2>
        <div id="resto-list" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#resto-list');
    restos.forEach((restaurants) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default Like;
