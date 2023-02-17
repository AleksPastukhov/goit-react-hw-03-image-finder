import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';

export function GallarySet({ images }) {
  return (
    <ImageGallery>
      {images.map(({ id, webformatURL, tags }) => {
        return <ImageItem key={id} webformatURL={webformatURL} tags={tags} />;
      })}
    </ImageGallery>
  );
}

GallarySet.prototypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
