import styled from "styled-components";


export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid;
  padding: 10px;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 250px) {
    width: 100%;
    div {
      grid-auto-columns: 1fr;
      display: grid;
      grid-column-gap: 5vw;
      grid-row-gap: 5vw;
      background-color: #ebece6;
      border: 1px solid #1d1d15;
      grid-template-rows: auto;
      grid-template-columns: 300px 1fr;
      align-items: center;
      margin-bottom: 60px;
      padding: 21px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-attachment: scroll !important;

  img {
    width: 100%;
    max-width: 100%;
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
      filter: brightness(0.7);
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
    font-size: 13px;
    font-weight: 600;
    &:hover {
      filter: brightness(0.7);
    } 
  }
  
    p {
      margin-top: 0;
      margin-bottom: 10px;
      width: 100%;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

`


// export const j = styled.div<ProjectIconsType>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 200px;
//   width: 100%;
//   background-image: url(${props => props.backgroundImage});
//   background-color: #9e9ea2;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: 50%;
//
//   &:hover {
//     filter: brightness(0.7);
//   }
//
//   a {
//     background-color: #666667;
//     padding: 15px 25px;
//     cursor: pointer;
//     opacity: 0.7;
//     &:hover {
//       filter: brightness(0.7);
//     }
//     &:active {
//       filter: brightness(1);
//     }
//   }
// `

//
// export const ProjectDescription = styled.span`
//   background-color: rgba(255, 151, 151, 0.75);
//   width: 100%;
//   padding-bottom: 10px;
// `

export const SubTitle = styled.h3`

  &:hover {
    filter: brightness(0.7);
  }
`