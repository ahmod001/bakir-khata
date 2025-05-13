import TopBar from "../../../shared/components/TopBar";
import Date from "./Date";

const Header = () => {
    return (
        <TopBar>
            <div className="flex items-center justify-between">
                <Date />
            </div>
        </TopBar>
    );
};

export default Header;