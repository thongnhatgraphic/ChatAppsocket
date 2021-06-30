import LogIn from "./Component/pageJoin/LogIn";
import PageChat from "./Component/pageChat/PageChat";
import NotFoundPage from "./Component/NotFound/NotFoundPage";

export const routes = [
    {
        name: "Join Page",
        path: "/",
        exact: true,
        component: LogIn 
    },
    {
        name: "Chat Page",
        path: "/chatpage",
        exact: false,
        component: PageChat
    },
    {
        name: "NotFound",
        path: "/",
        exact: false,
        component: NotFoundPage
    }
]