import { useState, useEffect, useCallback } from "react";

export default function handleScroll(section) {
    const [scale, setScale] = useState({ aboutContainer: 1, partnerContainer: 1, timelineContainer: 1 });
    const [distance, setDistance] = useState({ aboutContainer: 0, partnerContainer: 0, timelineContainer: 0 });

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
    }

    useEffect(() => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);

        var distanceCopy = { ...distance };
        distanceCopy[section] = distanceTop;

        setDistance(distanceCopy);
    }, [])


    const handleScroll = useCallback((initDistance) => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);
        var cScale = 1;
        if (window.scrollY > distanceTop + DOM.offsetHeight) {
            cScale = 1.3;
        } else if ((window.scrollY >= initDistance[section]) && (window.scrollY < distanceTop + DOM.offsetHeight)) {
            var value = Math.floor(((window.scrollY - initDistance[section]) * 100) / (DOM.offsetHeight));
            cScale = 0.3 * value / 100 + 1;
        }

        let scaleCopy = { ...scale };
        scaleCopy[section] = cScale;

        setScale(scaleCopy);
    }, []);

    useEffect(() => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);

        var distanceCopy = { ...distance };
        distanceCopy[section] = distanceTop;
        setDistance(distanceCopy);

        window.addEventListener("scroll", () => handleScroll(distanceCopy), true);

        return () => {
            window.removeEventListener("scroll", () => handleScroll(distanceCopy));
        }
    }, [handleScroll]);

    return {
        scale: scale[section]
    }
}
