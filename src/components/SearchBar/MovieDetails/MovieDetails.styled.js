import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
padding: 20px;
padding-bottom: 0;
`

export const LinkBack = styled(Link)`
display: inline-block;
padding: 2px 7px;
text-decoration: none;
text-align: center;
border-radius: 5px;
color: #EAECFF;
font-size: 14px;
font-family: 'Abel', sans-serif;
background-color: #0A82F3;
width: 50px;
margin-bottom: 10px;
:hover, :focus{
    background-color: #29BFAB;
}
`
export const Div = styled.div`
display: flex;
gap: 15px;
`
export const Img = styled.img`
height: 400px;
width: 300px;
object-fit: cover;
border-radius: 5px;
transition: scale linear 300ms ;
:hover,:focus{
    scale: 1.04;
} 
`

export const H2 = styled.h2`
font-family: 'Abel', sans-serif;
color: #001F54;
`
export const P = styled.p`
font-family: 'Abel', sans-serif;
color: #1226A7;
`
export const B = styled.b`
font-family: 'Abel', sans-serif;
color: #561593;
`
export const DivAdd = styled.div`
padding: 20px 0;
:before , :after{
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #001F54;
  left: 0;
  position: absolute;
}
`
export const Ul = styled.ul`
display: flex;
gap: 10px;
list-style: none;
margin: 0;
padding: 0;
padding-bottom: 20px;
`

export const LinkAdd = styled(Link)`
font-family: 'Abel', sans-serif;
color: #561593;
text-decoration: none;
:hover,
:focus{
color: #12A3A3;
}
`