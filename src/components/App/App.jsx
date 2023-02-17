// import React, { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import { Layout } from '../Layout/Layout';
import { GallarySet } from '../ImageGallery/ImageGallery';
// import PropTypes from 'prop-types';
// import { Wrapper } from './App.styled';

const imagesData = [
  {
    id: 736877,
    tags: 'tree, cat, silhouette',
    webformatURL:
      'https://pixabay.com/get/ge33fab3673fe4e3b74029e03983334ac9f6112d68b559b610f9728e51869daa7b33d3f0610c852224af6de334270c098_640.jpg',
  },
  {
    id: 2083492,
    tags: 'cat, young animal, kitten',
    webformatURL:
      'https://pixabay.com/get/gdeb3a166e8992a201938b422c90383a9adf6907894ea583d95f12719873d7c8c7474df3e017137522458a0c6e034514c5a80077c05d9fd35245e54e472c27f7c_640.jpg',
  },
  {
    id: 3012515,
    tags: 'lion, roar, africa',
    webformatURL:
      'https://pixabay.com/get/ga85d96bd131157b1eb07571ae7e3a32f18ba589df40ccd0f600a348571e3e63aa979c5c47c29173ca0592350d814455eab6ea212b7a34ef9e9dc4ed851ca5d4f_640.jpg',
  },
];

export function App() {
  return (
    <Layout>
      <GallarySet images={imagesData} />
      <GlobalStyle />
    </Layout>
  );
}

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// const KEY = '32681971-7c4dedd5870704d3ef280ea2e';
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
