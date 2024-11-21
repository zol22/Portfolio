import Title from "./Title"
import Nav
 from "./Nav";
const Header = () => {
    return(
        <header className="sticky flex top-0 mx-auto justify-between font-sans px-10 py-4 bg-secondary ">
            <Title />
            <Nav />
        </header>
    )
}
export default Header;