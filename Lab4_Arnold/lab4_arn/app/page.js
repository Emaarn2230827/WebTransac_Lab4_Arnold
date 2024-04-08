import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Header from "./Script_React/Header";
import Footer from "./Script_React/Footer";
import AfficheForm  from "./Script_React/AfficherForm";
import BlogList from "./Script_React/BlogList";

export default function Home() {
  return (
    <main >

      <Header/>
      <AfficheForm/>
      <BlogList/>
      <Footer/>
    </main>
  );
}
