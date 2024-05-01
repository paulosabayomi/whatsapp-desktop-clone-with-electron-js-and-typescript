import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Sidebar from "./main-comps/Sidebar";
import MainDisplay from "./main-comps/MainDisplay";

const WrapperComponent = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="app-wrapper d-flex">
            <Sidebar />
            <MainDisplay />
        </MDBContainer>
    )
})

export default WrapperComponent;