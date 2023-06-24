import Navbar from "../Navbar/Navbar";

const Layout = ({ children, fontClass }) => {
    return (
        <>
            <Navbar />
            {children}
            <footer className={fontClass}>
                <div className="footer-grid">
                    <div>
                        <h2>College of Community Science</h2>
                        <p> 
                            SKRAU Campus<br/>
                            Beechwal Rural<br/>
                            Rajasthan<br/>
                            334006<br/>
                            India<br/>
                        </p>
                        <h2>Contact</h2>
                        <a href="tel:+919413940444">+91 94139 40444</a><br/>
                        <a href="tel:+911512250692">+91 151 2250692</a>
                    </div>
                </div>
                <hr />
                <p>© {new Date().getFullYear()} College of Community Science</p>
            </footer>
        </>
    )
}

export default Layout;