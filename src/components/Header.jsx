import Title from "./Title"
import Nav
 from "./Nav";
const Header = () => {
    return(
        <header className="sticky flex top-0 mx-auto justify-between border-b border-gray-100 font-sans px-20 py-4 ">
            <Title />
            <Nav />
        </header>
    )
}
export default Header;