
import Footeremail from "@/app/ui/home/FooterEmail";
import { FaGithub, FaGoogleDrive, FaLinkedin } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <ul className="flex space-x-5">
              <li>
                <a
                  href="https://github.com/vivek-munjapara"
                  target="_blank"
                  title="github"
                >
                  <FaGithub className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vivek-munjapara-frontend-developer/"
                  target="_blank"
                  title="linked in"
                >
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1u-9KydccV7cJJYgsEQ1rtUfcxpuM26Fp"
                  target="_blank"
                  title="Google Drive"
                >
                  <FaGoogleDrive className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="mailto:vivek.munjapara@gmail.com" title="mail"></a>
                <Footeremail />
              </li>
            </ul>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                Copyright &copy; {currentYear}. Vivek's Portfolio sample Design.
              </p>
            </div>
          </div>
          <ScrollToTop />
        </div>
      </footer>
    </>
  );
}

export default Footer;
