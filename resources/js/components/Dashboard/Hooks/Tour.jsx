import React from 'react'
import { useEffect } from "react";
import introJs from 'intro.js';

function Tour({ itemName, children, updateCriteria = [], condition = true }) {

    useEffect(() => {

        if (condition) {
            var hasTour = parseInt(localStorage.getItem(itemName));

            if (!hasTour) {
                setTimeout(() => {
                    introJs()
                    introJs().setOptions({
                        showBullets: false
                    }).start()

                    localStorage.setItem(itemName, 1);
                }, 1000);

            }

        }


    }, updateCriteria)

    return (
        <div>{children}</div>
    )
}

export default Tour;