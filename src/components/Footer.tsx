import * as React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Author from "./Author";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <hr />
                Stuffie&trade; is a platform coded and registered by &nbsp;
                <Link to={"/author"} target="_blank">Carlos Reyes-Rico</Link>.
            </div>
        );
    }
}

export default Footer;