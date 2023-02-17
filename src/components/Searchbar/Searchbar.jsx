import { SearchBar, SearchForm } from './Searchbar.styled';
// import PropTypes from 'prop-types';

export function SearchQueryField() {
  return (
    <SearchBar>
      <SearchForm>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
}
