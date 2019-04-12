(function(){
  
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerMenu = document.querySelector("#burgerMenu");
	var topNav = document.querySelector(".topNav"),
		blackBar = document.querySelector("nav"),
		closeBtn = document.querySelector("span");
// function for adding the side menu on button press
	closeBtn.style.display = "none";

	function menuStart() {
		console.log("menu opened");
	}

	function menuEnd() {
		console.log("menu closed");
		burgerMenu.removeAttribute("style");

	}
	function hamburgerMenu() {
		burgerMenu.classList.add("toggleOn");
		burgerMenu.style.WebkitAnimation = "slideOut 0.7s";
		burgerMenu.addEventListener("webkitAnimationStart", menuStart);
		burgerMenu.addEventListener("webkitAnimationEnd", menuEnd);
		topNav.classList.add("toggleOn");
		closeBtn.style.display = "block";
	};

	button.addEventListener("click", hamburgerMenu, false);
	// function for closing the side menu and revealing the full screen if needed.
	function closeMenu() {
		burgerMenu.classList.remove("toggleOn");
		topNav.classList.remove("toggleOn");
		closeBtn.style.display = "none";
	}

	closeBtn.addEventListener("click", closeMenu);

	var projects = document.querySelectorAll(".projImage"),
		tempCloseBtn = document.querySelector("#tempClose"),
		bottom = document.querySelector("#bottomProjects"),
		templatePage = document.querySelector(".templateFS"),
		bar = document.querySelector("#histDivider"),
		top = document.querySelector("#topProjects"),
		bodyBck = document.querySelector("body");

		function testStart() {
			console.log("Animation Fired");
			templatePage.classList.remove("hidden");

		};

		function testEnd() {
			console.log("Animation Ended");
			templatePage.removeAttribute("style");
			if (templatePage.classList.contains('hidden')) {
				templatePage.classList.remove('hidden');
			};
			if (bodyBck.classList.contains('navBck')) {
				templatePage.classList.add('hidden');
			};
		};


		function openTemp() {
		templatePage.style.WebkitAnimation = "Reveal 0.8s";
		templatePage.addEventListener("webkitAnimationStart", testStart);
		templatePage.addEventListener("webkitAnimationEnd", testEnd);
			templatePage.classList.remove("hidden");
			bodyBck.classList.remove("navBck");
			bottom.classList.add('hidden');
			top.classList.add('hidden');
			blackBar.classList.add('hide');
			histDivider.classList.add('hidden');
	};

	projects.forEach(project => project.addEventListener("click", openTemp));
	
	tempCloseBtn.addEventListener("click", function() {
		templatePage.style.WebkitAnimation = "Hide 0.7s";
		templatePage.addEventListener("webkitAnimationStart", testStart);
		templatePage.addEventListener("webkitAnimationEnd", testEnd);
			bodyBck.classList.add("navBck");
			bottom.classList.remove('hidden');
			top.classList.remove('hidden');
			histDivider.classList.remove('hidden');
			blackBar.classList.remove('hide');
	});
	let test = [
	[`test number 1`, `dont appear at the top1`, `dont appear at the middle1`],
	[`test number 2`, `dont appear at the top2`, `dont appear at the middle2`],
	[`test number 3`, `dont appear at the top3`, `dont appear at the middle3`],
	];

	projects.forEach(project => project.addEventListener("click", function() {

		let i = this.className.split(" ")[1].slice(4,5);
		console.log(i);
		let	tempHead = document.querySelector("#templateHead"),
			tempFirstPara = document.querySelector("#para0"),
			tempSecondPara = document.querySelector("#para1");

		tempHead.innerHTML = `${test[i][0]}`;
		tempFirstPara.innerHTML = `${test[i][1]}`;
		tempSecondPara.innerHTML = `${test[i][2]}`;
	}))
})();