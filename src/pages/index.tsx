import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";


const DashboardIndex = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(Routes.home);
    });

    return (
        <></>
    );
}
 
export default DashboardIndex;
