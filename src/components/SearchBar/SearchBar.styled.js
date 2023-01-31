import styled from 'styled-components';

export const Form = styled.form`
display: flex;
gap: 20px;
`

export const Input = styled.input`
width: 200px;
border: 1px #001F54 solid;
outline: none;
border-radius: 5px;
background-color: #EAECFF;
padding: 5px;
font-family: 'Abel', sans-serif;
:focus{
    border-color: #0DA2A2;
}
`

export const Button = styled.button`
width: 150px;
padding: 5px;
cursor: pointer;
background-color: #0A82F3;
border: 1px #001F54 solid ;
border-radius: 5px;
color: #EAECFF;
font-size: 16px;
font-family: 'Abel', sans-serif;
:hover, :focus{
    background-color: #29BFAB;
}
`