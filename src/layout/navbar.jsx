"use client"
import Link from "next/link";
import style from './nav.module.css'
import useAuthCheck from "@/hooks/userAuthCheck";
export default function NavLayout() {
    const authCheck= useAuthCheck();
    return ! authCheck ? <div>cheking authentication</div>:
    <section className={style.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/addStudent'>add student</Link>
        <button>
        <Link href='/registration'>Sign Up</Link>
        </button>
    </section>
  }