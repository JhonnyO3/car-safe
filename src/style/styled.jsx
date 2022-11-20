import styled from "styled-components";


export const DivLogin = styled.div`

*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: sans-serif;

}

.input-group{
display: flex;
flex-direction: column;

justify-content: space-between;
padding: 1rem 0;
}
.input-box{
display: flex;
width: 50vh;
flex-direction: column;
margin-bottom: 1.1rem;

}
.input-box input { 
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
width: 75vh;
box-shadow: 1px 1px 6px #00001c;
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
}
.input-box select{
width: 20vh;
box-shadow: 1px 1px 6px #00001c;
margin: 0.6rem;
padding: 0.8rem 1.2rem;
border: none;
border-radius: 10px;
}

.input-box input:hover{
background-color: #eeeeee75;
}


.container {
width: 100%;
height: 100vh;
display: flex;
box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #ffffff;
height: 100%;
}
.form-image img {
width: 137.8vh;
height: 100%;
}
.form {
  color: white;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #181818;
padding: 4rem;

}
.title {
margin-bottom: 3rem;
display: flex;
justify-content: space-around;
}

button{
border: #ffffff;
width: 100%;
background-color: #3d3d3d;
color: white;
font-size: 25px;
padding: 10px;
border-radius: 20px;
box-shadow: 5px 5px 10px #2a2a2a55 ;
font-weight: bold;
}
button:hover{
  background-color: rgb(17, 48, 118);


}

`


export const DivCam = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-left: 200px;
flex-direction: column;
font-family: sans-serif;
padding-bottom: 200px;

.title{
  position: relative;
  top: 50px;
  p{
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
}

h1{
  font-weight: bold;
  color: #6F84D2;
  font-size: 35px;

}


.webcam{
  display: flex;
  margin-top: 10vh;


}




`

export const DivPlano = styled.div`
margin: 0;
padding: 0;
font-family: sans-serif;

.titulo {
  font-size: 30px;
  margin-left: 25%;
  margin-top: 30px;
  background-color: #243882;
  width: 70%;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  padding: 5px;

}
.painel{
  background-color: #222222;
  box-shadow: 3px 3px 10px black;
  border-radius: 10px;
  margin-left: 25%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 60%;
 

}
.planos{
  width: 50%;
  padding: 50px;
  color: white;
  background-color: #243882;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px black;

  margin-bottom: 30px;
  border-radius: 20px;
  width: 85%;
}
.planos h1{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: space-around;
}
`

export const DivControle = styled.div`
.container .title {
  display: flex;
}
.container .title h1{
  display: flex;
  font-family: sans-serif;

}

`
export const DivPlanilha = styled.div`
font-family: sans-serif;
font-size: 25px;

justify-content: center;
margin-top: 100px;
margin-bottom: 100px;
display: flex;

.editar   {
 margin-left: 20px;
  
  
}
a {
  margin: 15px;
  
}
.icone:hover{
  color: #243882;
}

table{
  padding-left: 27%;

}

th{
  padding: 20px;
  background-color: #243882;
  color: white;
  font-size: 35px;
  font-weight: bold;
}
td{
  width: 120;
  text-align: center;
  height: 10px;
  padding: 20px;
}
tfoot{
  background-color: #243882;
  color: white;
  font-size: 35px;
  font-weight: bold;

  
}
`

export const DivMenuLateral = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
  width: 100%;
}
.subMenu{
  display: flex;
  background-color: #0a0a0a;
  box-shadow: 2px 6px 6px 3px #0a0a0a;
  padding: 100px;
  
  position: fixed;
  justify-content: center;
  
  height: 100%;
  width: 10%;
  top: 0;

  ul{
  width: 100%;
  margin-bottom: 400px;

 

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  padding-right: 120px;
}
li {
  font-size: 30px;
  width: 100%;
  margin-top: 5vh;
  




}
li:hover {
  a{
    color:#3e5197;
    font-weight: bold;
  }
}
a{
  color: white;
}

.title {
  text-align: left;
  width: 400px;
  font-weight: bold;
  color: #6f84d2;
  font-size: 30px;

  
}

  
}

`
export const DivAreaUsuario = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}

