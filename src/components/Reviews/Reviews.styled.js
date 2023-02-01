import styled from 'styled-components';

export const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`

export const Li = styled.li`
:not(:first-child){
padding-top: 20px;    
}
font-weight: 600;
color: #561593;
font-family: 'Abel', sans-serif;
:after{
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #001F54;
  opacity: 0.1;
  left: 0;
  position: absolute;
}
`

export const Span = styled.span`
color: black;
font-size: 16px;
font-weight: 500;
`

export const P = styled.p`
font-family: 'Abel', sans-serif;
font-size: 16px;
color: blue;
margin: 0;
`