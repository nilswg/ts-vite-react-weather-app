import { setSearchInput, useDispatch } from '@/store';
import { setCityName } from '@/store';
import styled from 'styled-components/macro';

interface LocationItemProps {
  id: string;
  chName: string;
  enName: string;

  hiddenSearchResult: Function;
}

const LocationItem = (props: LocationItemProps) => {
  const { id, chName, enName, hiddenSearchResult } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    hiddenSearchResult();
    dispatch(setCityName(chName));
    dispatch(setSearchInput(chName));
  };

  return (
    <Location id={id} onClick={onClick}>
      <span>{`${id} - ${chName}`}</span>
      <span>{enName}</span>
    </Location>
  );
};

export default LocationItem;

const Location = styled.a`
  width: 9em;
  color: var(--resultItemColor);
  text-decoration: none;
  /* background-color: red; */
  padding: 0.6rem 0;
  border-bottom: 1px dotted var(--seperatorColor);
  cursor: pointer;

  & > span {
    width: 10rem;
    display: flex;
    justify-content: start;
  }
`;
