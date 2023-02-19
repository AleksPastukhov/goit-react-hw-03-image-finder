import axios from 'axios';

export default class fetchGalleryImages {
  #BASE_URL = 'https://pixabay.com/api/';

  #KEY = '32681971-7c4dedd5870704d3ef280ea2e';

  getUrl() {
    return `${this.#BASE_URL}`;
  }

  async getImages(page = 1, userSearchQuery) {
    try {
      const options = {
        params: {
          q: userSearchQuery,
          page: page,
          key: this.#KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      };

      const response = await axios.get(this.getUrl(), options);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
