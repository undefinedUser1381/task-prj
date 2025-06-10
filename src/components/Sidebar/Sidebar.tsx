import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import { NavLink } from "react-router";

const SidebarContainer = styled(Box)(({theme}) => ({
    width : "100%",
    height : "auto",
    background : "#F2F2F2",
    padding : "10px",
    borderRadius : "10px",
    fontFamily : theme.typography.fontFamily,
    // responsive 
    [theme.breakpoints.up("lg")] : {
      width : "20%",
      height : "30rem"
    },

}))

const menuItems = [
   {text : "اهداف" , to : "aims"},
   {text : "برنامه" , to : "plans"},
   {text : "فعالیت ها" , to : "activities"},
]

export default function Sidebar() {
  
  return (
    <SidebarContainer>
      <Box sx={{width : "100%" , height : "15rem"}}>
        <List sx={{height : "auto" , display : "flex" , flexDirection : "column", width : "100%" , gap : "20px"}}>
           {
            menuItems.map(({text , to}) => (
             <ListItem key={to} to={to} component={NavLink} sx={{transition : "0.3s", color : "black" , cursor : "pointer" , width : "100%" , "&.active" : { background : "white" , fontWeight : "800" , color : "black" } , "&:hover": { backgroundColor : "white" }}}>
              <ListItemText>{text}</ListItemText>
             </ListItem>
            ))
          }
        </List>
     </Box>
    </SidebarContainer>
  )
}
