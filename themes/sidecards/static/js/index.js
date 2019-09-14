for (const bar of $All(".coverFeatureBar")){
	bar.addEventListener("click", function() {
		// Remove active class from already active bar
		for(const activebar of $All(".bg-primary-highlight")) {
			activebar.classList.remove("active")
		}

		const imgURL = bar.getAttribute("data-image")
		$(".feature-image").src = imgURL
		// Add to current bar
		bar.classList.add("active")

	});
}




function $ (el) {
	return document.querySelector(el)
}

function $All (el) {
	return document.querySelectorAll(el)
}