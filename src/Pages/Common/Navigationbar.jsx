import { Navbar } from "flowbite-react";

import logo from './nowyouknow-logo.png'

function Navigationbar() {
    return (
        <nav className='mb-10'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">

                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/#/signup">
                        <div className=' text-end'>
                            انضم إلينا
                        </div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}

export default Navigationbar;