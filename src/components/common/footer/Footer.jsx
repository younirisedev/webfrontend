import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Younirise</h1>
            
            

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Office no 445A , Boulevard Towers by BramhaCorp, Camp, Pune, Maharashtra 411001
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9021169628
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                youniriseeducation@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          
        </p>
      </div>
    </>
  )
}

export default Footer
