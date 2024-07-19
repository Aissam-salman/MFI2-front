import {Button} from "@/components/ui/button.tsx";
import {NavBarComponent} from "@/components/NavBar.component.tsx";

const LoginPage = () => {
    return (
        <>
            <NavBarComponent/>
            <main className="p-8">
                <Button>Connexion</Button>
            </main>
        </>
    )
}

export default LoginPage;