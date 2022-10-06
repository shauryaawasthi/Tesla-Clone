import styled from '@emotion/styled'
import { Button } from '@mui/material';
import { style } from '@mui/system';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SouthIcon from '@mui/icons-material/South';
import { hover } from '@testing-library/user-event/dist/hover';
import Nav from './Nav';
// import images from "./strangerThings.jpg"


const MainSection = (props) => {


    const Warper = styled("div")({
        backgroundImage: `url(${props.image})`,
        // width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "centre",
        backgroundRepeat: "no-repeat",
        color: "black",
        // position:"relative",
    });

    const TextWrap=styled("div")({
        display:"flex",
        flexDirection:"column",
        gap:"2px",
        position:"absolute",
        marginTop:"100px",
        marginLeft:"580px",
        fontSize:"20px",
        alignItems:"center",

    });

    const ButtonWrap=styled("div")({
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        position:"absolute",
        marginTop:"560px",
        marginLeft:"580px",
        alignItems:"center",
        // backgroundColor:"black"
       

    });

    const ButtonStyle=styled(Button)({

        backgroundColor:"whitesmoke",
        color:"black",
        padding:"8px",
        fontSize:"20px",
        "&:hover":{
            backgroundColor:"grey",
            color:"white",
        },
        borderRadius:"30px",
        



    })

    const ButtonStyle1=styled(Button)({

        backgroundColor:"Black",
        color:"white",
        padding:"15px",
        fontSize:"20px",
        "&:hover":{
            backgroundColor:"grey",
            color:"white",
        },

        borderRadius:"40px",



    })

    const IconWrap=styled(SouthIcon)({
        fontSize:"50px",
        fontWeight:"bold",
        paddingTop:"35px",
        animation:"animateDown infinite 1.3s",
        color:"white",
        paddingRight:"50px",

    })

    const DownWrap=styled("div")({
        // backgroundColor:"black",
        display:"flex",
        gap:"50px",
        // paddingBottom:"20px",
        alignItems:"center",


    })





    return (



    
        <Warper>
          <Nav/>
            <TextWrap>
                <h1>{props.movieName}</h1>
                <h3> LET'S REVIEW</h3>
            </TextWrap>

            
            {/* <DownWrap> */}
                <ButtonWrap>
                    <DownWrap>
                    <ButtonStyle variant='contained'>CAR REVIEW</ButtonStyle>
                    <ButtonStyle1 variant='contained'>LETS VIDEO FLEX</ButtonStyle1>  
                    </DownWrap>      
                
                    <IconWrap>
                    <SouthIcon sx={{color:"white"}}/>
                    </IconWrap>
                </ButtonWrap>
            {/* </DownWrap> */}
            



        </Warper>



    )
}

export default MainSection
