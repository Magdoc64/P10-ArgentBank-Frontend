import "./error.css"
import { Link } from "react-router-dom"

const Error = () => {
    return(
        <section className="error">
            <h1 className="error-title">Error 404</h1>
            <p className="error-text">You are not authorized to access this page</p>
            <Link to="/" className="error-link">Back to the home page</Link>
        </section>
    )
}
export default Error