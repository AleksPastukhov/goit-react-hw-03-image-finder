import React, { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import { GallarySet } from '../ImageGallery/ImageGallery';
import { ModalWindow } from '../Modal/Modal';
import { SearchQueryField } from '../Searchbar/Searchbar';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    showModal: false,
    buttonDisabled: true,
    imageURL: '',
    tags: '',
    searchQuery: '',
  };

  isBtnDisabled = bul => {
    this.setState(() => ({
      buttonDisabled: bul,
    }));
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

  onCardClick = (url, tags) => {
    if (url) {
      this.setState(() => ({
        imageURL: url,
      }));
    }
    if (tags) {
      this.setState(() => ({
        tags,
      }));
    }
  };

  render() {
    const { showModal } = this.state;

    return (
      <Wrapper>
        <SearchQueryField
          onSabmit={this.onSabmit}
          searchQuery={this.state.searchQuery}
          isBtnDisabled={this.isBtnDisabled}
        />
        <GallarySet
          onCardClick={this.onCardClick}
          onOpenModal={this.toggleModal}
          searchQuery={this.state.searchQuery}
          isBtnDisabled={this.state.buttonDisabled}
        />
        {showModal && (
          <ModalWindow onCloseModal={this.toggleModal}>
            {<img src={this.state.imageURL} alt={this.state.tags} />}
          </ModalWindow>
        )}

        <GlobalStyle />
      </Wrapper>
    );
  }
}
