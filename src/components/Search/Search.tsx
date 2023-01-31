import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from '@/store';
import useDebounce from '@/hooks/useDebounce';
import Locations from './Locations';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const dispatch = useDispatch();

  const hiddenSearchResult = useCallback(
    () => setSearchResultVisible(false),
    [setSearchResultVisible]
  );

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const onInputChangedDebounced = useDebounce(handleInputValue, 250, []);

  useEffect(() => {
    if (!searchInput) {
      return;
    }
    setSearchResultVisible(true);
  }, [dispatch, searchInput]);

  return (
    <SearchContainer>
      <div className="search">
        <div className="search inputvalue">
          <input
            type="text"
            className="search bar"
            placeholder="Type your location (๑•̀ㅂ•́)و✧ "
            onChange={onInputChangedDebounced}
          />
        </div>
        <div className="search result">
          {searchResultVisible && (
            <Locations
              searchInput={searchInput}
              hiddenSearchResult={hiddenSearchResult}
            />
          )}
        </div>
      </div>
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
