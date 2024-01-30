import { Award, Clapperboard, HomeIcon, KanbanSquare, ListFilter, LogOut, Settings, UserRound } from "lucide-react"


export const navlinks = [
    "Dashboard", "Contact"
]

export const dashboardItemsOne = [
    {
        id: 1,
        label: "Home",
        icon: <HomeIcon/>,
        link: "/Dashboard/Home"
    },
    {
        id: 2,
        label: "Categories", 
        icon: <ListFilter/>
    },
    {
        id: 3,
        label: "Awards",
        icon: <Award/>
    },
    {
        id: 4,
        label: "Discover",
        icon: <KanbanSquare/>
    }
]

export const dashboardItemsTwo = [
    {
        id: 5,
        label: "Account",
        icon: <UserRound/>
    },

    {
        id: 6,
        label: "Watchlist",
        icon: <Clapperboard/>
    }
]

export const dashboardItemsThree = [
    {
        id: 7,
        label: "Settings",
        icon: <Settings/>
    },
    {
        id: 8,
        label: "Logout",
        icon: <LogOut/>
    }
]