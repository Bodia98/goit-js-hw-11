import axios from "axios";
export default class ApiByName {
  constructor() {
    this.searchQuery = '';
    this.page = '';
  }

  searchByName() {
    const API_KEY = '33900139-104be3d494e6b16d60b600e5d';
    const BASE_URL = 'https://pixabay.com/api/';
    // const axios = require('axios');
    return axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
      )
      .then(function (r) {
        return r.data;
      });
  }
}
