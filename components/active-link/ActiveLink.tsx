"use client";

import Link from "next/link";
// Si o si con .module para que funcione el css 
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}


export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      {/* NOTE: los styles solo son string */}
      <Link className={`${style.link} ${(pathName === path) && style['active-link']}`} href={path}  > {text} </Link>
    </>
  )
}