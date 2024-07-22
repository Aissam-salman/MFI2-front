import {buttonVariants} from "@/components/ui/button.tsx";
import {NavBarComponent} from "@/components/NavBar.component.tsx";
import {Link} from "react-router-dom";

function App() {
    return (
        <>
            <NavBarComponent/>
            <main className="p-8">
                <div className="flex gap-3">
                    <Link className={buttonVariants({variant: "outline"})} to="/users">Liste users</Link>
                    <Link className={buttonVariants({variant: "outline"})} to="/register">sign up</Link>
                    <Link className={buttonVariants({variant: "default"})} to="/login">login</Link>
                </div>
            </main>
        </>
    )
}

export default App
