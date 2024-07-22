import {NavBarComponent} from "@/components/NavBar.component.tsx";
import {LoginForm} from "@/components/LoginForm.tsx";

const LoginPage = () => {
    return (
        <>
            <NavBarComponent/>
            <main className="p-8">
                <LoginForm/>
            </main>
        </>
    )
}

export default LoginPage;