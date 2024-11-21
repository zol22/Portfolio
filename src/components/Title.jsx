import { Link } from "react-router-dom";

const Title = () => {

    const handleHomeClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

    return (
        <Link to="/" onClick={handleHomeClick}>
            <h2 className="text-3xl text-textPrimary font-semibold ">Solange Ormeno</h2>
            <h2 className="text-xl">Software Engineer</h2>
        </Link>
    )

}
export default Title;