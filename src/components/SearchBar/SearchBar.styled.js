import styled from 'styled-components';

export const Form = styled.form`
display: flex;
gap: 20px;
margin-top: 10px;
margin-left: 10px;
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
    border-color: orangered;
}
`

export const Button = styled.button`
width: 150px;
padding: 5px;
cursor: pointer;
background-color: gray;
border: 1px #001F54 solid ;
border-radius: 5px;
color: #EAECFF;
font-size: 16px;
font-family: 'Abel', sans-serif;
:hover, :focus{
    background-color:orangered;
}
`