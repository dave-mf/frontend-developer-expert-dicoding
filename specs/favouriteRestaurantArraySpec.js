/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favouriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar Restoran Favorit
    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteResto(id) {
    // cara boross hapus restoran dengan copy restaurant yang ada
    // kecuali restaurant dengan id === id
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
