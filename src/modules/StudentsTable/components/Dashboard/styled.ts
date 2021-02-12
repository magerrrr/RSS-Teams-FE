import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 92%;
  max-width: 1320px;
  height: calc(100vh - 111px);
  margin: 0 auto;
  padding: 10px;
  padding-right: 0;
  font-size: 1rem;
  background-color: ${WHITE_COLOR};
  border-radius: 20px;
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    font-size: 0.825rem;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    font-size: 0.8rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    font-size: 0.68rem;
  }
`;
