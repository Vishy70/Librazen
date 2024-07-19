import { Brand, NavItem, NavLink } from "@/components/ui/NavComponents";
import Link from "next/link";
import { ProfilePic } from "@/components/ui/ProfilePic";
import {
  getInitialUserData,
  signOut,
} from "@/supabase/actions/supabase-actions";
import { clsx } from "clsx";
import { RiLogoutBoxRLine } from "react-icons/ri";

const [{ profile_picture, is_admin }] = await getInitialUserData();

export const brand = {
  text: "Librazen",
  href: "/home",
};
brand.component = <Brand href={brand.href}>{brand.text}</Brand>;

const admin = {
  text: "Admin",
  href: "/admin",
  alignment: "left",
};
admin.component = (
  <NavItem key={admin.href}>
    <NavLink href={admin.href}>{admin.text}</NavLink>
  </NavItem>
);

const catalogue = {
  text: "Catalogue",
  href: "/catalogue",
  alignment: "center",
};
catalogue.component = (
  <NavItem key={catalogue.href}>
    <NavLink href={catalogue.href}>{catalogue.text}</NavLink>
  </NavItem>
);

const profile = {
  text: "Profile",
  href: "/profile",
  alignment: "right",
};
profile.component = (
  <NavItem key={profile.href}>
    <Link href={profile.href} className="flex justify-center items-center">
      <ProfilePic profile_picture={profile_picture} size={50} />
    </Link>
  </NavItem>
);

const orders = {
  text: "Orders",
  href: "/profile",
  alignment: "right",
};
orders.component = (
  <NavItem key={orders.href}>
    <NavLink href={orders.href}>{orders.text}</NavLink>
  </NavItem>
);

const statistics = {
  text: "Statistics",
  href: "/cart",
  alignment: "right",
};
statistics.component = (
  <NavItem key={statistics.href}>
    <NavLink href={statistics.href}>{statistics.text}</NavLink>
  </NavItem>
);

const cart = {
  text: "Cart",
  href: "/cart",
  alignment: "right",
};
cart.component = (
  <NavItem key={cart.href}>
    <NavLink href={cart.href}>{cart.text}</NavLink>
  </NavItem>
);

const logout = {
  text: "Logout",
  href: "/",
  alignment: "right",
};
logout.component = (
  <NavItem key={logout.href} action={signOut}>
    <button
      className={clsx(
        "text-3xl text-violet-200 font-extrabold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-violet-300"
      )}
    >
      <RiLogoutBoxRLine className="size-7" />
    </button>
  </NavItem>
);

export const homeList = [brand, is_admin ? admin : undefined, catalogue, profile, cart, logout];
export const profileList = [brand, is_admin ? admin : undefined, profile, orders, statistics, logout];
export const catalogueList = [brand, is_admin ? admin : undefined, catalogue, cart, logout];
export const cartList = [brand, is_admin ? admin : undefined, catalogue, cart, logout];
export const adminList = [brand, is_admin ? admin : undefined, logout];
