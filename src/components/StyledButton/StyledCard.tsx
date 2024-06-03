import { styled } from "@mui/material"
import { ReactNode } from "react"


interface styledCardProps {
    children: ReactNode
}

const StyledCard: React.FC<styledCardProps>  = ({children}) => {

    const StyledCard= styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: '1px solid #232323',
        borderRadius: "3px",
        padding: "5px 15px",
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    })) 

    return (
        <>
         <StyledCard>
            {children}
         </StyledCard>
        </>
       
    )
  }
  
  export default StyledCard
  

  