import InfoCounty from '@/data/countries';
import LocationItem from './LocationItem';
import { useMemo } from 'react';
import { CountryProps } from '@/types';
import styled from 'styled-components/macro';
type Props = {
  searchInput?: string;
  hiddenSearchResult: Function;
};
const SearchResults = ({ searchInput = '', hiddenSearchResult }: Props) => {
  if (!searchInput) return <></>;
  const results = useMemo(
    () =>
      InfoCounty.filter(
        ({ ID, Area, TID, Name: { C, E } }) =>
          ID.includes(searchInput) ||
          Area.includes(searchInput) ||
          TID.includes(searchInput) ||
          C.includes(searchInput) ||
          E.includes(searchInput)
      ),
    [searchInput]
  );

  return (
    <SearchResultList>
      {results.map((props: CountryProps, i) => {
        return (
          <LocationItem
            key={`location_${props.TID}`}
            id={props.TID}
            enName={props.Name.E}
            chName={props.Name.C}
            hiddenSearchResult={hiddenSearchResult}
          />
        );
      })}
    </SearchResultList>
  );
};
export default SearchResults;

const SearchResultList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
  border-radius: 5px;
  background-color: var(--resultBgColor);
`;
