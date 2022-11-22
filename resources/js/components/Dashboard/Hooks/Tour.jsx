import React from 'react'
import { useEffect } from "react";
import introJs from 'intro.js';

function Tour({ itemName, children, updateCriteria = [], condition = true }) {

    useEffect(() => {

        if (condition) {
            console.log(condition)
            var hasTour = parseInt(localStorage.getItem(itemName));

            if (!hasTour) {
                introJs()
                introJs().setOptions({
                    showBullets: false
                }).start()

                localStorage.setItem(itemName, 1);
            }

        }


    }, updateCriteria)

    return (
        <div>{children}</div>
    )
}

export default Tour;