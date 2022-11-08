import { Route, Routes } from "react-router-dom";
import Select from "../Select/Select";
import SingleProduct from "../NewMeet/NewMeet";
import TeamById from "../NewMeet/NewMeet";
import "./Routing.css";
import NewMeet from "../NewMeet/NewMeet";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/select" element={<Select />} />
                <Route path="/api/team-meet/:id" element={<TeamById />} />
                <Route path="/api/new" element={<NewMeet />} />
                <Route path="*" element={<Select />} />
            </Routes>
        </div>
    );
}

export default Routing;
