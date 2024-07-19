export const NavBarComponent = () => {
    return (
        <nav className="bg-gray-800 p-4 mb-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">MFI</div>
                <div className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/about" className="text-gray-300 hover:text-white">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    )
}