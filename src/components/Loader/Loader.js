import React from "react";
import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import "./Loader.css"
const Loader = () => {
    
    return (
        <Container>
        <Grid container style={{marginTop:100}} alignItems={"center"} justifyContent={"center"}>
            <Grid style={{width:400,background:lightBlue}} container alignItems={"center"} direction={"column"}>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            </Grid>
        </Grid>
        </Container>
    )
}
export default Loader