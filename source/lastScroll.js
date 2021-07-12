// Coded by alireza @myFrontCodes
(function() {
    window.addEventListener("load", () => {
        window.addEventListener("scroll", setScroll);
        let consoleStyles = [
            "color:green",
            "font-weight: 600",
            "font-size:.8rem",
        ].join(";");
        console.log("%c lastScroll installed successfully", consoleStyles);
        getScroll();

        function setScroll() {
            localStorage.setItem("scrollTop", window.scrollY);
            localStorage.setItem("scrollLeft", window.scrollX);
        };

        function getScroll() {
            try {
                var sTop = localStorage.getItem("scrollTop");
                var sLeft = localStorage.getItem("scrollLeft");
            } catch (e) {
                console.error(`lastScroll problem : ${e}`)
            }
            if (sTop || sLeft) {
                sTop = parseInt(sTop);
                sLeft = parseInt(sLeft);
                try {
                    window.scrollTo(sLeft, sTop);
                } catch (e) {
                    console.error(`lastScroll problem : ${e}`)
                }
            } else {
                console.log("scroll not found")
            }
        };
    })
})()