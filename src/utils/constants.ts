
export type navBarItemType = {
    route: string,
    navname: string,
    active: boolean,
}
export const NAVBARITEMS = [
    {
        route: "/",
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

export const RATEADJUSTMENLIST = [
    "Every Month",
    "Every 3 Months",
    "Every 6 Months",
    "Every 9 Months",
    "Every 12 Months"
]

export const CALENDARTERMSOPTIONs = [
    "Days",
    "Weeks",
    "Months",
    "Years"
]

export const STEPS = [
    "Property details",
    "Rent roll",
    "Income and expences",
    "Finacing",
    "Ownership structure"
]

export type columntype = {
    displayName: string,
    key: string,
}

export const MONTHLYDATA = {
    columns: [
        {
            displayName: "Month",
            key: "month"
        },
        {
            displayName: "Date",
            key: "date"
        },
        {
            displayName: "Monthly Payment",
            key: "monthlyPayment"
        },
        {
            displayName: "Interest",
            key: "interest"
        },
        {
            displayName: "Principal Pay Down",
            key: "principalPayDown"
        },
        {
            displayName: "Ending Principal",
            key: "endingPrincipal"
        },
        {
            displayName: "Cumulative Interest",
            key: "cumulativeInterest"
        }
    ],

    data: [{
        month: 1,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 2,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 3,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 4,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 5,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 6,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 17,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 8,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 9,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 10,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 11,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 12,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 13,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    },
    {
        month: 14,
        date: "May 2021",
        monthlyPayment: 3312000,
        interest: {
            amount: 3312000,
            percentage: 1.23,
        },
        principalPayDown: 3312000,
        endingPrincipal: 449124,
        cumulativeInterest: 844
    }]

}