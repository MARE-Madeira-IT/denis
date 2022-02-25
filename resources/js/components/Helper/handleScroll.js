import { useState, useEffect, useCallback } from "react";

export default function handleScroll(section) {
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
    }

    const handleScroll = useCallback(() => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);
        var cScale = 1, cOpacity = 1;
        if (window.scrollY > distanceTop + DOM.offsetHeight) {
            cScale = 1.3;
            cOpacity = 0;
        } else {
            var value = Math.floor(window.scrollY / (window.scrollY + DOM.offsetHeight) * 100);
            cOpacity = value / 100;
            cScale = 0.3 * value / 100 + 1;
        }

        setScale(cScale);
        setOpacity(cOpacity);


    }, []);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll, true);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return {
        opacity: opacity,
        scale: scale
    }
}
