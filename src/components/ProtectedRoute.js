import AuthService from "./AuthService";
import {Route,Redirect} from  'react-router-dom'

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    return (
        <Route
        path={path}
        {...rest}
        render={(props) => {
            return AuthService.loggedIn() ? <Comp {...props} /> : <Redirect to="/login" />;
        }}
        />
    );
};
export default ProtectedRoute;