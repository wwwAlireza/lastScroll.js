// Coded by alireza @myFrontCodes
/*
MIT License

Copyright (c) 2021 alireza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
GitHub repository: https://github.com/wwwAlireza/lastScroll.js
*/
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