span{
  color: #5471db;
  font-size: 50px;
  font-weight: bold;
}


.center {
  margin: 3%;
  background-color: #222222;
  box-shadow: 2px 6px 6px 0px #000000;
  border-radius: 10px;
  height: 100%;
  margin-left: 25%;
  position: absolute;
  padding-bottom: 67vh;
  width: 70%;
}
.secao-principal {

  padding: 30px;
  font-size: 30px;
  h1{
    width: 100%;
    color: white;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    font-size: 50px;
    background-color: #181818;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    

    span{
      font-size: 70px;
      font-weight: bold;
      color: #5471db;
    }
    
  }

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #181818;
  padding: 20px;
  
  height: 137vh;

  p{
    color: white;
    padding: 7px;
    margin-top: 20px;
    font-size: 25px;
  }
  
}
p{
  font-size: 30px;
  color: black;
 
}

img{
  display: flex;
  left: 100vh;
  top: 124vh;
  width: 49%;
  position: absolute;
  
}

iframe{
  margin-left: 10vh;
  margin-top: 10vh;
  border-radius: 30px;
}



`

export const DivInfoPessoal = styled.div`
display: flex;
*{
  color: white;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}
span{
  color: #5471db;
  font-size: 50px;
  font-weight: bold;
}


.center {
  margin: 3%;
  background-color: #222222;
  box-shadow: 2px 6px 6px 0px #000000;
  border-color: #243882;
  border-radius: 10px;
  height: 100%;
  margin-left: 25%;
  position: absolute;
  padding-bottom: 50px;
  width: 70%;
}
.secao-principal {
  padding: 30px;
  font-size: 30px;
  h1{
    width: 100%;
    color: white;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    font-size: 50px;
    background-color: #181818;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    

    span{
      font-size: 70px;
      font-weight: bold;
      color: #5471db;
    }
    
  }

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #181818;
  padding: 20px;
  height: 67vh;

  p{
    color: white;
    padding: 7px;
    font-size: 45px;
  }
  
}
p{
  font-size: 30px;
  color: black;
 
}

img{
  display: flex;
  left: 111vh;
  top: 59%;
  width: 44%;
  position: absolute;
  
}



`




export const DivPrincipal = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}
.subMenu{
  display: flex;
  background-color: #dedede;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
  position: fixed;
  padding: 100px;
  display: flex;
  height: 68.5vh;
  width: 10%;
}
ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
}
li {
  font-size: 30px;
  width: 100%;




}
li:hover {
  a{
    color:#243882;
    font-weight: bold;
  }
}
a{
  color: black;
}
.center {
  margin: 3%;
  background-color: #FFF;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
  border-radius: 10px;
  width: 70%;
}
.secao-principal {
  padding: 30px;

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #243882;
  height: 62vh;
  
}
p{
  font-size: 30px;
  padding: 30px;
 
}



`

export const DivProposta = styled.div`

@media screen and (max-width: 1920px) {
  .text {
    margin-left: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    padding-right: 50px;
    padding-top: 10px;
  }
}
@media screen and (max-width: 1440px) {

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  flex-wrap: wrap;

  img {
    padding-right: 0px;
    padding-top: 0px;
    max-width: 70em;
    align-items: center;
    justify-content: center;


  }
  .text p {
    max-width: 75%;
    text-align: center;
  }
}

@media screen and (max-width: 1331px ) {
  flex-wrap: wrap;
  
}
@media screen and (max-width: 600px ) {
  width: 600px;
  padding: 0;
  justify-content: center;
  align-items: center;

  
  display: flex;
  img{
    justify-content: center;
    max-width: 60vh;
   
  }


  
}
@media screen and (max-width: 410px ) {
  text-align: center;
  width: 410px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    display: flex;
    max-width: 360px;
 
  }
  .text{
    display: flex;
    flex-direction: column;
    margin-left: 0vh;
    border: 0px;
    padding: 0px;
    align-items: center;
    text-align: justify;

  }
  .text h1{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 35px;
    width:98%;
    text-align: center;
  }
  .text p{
    max-width: 85%;
    margin: 0;
    padding: 0;
  }

}


font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #222222;
color: white;
position: static;
padding-top: 150px;
font-size: 20px;
padding-bottom: 150px;
display: flex;
flex-direction: row;
margin-bottom: 90px;


 img{
  width: 100vh;
  height: 100%;

}
.text h1 {
  margin-bottom: 20px;
}
.text p{
  font-size: 30px;
  width: 75%;

}
.text{
  margin-top: 7vh;
  width: 100%;
  padding-right: 20px;

}
.text{
  p{
    width: 100%;
  }
}



`

