import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';
import { MESSAGE_CIRCLE_SM, SHARE } from '../../../styles/CommonIcons';

export default function UserBtns() {
  return (
    <BtnsWrapper>
      <BtnSmall>
        <img src={MESSAGE_CIRCLE_SM} alt='채팅 시작하기 버튼' />
      </BtnSmall>
      {/* <UserButton>팔로우</UserButton> */}
      <Button whiteBtn>언팔로우</Button>
      <BtnSmall>
        <img src={SHARE} alt='공유하기 버튼' />
      </BtnSmall>
    </BtnsWrapper>
  );
}

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin: 0 75px;
`;

const BtnSmall = styled.button`
  width: 34px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--gray-300);

  img {
    width: 20px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    margin: 0 auto;
  }
`;