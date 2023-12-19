import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div id="main-card-cont">
            <div id="card-container" style={{
                boxShadow: "0 0 5px gray",
                padding: "5px",
                backgroundColor:"#2D3344",
                color:"#90D185"
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.
                
            </div>
            <div style={{
                display:"flex",
                alignItems:"center"
            }}>
                <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="100px" width="100px" style={{
                    borderRadius: "50%"
                }}></img>
                <div>
                    <h4 style={{
                        fontSize:"15px"
                        }}>Gladis Lennon</h4>
                    <p style={{
                        fontSize:"15px",
                        marginLeft:"5px"
                    }}>Head of SEO</p>

                </div>

            </div>
        </div>

    )
}

export default Card
