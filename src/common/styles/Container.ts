import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: black solid 1px;
  flex-wrap: wrap;

  @media  (max-width: 430px) {
    width: 100%;
  }
`


