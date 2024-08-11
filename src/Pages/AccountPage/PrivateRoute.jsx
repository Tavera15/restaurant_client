import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({children})
{
    const isAuthorized = useSelector(state => !state.token.hasError);

    return(
        <div>
            {
                isAuthorized ? children : <Navigate to="/Login" /> 
            }
            {
                console.log(isAuthorized)
            }
        </div>
    );
}

export default PrivateRoute;