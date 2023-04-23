const nav=document.querySelector("nav")
const plusBtn=document.querySelector(".plus")

function onDrag({movementY})
{
    const navStyle=window.getComputedStyle(nav)
    let top=parseInt(navStyle.top)
    console.log(top)
    let height=parseInt(navStyle.height)
    // console.log(height)
    let windowHeight=parseInt(window.innerHeight)
    // console.log(windowHeight)
    nav.style.top = top>0 ? `${top + movementY}px`:"1px"
    if(top > windowHeight-height)
    nav.style.top=`${windowHeight-height}px`
    // console.log(windowHeight-height)

}

nav.addEventListener("mousedown",() => {
    nav.addEventListener("mousemove",onDrag)
})

nav.addEventListener("mouseup",() => {
    nav.removeEventListener("mousemove",onDrag)
})

nav.addEventListener("mouseleave",() => {
    nav.removeEventListener("mousemove",onDrag)
})
plusBtn.addEventListener("click",() => {
    nav.classList.toggle("open")
})