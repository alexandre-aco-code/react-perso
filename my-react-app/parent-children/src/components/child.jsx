//src/composant/element.jsx

import React from "react";
import Parent from "./parent";

const Element = (props) => {
    return (
        <React.Fragment>
            <h1>Je fais un super test</h1>

            {console.log(props.children)}

        </React.Fragment>
    )
}

export default Element;