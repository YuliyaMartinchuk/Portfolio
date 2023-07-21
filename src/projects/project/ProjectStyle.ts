import styled from "styled-components";

export const projectStyle = {
    gridColumnGap: "5vw",
    gridRowGap: "5vw",
    backgroundColor: "#ebece6",
    border: "1px solid #1d1d15",
    gridTemplateColumns: "300px 1fr",
    marginBottom: "60px",
    padding: "21px",
    display: "grid",
    '@media screen and (max-width: 1200px)': {
        gridTemplateColumns: "1fr",
        marginBottom: "40px",
    }
}

export const ProjectContainer = styled.div`
  background-color: #ebece6;
  border: 1px solid #1d1d15;
  padding: 21px;
 
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 1px solid #1d1d15;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    background-color: #9e9ea2;

    &:hover {
      filter: brightness(0.7);
    }
  }

  a {
    background-color: #666667;
    padding: 15px 25px;
    cursor: pointer;
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      opacity: 1;
      background-color:   rgba(30, 30, 147, 0.89);
    }

    &:active {
      filter: brightness(1);
    }

  }

`


export const DescriptionContainer = styled.div`
  grid-row-gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;

  h3 {
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 600;
  
    &:hover {
      color:   rgba(30, 30, 147);
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
    width: 100%;

  }

`

