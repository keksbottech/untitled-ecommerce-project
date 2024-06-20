'use client'
import {
    IconAperture,
    IconCopy,
    IconLayoutDashboard,
    IconLogin,
    IconMoodHappy,
    IconTypography,
    IconUserPlus,
    IconShoppingCart,
    IconUsers,
    IconHistory,
    IconShoppingBag,
    IconSettings,
    IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const SellerMenuitems = [
    {
        navlabel: true,
        subheader: "Fashion",
    },

    {
        id: uniqueId(),
        title: "Clothes",
        icon: IconLayoutDashboard,
        href: "/clothes",
    },

    {
        id: uniqueId(),
        title: "Shoes",
        icon: IconLayoutDashboard,
        href: "/shoes",
    },
    {
        id: uniqueId(),
        title: "Trousers",
        icon: IconLayoutDashboard,
        href: "/trousers",
    },
    {
        id: uniqueId(),
        title: "Others",
        icon: IconLayoutDashboard,
        href: "/shoes",
    },
    {
        navlabel: true,
        subheader: "Phones & Tablets",
    },
    {
        id: uniqueId(),
        title: "Phones",
        icon: IconUsers,
        href: "/phones",
    },
    {
        id: uniqueId(),
        title: "Products",
        icon: IconShoppingCart,
        href: "/seller/products",
    },
    {
        id: uniqueId(),
        title: "Store",
        icon: IconShoppingBag,
        href: "/store/explore",
    },
    {
        navlabel: true,
        subheader: "Health & Beauty",
    },
    {
        id: uniqueId(),
        title: "Transaction History",
        icon: IconHistory,
        href: "/seller/history",
    },
    {
        navlabel: true,
        subheader: "Electronics",
    },

    {
        id: uniqueId(),
        title: "Account",
        icon: IconUser,
        href: "/seller/account",
    },
    {
        id: uniqueId(),
        title: "Settings",
        icon: IconSettings,
        href: "/seller/settings",
    },
    {
        id: uniqueId(),
        title: "Logout",
        icon: IconLogin,
        href: "/sign-in",
    },
    {
        navlabel: true,
        subheader: "Pets",
    },
];

export default SellerMenuitems;
