import { ImageGalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export function ImageItem({ id, webformatURL, tags }) {
  return (
    <ImageGalleryItem>
      <img src={webformatURL} alt={tags} />
    </ImageGalleryItem>
  );
}

ImageItem.prototypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
