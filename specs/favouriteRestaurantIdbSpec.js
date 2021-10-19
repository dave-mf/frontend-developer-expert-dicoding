/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favouriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
