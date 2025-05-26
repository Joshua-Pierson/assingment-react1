import React from "react";

export default function Registration({ products }) {
    return(
        console.log(products),
        <>
        <h2>Register Your Favorite Products Below</h2>
        <ul>
            <li>{products[0]}</li>
            <li>{products[1]}</li>
        </ul>
        </>
    )

}

