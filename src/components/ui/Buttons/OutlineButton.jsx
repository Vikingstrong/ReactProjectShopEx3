import { Button } from "@mui/material"


export default function OutlinedButton({text, ...props}){

    return(
        <Button variant="outlined" sx={{
            px:2,
            color: "#446B80",
            fontWeight: 600,
            borderRadius: 2.5
        }}
        
            {...props}>
            {text}
        </Button>
    )
}
<h1 className="bg-[#334f5f]"></h1>