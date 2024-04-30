import "./notfound.css"
const NotFound = () => {
    return <>
        <div className='not-found text-primary p-y-100'>
            <h2>NotFound</h2>
            <h1> Oops !</h1>
            <h4>404 - PAGE NOT FOUND</h4>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        </div>
        <div className="about-btn flex justify-center">
            <a className="btn-primary" href="/">Go To Home</a>
        </div>
    </>

}
export default NotFound;