import { useEffect } from "react";
import mainVideo from "../../assets/Main Video.mp4";
import mainLogo from "../../assets/images/mainLogo.png";
import mainCertificate from "../../assets/images/mainCertificate.png";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--scroll-position",
        `${scrollPosition}s`
      );

      const logoIcon = document.querySelector(".logo-icon");
      if (logoIcon) {
        const rect = logoIcon.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          document.body.classList.add("animated");
        } else {
          document.body.classList.remove("animated");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="home-full-width">
      <video autoPlay loop muted className="bg-video">
        <source src={mainVideo} type="video/mp4" />
      </video>
    </div>
    <div className="home-section">
      <img src={mainLogo} alt="Main Logo" />
      <img src={mainCertificate} alt="Main Certificate" />
    </div>
    </>
  );
}

export default Home;
