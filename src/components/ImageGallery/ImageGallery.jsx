import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';

export class GallarySet extends Component {
  onCurrentCardClick = event => {
    if (event.currentTarget !== event.target) {
      const currentCard = this.props.images.filter(
        ({ webformatURL }) => webformatURL === event.target.currentSrc
      );
      const currentUrlForModal = currentCard[0].largeImageURL;
      this.props.onCardClick(currentUrlForModal);
      this.props.onOpenModal();
    }
  };

  render() {
    return (
      <ImageGallery onClick={this.onCurrentCardClick}>
        {this.props.images.map(({ id, webformatURL, tags }) => {
          return <ImageItem key={id} webformatURL={webformatURL} tags={tags} />;
        })}
      </ImageGallery>
    );
  }
}

GallarySet.prototypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
