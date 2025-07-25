import styled from 'styled-components';

export const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $theme }) =>
    $theme === '_orange'
      ? '#ffe4c2'
      : $theme === '_green'
      ? '#b4fdd1'
      : $theme === '_purple'
      ? '#e9d4ff'
      : 'transparent'};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const SCardTitle = styled.p`
  color: ${({ $color }) =>
    $color === '_orange'
      ? '#ff6d00'
      : $color === '_green'
      ? '#06b16e'
      : $color === '_purple'
      ? '#9a48f1'
      : '#000'};
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const SCardTitles = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
