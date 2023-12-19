import React from 'react'
import './Footer.css'

function Footer() {
    const reload = () => {
        window.location.reload();
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "cneter",
            alignItems: "center",
            backgroundColor: "lightgray",
            marginTop: "40px",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                gap:'10px',
                marginTop:"40px"
               }}>
                <img src='https://flowbite.com/docs/images/logo.svg' style={{
                    height:"80px",
                    width:"80px"
                }}></img>

                <h4 style={{
                    fontSize:"30px"
                }}>logoipsuim</h4>
            </div>

            <p style={{
                padding: "30px",
                margin: "30px",
                fontSize: "15px"
            }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Incidunt consequuntur amet culpa cum itaque neque.
            </p>
            <ul style={{
                listStyle: "none",
                display: "flex",
                gap: "70px",
                margin: "-10px 0 0 -40px"
            }}>
                <li className='li' onClick={reload}>About</li>
                <li className='li' onClick={reload}>Careers</li>
                <li className='li' onClick={reload}>History</li>
                <li className='li' onClick={reload}>Services</li>
                <li className='li' onClick={reload}>Projects</li>
                <li className='li' onClick={reload}>Blogs</li>
            </ul>
            <div style={{
                display: 'flex',
                gap: "40px",
                marginTop: '40px',

            }}>
                <a href='https://www.facebook.com/geekster.in/'>
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href='https://www.instagram.com/geekster.in/?hl=en'>
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href='https://www.facebook.com/geekster.in/'>
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href='https://github.com/AaqibBashirMir'>
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href='https://www.facebook.com/geekster.in/'>
                    <i class="fa-solid fa-globe"></i>
                </a>
            </div>

        </div>
    )
}

export default Footer
