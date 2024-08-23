import style from "./sidebar.module.css";
export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?fm=jpg&q=100&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={style.cover}
        />
        <div className={style.profile}>
          <img
            src="https://github.com/JhonathanWeber.png"
            alt="Foto Jhonathan Weber - Perfil Github"
            className={style.avatar}
          />
          <strong>Jhonathan Weber</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </aside>
    </>
  );
}
