
import { useEffect } from "react";
import Nav from "./Nav";



const Header = () => {
  useEffect(() => {
    document.title = " Job Search | Header ";
}, []);
    return (
        <div>
          <Nav></Nav>
        </div>
    );
};

export default Header;