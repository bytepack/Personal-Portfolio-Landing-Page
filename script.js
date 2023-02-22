const navigation = document.querySelector("#navbar")
setUpScrollPaddingTop()

// apply it on window resize so that when user change window size or change orientation of device, recalculate the navBarHeight 
window.addEventListener("resize", setUpScrollPaddingTop )

// get navbar height and set it to --scroll-padding variable for html element (document.documentElement means html)
function setUpScrollPaddingTop(){
	const navigationHeight = navigation.getBoundingClientRect().height
	document.documentElement.style.setProperty("--scroll-padding" , navigationHeight+"px")
}
