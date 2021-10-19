/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage('/#/like');

  // mengklik card restaurant yg ada di fav
  I.click(likedRestoTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('#resto__title');

  const unLikeRestaurant = await I.grabTextFrom('#resto__title');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(unLikeRestaurant, likedRestoTitle);
});
