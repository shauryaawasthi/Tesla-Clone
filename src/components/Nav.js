import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'



const Nav = () => {
  const NavWrap=styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    // backgroundColor:"rgb(0,0,0,.2)",
    // color:"whitesmoke",
    color:"black",
    height:"40px",
    position:"fixed",
    padding:"20px",
    overflowY:"hidden",
    gap:"160px",



  })

  const ModelWrap=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"40px",
    paddingLeft:"120px",



  })

  const SideNavWrap=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"25px",
    paddingLeft:"18px",



  })

  const H1=styled("h1")({
     fontWeight:"bold",
    //  fontWeight:"normal",
  
     fontSize:"28px",
     
     "&:hover":{color:"grey",
     cursor:"pointer",
     fontSize:"30px",

    
    },

  })






  return (
    <NavWrap>
      <h1 style={{fontSize:"50px"}}>TESLA</h1>

      <ModelWrap>
       <H1 onClick={()=>(console.log("Clicked"))}>Model-S</H1>
       <H1>Model-3</H1>
       <H1>Model-X</H1>
       <H1>Model-Y</H1>

      </ModelWrap>

      <SideNavWrap>
      <H1>Shop</H1>
      <H1>TeslaAccount</H1>
      <H1><MenuIcon/></H1>


        

      </SideNavWrap>




      
    </NavWrap>
  )
}

export default Nav
