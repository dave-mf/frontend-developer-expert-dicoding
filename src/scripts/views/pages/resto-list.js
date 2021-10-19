/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
    <div class="hero">
        <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
            <img 
                src='./images/hero-image_4-large.jpg' 
                alt="Restaurant Poster Image"></img>
        </picture>
        <div class="hero_text">
            <h1 class="hero__title">Find Your Near Restaurants</h1>
            <p class="hero__tagline">Search trough the best restaurants near you.</p>
        </div>
    </div>
    
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div id="resto" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await RestoSource.restoList();
    console.log(resto);
    const restosContainer = document.querySelector('#resto');
    resto.forEach((restaurants) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default RestoList;
