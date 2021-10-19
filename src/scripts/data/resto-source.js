/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import API_ENDPOINT from '../globals/api-endpoint';
import RestoList from '../views/pages/resto-list';

class RestoSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTO);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }

  // static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurant;
  }
}

export default RestoSource;
