import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RemoveTrailingSlash = (props) => {
    const location = useLocation();
    if (location.pathname.match(/.\/$/)) {
        return (
            <Navigate 
                replace 
                to={{
                    pathname: location.pathname.replace(/\/+$/, ""),
                    search: location.search
                }}
                {...props}
            />
        );
    }

    return null;
};
