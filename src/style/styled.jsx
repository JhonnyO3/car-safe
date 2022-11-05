import styled from "styled-components";



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
  background-color: #fbfbfb;
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
  background-color: #dedede;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
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

.title {
  text-align: left;
  width: 400px;
  font-weight: bold;
  color: #243882;
  font-size: 30px;

  
}

  
}

`

export const DivInfoPessoal = styled.div`
display: flex;
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}


.center {
  margin: 3%;
  background-color: #FFF;
  box-shadow: 2px 6px 6px 3px #9b9b9b;
  border-color: #243882;
  border-radius: 10px;
  height: 100%;
  margin-left: 25%;
  position: absolute;
  
  width: 70%;
}
.secao-principal {
  padding: 30px;
  font-size: 30px;
  h1{
    width: 100%;
    color: #243882;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
    
  }

}
.secao-principal .infos{
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  background-color: #f24f36;
  padding: 20px;
  height: 67vh;
  p{
    color: white;
    padding: 7px;
  }
  
}
p{
  font-size: 30px;
  color: black;
 
}

img{
  display: flex;
  left: 100vh;
  top: 55%;
  width: 54%;
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

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
width: 100%;
background-color: #F0F0F0;
position: relative;
top: 20vh;
padding-top: 150px;
font-size: 20px;
padding-bottom: 150px;
display: flex;

margin-bottom: 90px;
img{
  width: 700px;
  padding-right: 50px;
  padding-top: 10px;
}
p{
  margin-top: 20px;
  font-size: 30px;
  width: 85%;
}
.text{
  margin-left: 40px;
  margin-top: 90px;
}



`

export const DivBody = styled.body`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
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
  height: 120vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
}
.form-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 3rem;
  background-color: #c6c6c6;
}
.form-image img {
  width: 41rem;
}
.form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 4rem;

}
.title {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

button{
  width: 100%;
  background-color: #243782;
  color: white;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.212) ;
  font-weight: bold;

}
`

export const DivMain = styled.div`
position: absolute;
width: 100%;

`
export const DivCards = styled.div`
margin-top: 100px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #F0F0F0;
position: relative;
top: 20vh;
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
margin-left: 120px;
text-align: center;
font-family: sans-serif;
color: #3e3c3c;
justify-content: center;
margin-top: 40vh;

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
position: relative;
width: 100%;
.banner{
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 40px;
    height: 300px;
    

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

