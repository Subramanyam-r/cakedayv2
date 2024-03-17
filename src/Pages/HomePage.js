import { Button } from "@mui/material";
import { signOut } from "../Components/Utils/login";


export default function HomePage({ user }) {
    return <div>
        HomePage

        <Button onClick={(async () => await signOut())}>
            SIGN OUT
        </Button>
    </div>
}