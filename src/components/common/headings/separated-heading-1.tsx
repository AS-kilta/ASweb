import React from "react"

import * as sassVars from "@src/styles/_exports.module.scss"

const SeparatedHeading1: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => {
    return (
        <div style={{margin: "40px 0"}}>
            <h1 id={id} className="pageHeading1">{children}</h1>
            <hr style={{background: sassVars.asViolet1, height: "2px", width: "100px"}} />
        </div>
    )
}

export default SeparatedHeading1
