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

        var distanceCopy = { ...distance }; // copying the old datas array
        distanceCopy[section] = distanceTop; // replace e.target.value with whatever you want to change it to

        setDistance(distanceCopy);
    }, [])


    const handleScroll = useCallback((initDistance) => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);
        var cScale = 1;
        if (window.scrollY > distanceTop + DOM.offsetHeight) {
            cScale = 1.3;
        } else if ((window.scrollY >= initDistance[section]) && (window.scrollY < distanceTop + DOM.offsetHeight)) {

            var value = Math.floor(window.scrollY / (initDistance[section] + DOM.offsetHeight) * 100);
            if (section == "partnerContainer") {
                console.log("-------------------------");
                console.log(initDistance[section]);
                console.log(initDistance[section] + DOM.offsetHeight);
                console.log(window.scrollY);
                console.log(value);
            }

            cScale = 0.3 * value / 100 + 1;
        }

        let scaleCopy = { ...scale };
        scaleCopy[section] = cScale;

        setScale(scaleCopy);
    }, []);

    useEffect(() => {
        var DOM = document.getElementById(section);
        var distanceTop = getOffset(DOM);

        var distanceCopy = { ...distance }; // copying the old datas array
        distanceCopy[section] = distanceTop; // replace e.target.value with whatever you want to change it to
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
