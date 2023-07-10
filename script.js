function closeBox() {
    const elem = document.getElementById("container1");
    console.log("close");
    elem.style.display = "none";
}

var observer = new IntersectionObserver(function(entries) {
	// no intersection with screen
	if(entries[0].intersectionRatio === 0)
		document.querySelector("#container2").classList.add("container2-sticky");
	// fully intersects with screen
	else if(entries[0].intersectionRatio === 1)
		document.querySelector("#container2").classList.remove("container2-sticky");
}, { threshold: [0,1] });

observer.observe(document.querySelector("#container2-top"));