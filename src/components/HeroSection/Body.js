import React from 'react'
import Button from "../ButtonSection/Button"
import './Body.css'
import Card from '../cardsSection/Card'

function Body() {
    return (
        <div id="main-body">
            <div id="top-body">
                <h1>Let Us Find Your<br></br><span>Forever Food</span></h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.      <br /><span>Nesciunt illo tenetur fuga ducimus numquam ea!</span> </p>
                <div id="buttons">
                    <Button id="search-now" buttonText="Search Now" />
                    <Button id="know-more" buttonText="Know More" />
                </div>
            </div>

            <div id="middle-body">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" width="600px"></img>
                <div id="middle-right-sec">
                    <h2>Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit.<br></br> Tempore, debitis.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti,<br></br> beatae, magni dolores provident quaerat totam eos, aperiam<br></br> architecto eius quis quibusdam fugiat dicta.</p>
                    <Button id="get-in-touch" buttonText="Get in Touch" />
                </div>

            </div>
            <div id="body-down" style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center",
                gap:"40px",
            }}>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
            </div>



        </div>
    )
}

export default Body
