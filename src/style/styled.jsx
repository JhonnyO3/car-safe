import React from "react";
import styled from "styled-components";


export const DivMain = styled.div`
position: absolute;
width: 100%;

`
export const DivCards = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
width: 100%;
background-color: #F0F0F0;
position: relative;
top: 100vh;
padding-top: 150px;
font-size: 30px;
border-radius: 30px;
padding-bottom: 150px;

margin-bottom: 90px;
img{
  width: 700px;
  padding-right: 200px;
  border-radius: 50%;
  padding-top: 30px;
}
.cards {
  margin-left: 150px;
  display: flex;
}
.cards div {
  width: 100%;
}
p{
  margin-top: 20px;
  width: 75%;
  font-size: 40px;
}
`
export const DivAbout = styled.div`
width: 85%;
margin-left: 150px;
position: absolute;
top: 69vh;
text-align: center;
font-family: sans-serif;
color: #3e3c3c;
justify-content: center;

h1{
  color: #243782;
  font-size: 40px;
}
p{
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-size: 30px;
}



`


export const DivBanner = styled.div`
display: inline-block;
position: relative;
width: 100%;
.banner{
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 40px;
    

}
img{
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
}
.texto{
    position: relative;
    top: 45vh;
    font-family:  sans-serif;
    color: white;
    margin-left: 7vh;
}

`


export const DivHeader = styled.header`
   font-family : sans-serif;
   padding: 1vh;
   font-size: 1.5rem;
   background-color: #F0F0F0 ;
   color: #243782;
   display: flex;
   justify-content: space-between;
   list-style: none;
   span{
      color: #FFF915;
   }
    ul{
      display: flex;
      
    }
    li {
      position: relative;
      display: inline;
      margin: 10px 20px 0 15px;
    button {
      color: white;
      background-color: #243782;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 2px;
      font-size: 25px;
      border-radius: 5px;
   }
   button:hover{
    background-color: #a0a4b5;


   }
     
      
    }
  
     a {
      color: #243782;
      display: flex;
      justify-content: space-aroud;
      font-size: 25px;
      text-decoration: none;
      padding-top: 25px;
    }
    a:hover{
        color: #a0a4b5;


    }
    .login {
      color: black;
      background-color: #FFF915;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
    } 
    img{
        justify-content: space-between;
        width: 25%;
        
    }
    h1{
        font-family: sans-serif;
        font-weight: 550;
        letter-spacing: 5px;
        margin-left: 5vh;
        
    }
    .logo img{
        width: 75%;
        padding-top: 10px;
        margin-left: 3vh;
    }
    @media screen and (min-width: 375px){
      .logo img{
        width: 300px;
      }
      img {
        width: 300px;
      }
      
    }

`

