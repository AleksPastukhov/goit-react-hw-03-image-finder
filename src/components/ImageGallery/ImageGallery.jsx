import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import PixabayAPI from '../../services/pixabay-api';
import { LoadMoreBtn } from '../Button/Button';
import { RotatingLines } from 'react-loader-spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class GallarySet extends Component {
  state = {
    page: 1,
    status: Status.IDLE,
    error: null,
    imagesData: [],
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const pixabayAPI = new PixabayAPI();
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState(() => ({
        imagesData: [],
        page: 1,
        status: Status.PENDING,
      }));

      pixabayAPI
        .getImages(1, nextQuery)
        .then(imageSet => {
          this.setState({
            imagesData: imageSet.hits,
            page: this.state.page + 1,
            status: Status.RESOLVED,
            totalHits: imageSet.totalHits,
          });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
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

    this.setState(() => ({
      status: Status.PENDING,
    }));

    pixabayAPI
      .getImages(pageNumber, query)
      .then(imageSet => {
        this.setState({
          imagesData: [...this.state.imagesData, ...imageSet.hits],
          page: this.state.page + 1,
          status: Status.RESOLVED,
        });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  render() {
    const { status, imagesData, totalHits } = this.state;

    return (
      <>
        <ImageGallery onClick={this.onCurrentCardClick}>
          {imagesData.map(({ id, webformatURL, tags }) => {
            return (
              <ImageItem key={id} webformatURL={webformatURL} tags={tags} />
            );
          })}
        </ImageGallery>
        {!this.props.isBtnDisabled &&
          status !== 'pending' &&
          status !== 'idle' &&
          imagesData.length !== totalHits &&
          imagesData.length < totalHits && (
            <LoadMoreBtn
              isBtnDisabled={this.props.isBtnDisabled}
              onLoadMoreBtnClick={this.onLoadMoreBtnClick}
            />
          )}
        {status === 'pending' && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
      </>
    );
  }
}

GallarySet.prototypes = {
  onCardClick: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
};
