export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal footer-center bg-blue-500 text-base-content p-4">
            <aside className="text-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ManagementSystem Ltd</p>
            </aside>
        </footer>
    )
}