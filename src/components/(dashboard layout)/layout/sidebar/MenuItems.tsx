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

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/seller/dashboard",
  },
  {
    navlabel: true,
    subheader: "Products",
  },
  {
    id: uniqueId(),
    title: "Customers",
    icon: IconUsers,
    href: "/seller/customers",
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
    subheader: "History",
  },
  {
    id: uniqueId(),
    title: "Transaction History",
    icon: IconHistory,
    href: "/seller/history",
  },
  {
    navlabel: true,
    subheader: "Account",
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
];

export default Menuitems;
