import { useState, useEffect, useCallback } from "react";

export default function handleScroll(section, object) {
    const [scale, setScale] = useState({ about: 1, partners: 1, timeline: 1 });
    const [opacity, setOpacity] = useState({ about: 1, partners: 1, timeline: 1 });

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
    }

    const handleScroll = useCallback(() => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);
        var scale = 1, opacity = 1;
        if (window.scrollY > distanceTop + DOM.offsetHeight) {
            scale = 1.3;
            opacity = 0;
        } else {
            var value = Math.floor(window.scrollY / (window.scrollY + DOM.offsetHeight) * 100);
            opacity = value / 100;
            scale = 0.3 * value / 100 + 1;
        }

        setScale(...scale, {});
        setOpacity(opacity);


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
