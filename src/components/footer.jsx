function Footer() {
    return <footer className="page-footer deep-orange darken-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Mariya Aleksandrova
                {/* <a className="grey-text text-lighten-4 right" href="#!"> Reprisitory </a> */}
            </div>
        </div>
    </footer>
}

export { Footer };