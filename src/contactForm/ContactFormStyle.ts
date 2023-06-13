import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  background-color: #9854e0;
`

export const ContactFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border: black solid 1px;
  flex-direction: column;
 
`

export const ContactFormMainTitle = styled.h2`
  background-color: #f3c3c3;
`

export const ContactFormTitle = styled.h2`
  margin:10px 0;
  padding-bottom:10px;
  width:180px;
  color:#78788c;
  border-bottom:3px solid #78788c;
  
`
export const ContactFormText = styled.h3`
  before{content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:14px;
    color:#5a5a5a}
`

export const Form = styled.form`
  width:340px;
  height:440px;
  background:#e6e6e6;
  border-radius:8px;
  box-shadow:0 0 40px -10px #000;
  margin:calc(50vh - 220px) 
  auto;padding:20px 30px;
  max-width:calc(100vw - 40px);
  box-sizing:border-box;
  font-family:'Montserrat',sans-serif;
  position:relative
;
`


export const Field = styled.input`
  width:100%;
  padding:10px;
  box-sizing:border-box;
  background:none;
  outline:none;
  resize:none;
  border:0;
  font-family:'Montserrat',sans-serif;
  transition:all .3s;
  border-bottom:2px solid #bebed2;
  &:focus{
    border-bottom:2px solid #78788c
  }
  
`

export const ButtonForm = styled.button`
  float:right;
  padding:8px 12px;
  margin:8px 0 0;
  font-family:'Montserrat',sans-serif;
  border:2px solid #78788c;
  background:0;
  color:#5a5a6e;
  cursor:pointer;
  transition:all .3s;
  &:hover{
    background:#78788c;
    color:#fff}
  
`