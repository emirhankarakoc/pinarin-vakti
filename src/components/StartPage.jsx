import React from "react";
import background from "../assets/image1.png";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function StartPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: "600",
      }}
    >
      <div>
        <div className="container">
          <div className="center margin-top-30px">
            <div>
              <Menu vertical>
                <Menu.Item as={NavLink} to="/denizli" name="Denizli" />
                <Menu.Item as={NavLink} to="/baku" name="Baku" />
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
