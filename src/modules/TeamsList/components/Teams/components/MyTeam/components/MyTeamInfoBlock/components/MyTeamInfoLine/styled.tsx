import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';
import { TextBold } from 'typography';
import { ReactComponent as CopyIcon } from 'assets/svg/copy.svg';

type TInfoLineStyled = {
  blink: boolean;
};

export const InfoLineStyled = styled.div<TInfoLineStyled>`
  ${TextBold};
  color: ${WHITE_COLOR};
  display: flex;
  align-items: center;
  border-radius: 5px;

  .info__text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    animation: ${({ blink }) => (blink ? 'blink 1s' : 'none')};
    border-radius: 3px;
    padding: 0 7px;
    margin-left: -7px;
  }

  @keyframes blink {
    from {
      background: rgb(101, 80, 246, 0.5);
    }
    to {
      background: rgba(101, 80, 246, 0);
    }
  }
`;

export const CopyClipboardButton = styled(CopyIcon)`
  width: 16px;
  height: 16px;
  min-width: 16px;
  cursor: pointer;
  margin-left: 3px;
`;
