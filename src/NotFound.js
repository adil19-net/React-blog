import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Page Not Found</h2>
            <Link to='/'>Go back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;