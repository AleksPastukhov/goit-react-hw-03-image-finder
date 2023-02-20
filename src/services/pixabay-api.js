import axios from 'axios';

export default class fetchGalleryImages {
  #BASE_URL = 'https://pixabay.com/api/';

  #KEY = '32681971-7c4dedd5870704d3ef280ea2e';

  async getImages(page, userRequestValue) {
    try {
      const response = await axios.get(
        `${this.#BASE_URL}?q=${userRequestValue}&page=${page}&key=${
          this.#KEY
        }&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
