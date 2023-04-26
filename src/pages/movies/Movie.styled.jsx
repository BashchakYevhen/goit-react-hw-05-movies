import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1450px;
  }
`;
export const Box = styled.div`
  margin-top: 107px;
  @media screen and (min-width: 1400px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1400px;
    height: 100%;
    margin: 107px auto 0;
    padding: 20px;
  }
`;
export const SearchForm = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: #00000059;
`;
export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  border-bottom: 2px solid #00000059;
  border-top: 2px solid #00000059;
`;
export const SearchButton = styled.button`
  border: none;
  border-bottom: 2px solid #00000059;
  border-top: 2px solid #00000059;
  &:hover {
    cursor: pointer;
  }
`;
