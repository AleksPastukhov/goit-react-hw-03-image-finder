import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import PixabayAPI from '../../services/pixabay-api';

export class GallarySet extends Component {
  state = {
    imagesData: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const pixabayAPI = new PixabayAPI();
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const page = this.props.page;

    if (prevQuery !== nextQuery) {
      pixabayAPI
        .getImages(page, nextQuery)
        .then(imageSet => this.setState({ imagesData: imageSet.hits }))
        .catch(error => console.log(error));
    }
  }

  onCurrentCardClick = event => {
    if (event.currentTarget !== event.target) {
      const currentCard = this.state.imagesData.filter(
        ({ webformatURL }) => webformatURL === event.target.currentSrc
      );
      const currentUrlForModal = currentCard[0].largeImageURL;
      const currentTags = currentCard[0].tags;
      this.props.onCardClick(currentUrlForModal, currentTags);
      this.props.onOpenModal();
    }
  };

  render() {
    return (
      <ImageGallery onClick={this.onCurrentCardClick}>
        {this.state.imagesData.map(({ id, webformatURL, tags }) => {
          return <ImageItem key={id} webformatURL={webformatURL} tags={tags} />;
        })}
      </ImageGallery>
    );
  }
}

GallarySet.prototypes = {
  onCardClick: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

// images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
