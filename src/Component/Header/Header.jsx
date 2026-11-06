import { SiHiltonhotelsandresorts } from "react-icons/si";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import './Header.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useActions } from "../../store/useStore";
import { motion, AnimatePresence } from 'framer-motion'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const { menu, setMenu } = useActions()
  const navigate = useNavigate();
  
  const NavLinks = [
    { title: 'Home', link: '/' },
    { title: 'Hotels', link: '/hotels' },
    { title: 'About', link: '/about-us' },
    { title: 'Contact', link: '/contact-us' }
  ]

  return (
    <header>
      <div onClick={() => navigate('/')} className="logo">
        <SiHiltonhotelsandresorts className="icon" />
        <h1>HotelLify</h1>
      </div>

      <ul className="full-screen">
        {NavLinks.map((item, index) => (
          <NavLink key={index} to={item.link}>
            <li>{item.title}</li>
          </NavLink>
        ))}
      </ul>

      <div className='buttons'>
        <SignedOut>
          <SignUpButton mode="modal">
            <motion.button whileTap={{ scale: 0.8 }}>Sign Up</motion.button>
          </SignUpButton>
          <SignInButton mode="modal">
            <motion.button whileTap={{ scale: 0.8 }}>Login</motion.button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>

      {/* Mobiles */}
      <div className="Mobiles-header">
        <motion.div
          whileTap={{ scale: 0.85 }}
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          <AnimatePresence mode="wait">
            {menu ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdClose className="menu" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdMenu className="menu" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {menu && (
            <>
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenu(false)}
              />

              <motion.div
                className="list"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="list-header">
                  <span className="list-title">Menu</span>
                  <motion.button
                    className="close-btn"
                    whileTap={{ scale: 0.85, rotate: 90 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setMenu(false)}
                    aria-label="Close menu"
                  >
                    <IoMdClose />
                  </motion.button>
                </div>

                <ul>
                  {NavLinks.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index + 0.1 }}
                    >
                      <NavLink
                        to={item.link}
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                      >
                        <li>{item.title}</li>
                      </NavLink>
                    </motion.div>
                  ))}
                </ul>

                <motion.div
                  className="btns"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <motion.button whileTap={{ scale: 0.9 }}>
                        Sign Up
                      </motion.button>
                    </SignUpButton>
                    <SignInButton mode="modal">
                      <motion.button whileTap={{ scale: 0.9 }}>
                        Login
                      </motion.button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton showName />
                  </SignedIn>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header