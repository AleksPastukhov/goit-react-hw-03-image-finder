import React, { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import { Layout } from '../Layout/Layout';
import { GallarySet } from '../ImageGallery/ImageGallery';
import { ModalWindow } from '../Modal/Modal';
// import PropTypes from 'prop-types';
// import { Wrapper } from './App.styled';

const imagesData = [
  {
    id: 736877,
    tags: 'tree, cat, silhouette',
    webformatURL:
      'https://pixabay.com/get/ge5e7b28236e957c7ef5c369da64ebc3b595a6c2dcbdfed28941500355ad6649f683acb927ed2aed8251a5297c52efecf_640.jpg',
    largeImageURL:
      'https://pixabay.com/get/gb8152233baeeea8f24a7260a9726c2f8fd793a7e1cc711141be1038630c55e8f93135261d39dea016f3a9841e6614b5c74b99719790c436d3e67b305bf736dfa_1280.jpg',
  },
  {
    id: 2083492,
    tags: 'cat, young animal, kitten',
    webformatURL:
      'https://pixabay.com/get/gdffbb27de8cea0052407f0090c0ef4679549dc7d7e4f949f3b9fef6e084c579b52c5a16f58d10161cd5920cc7d93611a90ad5d7475731d95edc7f4e2c9de725e_640.jpg',
    largeImageURL:
      'https://pixabay.com/get/gafa9b134e81bf5f3de6038d5b3483f8c60eff9638b48233f89c356520064af25d4803f6efa0b8da812f98d2807f9abef21f9f5ca5a528e42d1757f5f79c51cf4_1280.jpg',
  },
  {
    id: 3012515,
    tags: 'lion, roar, africa',
    webformatURL:
      'https://pixabay.com/get/g84dcdd31de4749f03244601b744b81f5cf248306bb5e43eb5c234338f4676523fd4654ffc29007276ee672269b42975ce8957f162a3d799d5037a968ec38d02e_640.jpg',
    largeImageURL:
      'https://pixabay.com/get/ga0fb050075baa38626fe6fcd458c65340ebe75530445ce7f4c74593d08e595a6c52bd669dd97aa821759b2dd0ae947bdd52d711cbc551935fa3df72420d44862_1280.jpg',
  },
];

export class App extends Component {
  state = {
    showModal: false,
    imageURL: '',
    searchQuery: '',
  };
  onSabmit = query => {
    if (query) {
      this.setState(() => ({
        searchQuery: query,
      }));
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onCardClick = url => {
    if (url) {
      this.setState(() => ({
        imageURL: url,
      }));
    }
  };

  render() {
    const { showModal } = this.state;

    return (
      <Layout onSabmit={this.onSabmit}>
        <GallarySet
          images={imagesData}
          onCardClick={this.onCardClick}
          onOpenModal={this.toggleModal}
        />
        {showModal && (
          <ModalWindow onCloseModal={this.toggleModal}>
            {<img src={this.state.imageURL} alt={imagesData[0].tags} />}
          </ModalWindow>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// const KEY = '32681971-7c4dedd5870704d3ef280ea2e';

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
