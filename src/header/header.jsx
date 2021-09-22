import React,{useEffect,useRef} from 'react'
import './header.css'


export default function Header() {

   useEffect(() => {
     createObserver()
  })


  function createObserver() {
  let options = {
    threshold: [0.25,0.70]
  }
  let prevRatio = 0.0

  let observer = new IntersectionObserver(handleIntersect,options);


  let element = document.querySelector(".tilt")
     observer.observe(element)

  function handleIntersect(entries, observer) {
    entries.forEach((entry,i) => {
        if(entry.intersectionRatio > prevRatio) {
            entry.target.classList.add("t-right");
            entry.target.nextSibling.classList.add("t-left");
        } else {
          entry.target.classList.remove("t-right")
          entry.target.nextSibling.classList.remove("t-left")
        }
        prevRatio = entry.intersectionRatio
    });
  }

}



 const menu = useRef()

  const showMenu = ()=> {
    if(menu.current.style.height === "50vh") {
        menu.current.style.height = "0"
    }else {
        menu.current.style.height = "50vh"
        let arr = document.getElementsByClassName("close-line")
        arr = Array.from(arr)
        arr[0].classList.add("line-one")
        arr[1].classList.add("line-two")
    }
  }

  const closeMenu = () => {
     menu.current.style.height = "0"
     let arr = document.getElementsByClassName("close-line")
     arr = Array.from(arr)
     arr[0].classList.remove("line-one")
     arr[1].classList.remove("line-two")
   }

 const handleLink = (e) => {
      let link = e.target.innerText
      switch (link) {
        case "For Fans":
           document.getElementById("fans-container").scrollIntoView()
          break;
        case "For Influencers":
          document.getElementById("influencers-container").scrollIntoView()
          break;
        case "FAQ's":
          document.getElementById("features").scrollIntoView()
          break;
        default:


      }
 }


  return (
    <>
    <div className = "menu-links" ref = {menu}>
    <div className =  "close-menu" onClick = {closeMenu}>
    <div className = "close-line "></div>
    <div className = "close-line"></div>
    </div>
    <p><a href = "/" className = "nav-link">Home</a></p>
    <p><a href = "#fans" className = "nav-link" onClick = {handleLink}>For Fans </a></p>
    <p><a href = "#Influencers" className = "nav-link" onClick = {handleLink}>For Influencers </a></p>
    <p><a href = "#faq's" className = "nav-link" onClick = {handleLink}>FAQ's</a></p>
    </div>
    <header className="App-header">
      <nav id = "nav-bar">
      <div id = "logo-container">
      <img src='/logo.png' className="App-logo" alt="logo" />
      </div>
      <div className = "menu" onClick = {showMenu}>
      <div className = "menu-line"></div>
      <div className = "menu-line"></div>
      <div className = "menu-line"></div>
      </div>
      <div id = "nav-links-container">
      <a href = "/" className = "nav-link">Home</a>
      <a href = "#fans" className = "nav-link" onClick = {handleLink}>For Fans </a>
      <a href = "#Influencers" className = "nav-link" onClick = {handleLink}>For Influencers </a>
      <a href = "#faq's" className = "nav-link" onClick = {handleLink}>FAQ's</a>
      </div>
      </nav>
      <main id = "main-landing">
      <div className = "main-text-container">
       <h1>Replace your email and DMs with
       a chat app where your audience pays you to answer their messages.</h1>
       <p>Do you get overwhelmed with messages from hundreds of people who
        want something from you? Get paid in Naira and Cedis
        now to respond to those messages.</p>
        <div className = "links">
        <a href = "#watch-video">"watch video demo"</a>
        <div></div>
        <a href = "who">"who is on ear1 ?"</a>
        </div>
        </div>
        <div className = "play-app-store">
        <img src = "/playstore.png" alt = ""/>
        <img src = "/appstore.png" alt = ""/>
        </div>
      </main>
      <div className = "phones-container">
      <div>
      <img src = "phone4.png" className = "phones tilt" alt = ""/>
      <img src = "phone2.png" className = "phones tilt" alt = ""/>
      <img src = "phone1.png" className = "phones" alt = ""/>
      </div>
      </div>
    </header>
    </>
  )
}
