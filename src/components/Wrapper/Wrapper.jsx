import Header from "./Header/Header";
import Main from "./Main/Main";
import PopBrowser from "./Popups/PopBrowser/PopBrowser";
import PopExit  from "./Popups/PopExit/PopExit";
import PopNewCard  from "./Popups/PopNewCard/PopNewCard";
import { cardList, statuses} from "../../Data";
import { SWrapper } from "../Wrapper.styled";

export default function Wrapper() {
    return (

<SWrapper>
    <PopExit />
    <PopNewCard />
    <PopBrowser />
    <Header />
    <Main cardList={cardList} status={statuses}/>
</SWrapper>
    )
}
