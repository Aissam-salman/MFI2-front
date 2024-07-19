import {NavBarComponent} from "@/components/NavBar.component.tsx";
import {RegisterForm} from "@/components/RegisterForm.tsx";

const SignupPage = () => {
    return (
        <>
            <NavBarComponent/>
            <main className="p-8">
                <RegisterForm/>
            </main>
        </>
    )
}

export default SignupPage;