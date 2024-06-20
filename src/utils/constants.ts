
export type navBarItemType = {
    route: string,
    navname: string,
    active: boolean,
}
export const NAVBARITEMS = [
    {
        route: "/dashboard",
        navname: "Dashboard",
        active: true,
    },
    {
        route: "/portfolio",
        navname: "Portfolio",
        active: false,
    },
    {
        route: "/debt",
        navname: "Debt",
        active: false,
    },
    {
        route: "/underwriting",
        navname: "Underwriting",
        active: false,
    },
    {
        route: "/contacts",
        navname: "Contacts",
        active: false,
    },
    {
        route: "/reports",
        navname: "Reports",
        active: false,
    }
]