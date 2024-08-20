import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Food Recipes Page</h1>
      <center>
      <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/recipes-1657874104_0bf6e33f49922c4dff87.webp" className="img" />
      <Link href="/recipes">
        <button>Explore Recipes</button>
      </Link>
      </center>
    </main>
  );
}
