import styled from "styled-components";
import { primaryTransparentColor} from "../common/styles/variables"

export const HeaderContainer = styled.div`
  height: 80px;
  background-color: ${primaryTransparentColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2000;
  position: fixed;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
`
