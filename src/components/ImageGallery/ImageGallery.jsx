import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import PixabayAPI from '../../services/pixabay-api';

export class GallarySet extends Component {
  state = {
    page: 1,
    imagesData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const pixabayAPI = new PixabayAPI();
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    if (prevQuery !== nextQuery) {
      this.setState(() => ({
        page: 1,
      }));
      pixabayAPI
        .getImages(1, nextQuery)
        .then(imageSet =>
          this.setState({
            imagesData: imageSet.hits,
            page: this.state.page + 1,
          })
        )
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

  onLoadMoreBtnClick = () => {
    const query = this.props.searchQuery;
    const pageNumber = this.state.page;
    const pixabayAPI = new PixabayAPI();

    pixabayAPI
      .getImages(pageNumber, query)
      .then(imageSet =>
        this.setState({
          imagesData: [...this.state.imagesData, ...imageSet.hits],
          page: this.state.page + 1,
        })
      )
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <ImageGallery onClick={this.onCurrentCardClick}>
          {this.state.imagesData.map(({ id, webformatURL, tags }) => {
            return (
              <ImageItem key={id} webformatURL={webformatURL} tags={tags} />
            );
          })}
        </ImageGallery>
        <button
          type="button"
          disabled={this.props.isBtnDisabled}
          onClick={this.onLoadMoreBtnClick}
        >
          Load more
        </button>
      </>
    );
  }
}

GallarySet.prototypes = {
  onCardClick: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
