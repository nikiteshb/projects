// Custom js Start

$(document).ready(function () {
	$(".menu-btn").click(function () {
		$(".menu").toggleClass("menu-open");
	});

	Reveal.initialize({
		controls: true,
		progress: false,
		center: true,
		transition: 'slide', // none/fade/slide/convex/concave/zoom
		backgroundTransition: 'fade',
		history: true,
		mouseWheel: true,
		simplemenu: {
			// Use menuselector to assign the menu items to be used. You might want to point 
			// it to '.menu li a' for example. In that case the class of the a's will toggle, 
			// not the class of the li's.
			menuselector: '.menu a',

			// Use a specific class for the active state.
			activeclass: 'active'
		},
		dependencies: [
			{ src: 'assets/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
			{ src: 'assets/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
			{ src: 'assets/plugin/highlight/highlight.js' },
			{ src: 'assets/plugin/search/search.js', async: true },
			{ src: 'assets/plugin/zoom-js/zoom.js', async: true },
			{ src: 'assets/plugin/notes/notes.js', async: true },
			{ src: 'assets/plugin/simplemenu/simplemenu.js' },
			{ src: 'assets/plugin/verticator/verticator.js' },
		]
	});

});