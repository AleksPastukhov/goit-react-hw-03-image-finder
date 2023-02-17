import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout/Layout';
// import { Wrapper } from './App.styled';

class App extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// const KEY = '32681971-7c4dedd5870704d3ef280ea2e';
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
