import style from "./App.module.css";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";

export default function App() {
  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <Sidebar />
        <section>
          <h1>Main</h1>
          <article></article>
        </section>
      </main>
    </>
  );
}
