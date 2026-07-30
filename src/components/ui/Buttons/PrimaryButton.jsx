import { Button } from "@mui/material";


export default function PrimaryButton({text, borderRadius=2.5, borderLeft=7.5, width="auto", ...props}){

    return(
        <Button sx={{
            bgcolor: "#7FC9F0",
            color: "white",
            borderRadius: borderRadius,
            borderTopLeftRadius: borderLeft,
            borderBottomLeftRadius: borderLeft,
            px: 2,
            width: width
        }}
        {...props}
        >
            {text}
        </Button>
    )
}