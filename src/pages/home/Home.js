import logo from "./conestoga_GDSC_Logo.png";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <p className="description">
        Google Developer Student Clubs are university based community groups for
        students interested in Google developer technologies. Students from all
        undergraduate or graduate programs with an interest in growing as a
        developer are welcome. By joining a GDSC, students grow their knowledge
        in a peer-to-peer learning environment and build solutions for local
        businesses and their community.
      </p>
    </div>
  );
}

export default Home;
