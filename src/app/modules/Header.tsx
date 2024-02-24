import '../styles/Header.css';

export default function Header(){
    return (
        <header>
          <div className='header-container'>
            <img src="assets/guild.png" alt="logo" className='header-logo' />

          <div className='header-contact-container'>
            <div className='header-phone-number'>
                <img src="assets/call.png" alt="" />
                <a href="tel:0876331121">087 633 1121</a>
            </div>

            <div className='header-email'>
              <img src="assets/email.png" alt="" />
              <a href="mailto:rddeego@gmail.com">rddeego@gmail.com</a>
            </div>
          </div>
          </div>
            
        </header>
    );
}