export const DivBody = styled.body`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 70%;
`
export const DivUser = styled.div`
*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.input-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  width: 70vh;
}
.input-box{
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;

}
.input-box input { 
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
  width: 85vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}
.input-box select{
  width: 20vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}

.input-box input:hover{
  background-color: #eeeeee75;
}


.container {
  height: 100%;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #181818;
height: 100vh;


}
.form-image img {
width: 110%;
height: 100%


}
.form {
  color: white;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
  padding: 4rem;

}
.title {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

button{
  border: #CDCCCA;
  width: 100%;
  background-color: #CDCCCA;
  color: black;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
  font-weight: bold;
  

}
button:hover{
  background-color: #A50A09;


}
`

export const DivRegistro = styled.div`
*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.input-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
}
.input-box{
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;

}
.input-box input { 
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #00001c;
}
.input-box textarea{
  width: 85vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}
.input-box select{
  width: 20vh;
  box-shadow: 1px 1px 6px #00001c;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
}

.input-box input:hover{
  background-color: #eeeeee75;
}


.container {
  width: 100%;
  height: 100vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
background-color: #181818;
height: 100vh;
}
.form-image img {
width: 100%;
height: 100vh;
}
.form {
  color: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
  padding: 4rem;

}
.title {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

button{
  border: #970F23;
  width: 100%;
  background-color: #970F23;
  color: white;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
  font-weight: bold;

}
button:hover{
  background-color: #ba364a;


}
`

export const DivMain = styled.div`

`
export const DivCards = styled.div`

@media screen and (max-width: 1920px ) {
  .cards{
    margin-left: 10vh;
  }

}
@media screen and (max-width: 414px) {
  max-width: 414px;
  .cards img{
    width: 100%;
    height: 40vh;
 
  }
  
}
@media screen and (max-width: 1480px ) {
  margin-left: 0;
  .cards {
    align-items: center;
    justify-content: center;
    margin-left: 0vh;
    display: flex;
    flex-wrap: wrap;
    
  }
  .cards div{
    letter-spacing: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1480px;
    text-align: justify;
    word-break: break-all;
  }
  .cards img{
    max-width: 90%;
    border-radius: 0;
    display: flex;
    padding: 0;
    align-items: center;
    margin-top: 15vh;
    border-radius: 25px;

  }

}
  @media screen and (max-width: 410px ) {


    .cards{
    width: 100%;
    margin-left: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
 


  
}

color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #222222;
padding-top: 150px;
font-size: 30px;
border-radius: 30px;
box-shadow: 100px, 5px, 5px white;
padding-bottom: 150px;
display: flex;
width: 100%;


margin-bottom: 90px;
img{
  width: 80vh;
  height: 50vh;
  padding-right: 200px;
  border-radius: 50%;
  padding-top: 30px;
}
.cards {
  width: 100%;
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
width: 100%;
text-align: center;
font-family: sans-serif;
color: #8b8b8b;
margin-bottom: 20vh;

.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

p{
  margin-top: 20vh;
  width: 80%;
  font-size: 30px;
}



`


export const DivBanner = styled.div`

@media screen and (max-width: 373px ) {
  max-width: 373px;
  min-height: 812px;
  text-align: center;

  .banner{
    position: relative;
  }
  
  .banner img {
    width: 373px;
    height: 100%;
    top: 10vh;
    position: relative;
  }


  
}
bottom: 0;
top: 0;
padding: 0;
margin: 0;
width: 100%;
.banner{
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 40px;
    min-height: 100%;
    

}
img{
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.texto{
    position: relative;
    top: 65vh;
    font-family:  sans-serif;
    color: white;
    margin-left: 7vh;
}

`
export const DivCard = styled.div`
margin-top: 20vh;
`

