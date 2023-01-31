import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components/macro';
import {
  selectSearchInput,
  selectSearchResultVisible,
  setSearchInput,
  setSearchResultVisible,
  useDispatch,
  useSelector,
} from '@/store';
import useDebounce from '@/hooks/useDebounce';
import SearchResults from './SearchResults';

const Search = () => {
  const searchInput = useSelector(selectSearchInput);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!ref?.current) return;
    ref.current.value = searchInput;
  }, [ref, searchInput]);

  const searchResultVisible = useSelector(selectSearchResultVisible);
  const dispatch = useDispatch();

  const hiddenSearchResult = useCallback(
    () => dispatch(setSearchResultVisible(false)),
    [dispatch, setSearchResultVisible]
  );

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
    dispatch(setSearchResultVisible(true));
  };
  const onInputChangedDebounced = useDebounce(handleInputValue, 250, []);

  useEffect(() => {
    dispatch(setSearchResultVisible(searchResultVisible));
  }, [dispatch, searchInput, setSearchResultVisible]);

  return (
    <SearchContainer>
      <SearchContext>
        <SearchBar>
          <input
            ref={ref}
            type="text"
            placeholder="Type Location (๑•̀ㅂ•́)و✧"
            onChange={onInputChangedDebounced}
          />
        </SearchBar>

        {searchResultVisible && (
          <SearchResults
            searchInput={searchInput}
            hiddenSearchResult={hiddenSearchResult}
          />
        )}
      </SearchContext>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  --searchBgColor: ${({ theme }) => theme.search.bgColor};
  --searchInputColor: ${({ theme }) => theme.search.input.color};
  --searchInputPlaceHolderColor: ${({ theme }) =>
    theme.search.input.placeHolderColor};
  --resultBgColor: ${({ theme }) => theme.search.result.bgColor};
  --resultItemColor: ${({ theme }) => theme.search.result.item.color};
  --resultItemHoverBgColor: ${({ theme }) =>
    theme.search.result.item.hoverBgColor};
  --seperatorColor: ${({ theme }) => theme.search.result.seperator.color};
`;
const SearchContext = styled.div`
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  & > input {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.25rem;
    border-radius: 2rem;
    border: none;
    outline: none;
    background-color: var(--searchBgColor);
    color: var(--searchInputColor);
  }

  & > input::placeholder {
    color: var(--searchInputPlaceHolderColor);
  }
`;
