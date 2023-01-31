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
      <Content>
        <span>{`${id} - ${chName}`}</span>
        <span>{enName}</span>
      </Content>
    </Location>
  );
};

export default LocationItem;

const Location = styled.a`
  width: 100%;
  border-bottom: 1px dotted var(--seperatorColor);
  color: var(--resultItemColor);
  text-decoration: none;
  padding: 0.6rem 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 9rem;
  & > span {
    display: flex;
    justify-content: start;
  }
`;
