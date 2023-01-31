import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
padding: 10px;
padding-bottom: 0;
`

export const H1 = styled.h1`
margin-bottom: 15px;
font-family: 'Abel', sans-serif;
color: #001F54;
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 5px;
padding: 0;
margin: 0;
`

export const Li = styled.li`
font-family: 'Abel', sans-serif;
`

export const LinkModal = styled(Link)`
font-size: 18px;
text-decoration: none;
color:#034078;
:hover,
:focus{
    color: #0DA2A2;
}
`