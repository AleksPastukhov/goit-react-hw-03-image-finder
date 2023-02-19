import axios from 'axios';

export default class fetchGalleryImages {
  #BASE_URL = 'https://pixabay.com/api/';

  #KEY = '32681971-7c4dedd5870704d3ef280ea2e';

  // constructor(page, userRequestValue) {
  //   this.page = page;
  //   this.userRequestValue = userRequestValue;
  // }

  // getUrl() {
  //   return ;
  // }

  async getImages(page, userRequestValue) {
    try {
      // const options = {
      //   params: {
      //     q: this.userRequestValue,
      //     page: this.page,
      //     key: this.#KEY,
      //     image_type: 'photo',
      //     orientation: 'horizontal',
      //     per_page: 12,
      //   },
      // };

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

  // resetPage() {
  //   this.page = 1;
  // }

  // get pageNumber() {
  //   return this.page;
  // }

  // set pageNumber(newPageNumber) {
  //   this.page = newPageNumber;
  // }

  // get request() {
  //   return this.userRequestValue;
  // }

  // set request(newUserRequest) {
  //   this.userRequestValue = newUserRequest;
  // }
}
