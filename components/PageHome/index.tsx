import Parallax from "./Parallax";
import Details from "./Details";
import Work from "./Work";
import Advantages from "./Advantages";
import Offer from "./Offer";
import Protect from "./Protect";
import Acquaintance from "./Acquaintance";
import JoinCommunity from "../JoinCommunity";
import PageGameplay from "../PageGameplay";

type PageHomeProps = {};

const PageHome = ({}: PageHomeProps) => {
    return (
        <Parallax>
            <Details />
            <Work />
            <Protect />
            <Acquaintance />
            <Offer />
            <Advantages />
            <PageGameplay />
            <JoinCommunity />
        </Parallax>
    );
};

export default PageHome;
