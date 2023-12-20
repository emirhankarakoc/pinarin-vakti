import background from "../assets/image1.png";

const cities = [
  {
    label: "Denizli",
    href: "/sehirler/denizli",
  },
  {
    label: "Bakü",
    href: "/sehirler/baku",
  },
];

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: "600",
        overflow: "hidden",
      }}
    >
      <div>
        <div className="container p-1 d-flex justify-content-center">
          <div
            className="d-flex justify-content-center align-items-center  gap-5 flex-wrap"
            style={{ width: "320px", height: "100vh" }}
          >
            {cities.map(({ label, href }) => (
              <a href={href} className="btn btn-success">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
