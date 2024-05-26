import "./Style.scss";

const Header = () => {
    return (
        <div className='inw-flex-row inw-header-container'>
            <div className='inw-col-1 inwlogo-container'>
                <div className='inw-pre-logo'>
                    {/* <span className='inw-prelogo'>&lt;/&gt;</span> */}
                    <span className='inw-branding'>&lt;inspex / dev&gt;</span>
                </div>
                <div className='inw-inspex-name'>
                </div>
            </div>
            {/* <div className='inw-col-1 inw-header-btn-container'>
                <button className="inw-primary-button">Github</button>
            </div> */}
        </div>
    )
}

export default Header;