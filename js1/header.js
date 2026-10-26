const header = document.querySelector("header");

// **snip() insert into dom 
// The menu is coded in place it could be moved to seperate File.
// passing a param this could be a generic loader
if (header) {
    header.insertAdjacentHTML("afterbegin", `
        <nav class="site-nav" aria-label="Main navigation">
            <a href="/JAVASCRIPT-PROJECTS/">Home</a>
            <a href="/JAVASCRIPT-PROJECTS/Basic%20JavaScript%20Projects/">
                Basic Projects
            </a>
            <a href="/JAVASCRIPT-PROJECTS/Advanced%20JavaScript%20Projects/">
                Advanced Projects
            </a>
            <a href="/JAVASCRIPT-PROJECTS/AJAX/">AJAX</a>
            <a href="/JAVASCRIPT-PROJECTS/JQuery/">jQuery</a>
        </nav>
    `);
}