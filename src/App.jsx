import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Computer from './components/Computer/Computer'
// import Service from './components/Service/Service'
import Projects from './components/Projects/Projects'
import AllProjects from './components/ShowAllProjects/AllProjects';
import CustomNavbar from './components/Navbar/CustomNavbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Animation from './components/Animation/Animation'

import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';  // Import Router components



const App = () => {

    const location = useLocation();
    // Scroll to top when the page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            {location.pathname === "/new-projects" ? (
                <CustomNavbar /> // Render custom navbar for /new-projects
            ) : (
                <Navbar /> // Default navbar for other routes
            )}
            <Routes>

                <Route path="/" element={
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                        >
                            <Hero />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                        >
                            <About />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                        >
                            <Skills />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                        >
                            <Computer />
                        </motion.div>

                        {/* 
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Service />
                        </motion.div> */}

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Projects />
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Contact />
                        </motion.div>

                        <Animation />
                        <Footer />
                    </>
                } />

                {/* Route for the new page */}
                <Route path="/new-projects" element={

                    <>
                        <AllProjects />

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Contact />
                        </motion.div>


                    </>

                } />
            </Routes>


        </div>
    )
}

export default App
