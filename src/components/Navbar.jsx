export const Navbar = () => {
  const sehirIsmi = location.pathname.split("/").pop();
  return (
    <nav class="navbar bg-body-tertiary mb-3">
      <div class="container-fluid justify-content-center">
        <span class="navbar-brand text-center text-wrap">
          PINARIN VAKTI {String(sehirIsmi).toLocaleUpperCase()} İÇİN NAFİLE
          NAMAZ VAKİTLERİ
        </span>
      </div>
    </nav>
  );
};