export const DivHeader = styled.header`

.nav .menuLateral:focus ~ ul  {
  height: 50vh ;
}
.nav .menuLateral:focus ~ ul li  {
  display: inline;
}

@media screen and (max-width: 1562px) {
  background-color: #080808;
  padding: 20px;
  position: fixed;

  .nav img{
    max-width: 200px;


  }
  .nav .menuLateral{
    display: inline;
    position: fixed;
    left: 5vh;
    top: 0;
    margin-top: 10px;
    width: 10px;
    


  }

  .logo img{
    max-width: 200px;
    display: flex;
    position: fixed;
    margin-left: 18vh;


  }

}



@media screen and (max-width: 1560px) {
  padding: 0;
  max-height: 600px;
  justify-content: center;
  text-align: center;


  .nav  ul  {
    display: none;
    text-align: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 0;
    background-color: #070707;
    text-align: center;
    margin-top: 10vh;
    position: static;
    right: 10vh;
    justify-content: space-between;
    font-size: 40px;
  }

    
    
  .nav ul {
    position: static;
    left: 100vh;
    flex-direction: column;
    align-items: unset;
    font-size: 40px;
  }
  ul{
    text-align: center;

  }
  .nav ul li {
    text-align: center;
    display: none;
  }
  .nav ul li a {
    text-align: center;
    font-size: 40px;
  }
  ul li a .cadastro{
    border: 0;
    border-radius: 0;
    font-size: 40px;

    width: 100%;
    
  }


}
/*@media screen and (max-width: 1496px) {
  max-width: 1496px;
  img{
    max-width: 250px;
  }

  
}
@media screen and (max-width: 1364px) {
  max-width: 1364px;
  img{
    max-width: 350px;
  }

 
  li a .menuLateral{
    display: inline;
    background-color: red;
  }
  .nav ul {
    flex-direction: column;
    align-items: unset;
  }
  
}*/
@media screen and (max-width: 1080px) {
  .stellantis{
    display: none;
  }
}
@media screen and (max-width: 1020px) {
  max-width: 1020px;
  img{
    max-width: 250px;
  }


  
}


@media only screen and (max-width: 1000px)  {
  .logo{

    width: 100%;
  }
  .stellantis{
    position: relative;
    width: 100%;
    right: 3vh;
    
  }


   }

   font-family : sans-serif;
   padding-bottom: 30px;
   font-size: 1.5rem;
   background-color: #07070721;
   width: 100%;
   color: #ffffff;
   display: flex;
   list-style: none;
   position: fixed;
   opacity: 0.9;
   justify-content: space-between;
   display: flex;
   .posicao:scroll{

    }

    ul{

      display: flex;
      
    }
  
    ul li {
      position: relative;
      display: inline;
      margin: 10px 20px 0 15px;
      .cadastro {
      border: #070707;
      position: relative;
      bottom: 5px;
      color: white;
      background-color: #2c2c2c;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 2px;
      font-size: 25px;
      border-radius: 25px;
      box-shadow: 5px 5px 10px #69696936 ;

   }
   button:hover{
    background-color: #070707;
   }
   :scroll-behavior {
    opacity: 0.1;
   }
     
      
    }
  
     ul li a {
      color: white;
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
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
    } 
    img{
        width: auto;
        height: auto;
        max-width: 350px;
        justify-content: space-between;
        position: absolute;
        top: 20px;
        
    }
    h1{
        font-family: sans-serif;
        font-weight: 550;
        letter-spacing: 5px;
        margin-left: 5vh;
        
    }
  
    .logo img{
      top: 20px;
      bottom: 20px;
      left: 30px;

    }
    .menuLateral{
      background-color: transparent;
      border: none;
      color: white;
      font-size: 55px;
      position: absolute;
      top: 4vh;
      left: 215vh;
      display: none;
      
    }

    .stellantis{

      width: 100%;
      position: absolute;
      left: 60vh;
    }


`

