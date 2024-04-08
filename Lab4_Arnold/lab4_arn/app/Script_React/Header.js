import Image from "next/image";
import Link from "next/link";
function Header() {
    return (

        <header>
            <div className="container-fluid">
                <nav className="row align-items-center navbar navbar-expand-lg navbar-dark">
                    <p className="col-6 col-lg-2 align-items-left">
                        <Image src="/images/LogoCEPI.png" className="navbar-brand" alt="logo" id="logo" width={115} height={115}/>
                    </p>
                    <button className="col-6 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-6 col-lg-10 align-items-center collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav row align-items-center">
                            <li className="nav-item col-lg-3">
                                <Link href="/" className="nav-link mx-5" >Menu1</Link>
                            </li>
                            <li className="nav-item col-lg-3">
                                <Link className="nav-link mx-5" href="#">Menu2</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <Link className="nav-link mx-5" href="#">Menu3</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <Link className="nav-link mx-5" href="#">Menu4</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <a className="nav-link mx-5" href="#">
                                    <Image src="/images/logoConnexion.png" alt="logoConnexion" id="logoConnexion" width={60} height={60}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        
    );
}
export default Header;
