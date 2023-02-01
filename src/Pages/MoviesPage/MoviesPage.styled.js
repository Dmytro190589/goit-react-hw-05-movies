import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 5px;
padding: 0;
margin: 0;
margin-left: 10px;
padding-top: 20px;
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