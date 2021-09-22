import React,{useEffect} from 'react'
import './other.css'
import './otheranime.css'
import createObserver from './observers.js'

export default function Other() {

    useEffect(() => {
       createObserver()
    })


  const messages = [
      {message: `Hey Asa. Was wondering if you could give your opinion on a new
                festival we're bringing to Lagos. We've just gotten the funding and I don't
                want to get the logistics wrong.`, time: "9:05pm", dir:"right-msg"},
      {message: `Hello Femi, how are you doing? I can definitely help.`, time: "9:15pm",
       dir:"left-msg"},
      {message: `Festivals are a lot of work so you need to get started on all aspects
                right now. You usually have less time than you think.`, time: "9:20pm",
              dir:"left-msg"},
      ]

  return (
    <>
    <section id = "why-container">
    <h1>Why you need <br /> ear1</h1>
    <p>You’ve built an amazing brand and it wasn’t easy.
    So it feels nice when you’re the go-to person in your industry. People pitch you business plans and ask for your advice.
     But where’s the value for you? That’s where we come in.</p>
     <img src = "/aboutlogo.png" id = "aboutlogo" alt = ""/>
     <img src = "/aboutlogo2.png" id = "aboutlogo2" alt = ""/>
    </section>
    <section id = "fans-slide-container">
    <div id = "fans-container">
    <div id = "fans-content-container">
    <button className = "button">Fans</button>
    <h1>Connect with your audience, quickly.</h1>
    <p>On ear1 people pay to talk to you. So all time-wasters, beggars and spammers are filtered
    out so you can focus on connecting with people who mean business. And you get to make
    money in the process.</p>
    </div>
     </div>
     <div id = "slide-show-container">
     <div id = "slide-show-img-container">
     <img src = "/newslideshow2.jpg" className = "slide-image slide-one" alt = ""/>
     <img src = "/atsu.jpg" className = "slide-image slide-two" alt = ""/>
     <img src = "/newslideshow3.jpg" className = "slide-image slide-three" alt = ""/>
     <img src = "/newslideshow1.jpg" className = "slide-image slide-four" alt = ""/>
     </div>
     </div>
    </section>
    <section id = "overview-container">
     <div id = "overview-instruction">
     <div className = "tab">
     <button className = "button">Fans</button>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30.75" stroke="#FFBB62" strokeWidth="2.5"></circle>
    <path d="M33.74 46L32 45L36 38H42C42.5304 38 43.0391 37.7893 43.4142 37.4142C43.7893 37.0391 44 36.5304 44 36V24C44 23.4696 43.7893 22.9609 43.4142 22.5858C43.0391 22.2107 42.5304 22 42 22H22C21.4696 22 20.9609 22.2107 20.5858 22.5858C20.2107 22.9609 20 23.4696 20 24V36C20 36.5304 20.2107 37.0391 20.5858 37.4142C20.9609 37.7893 21.4696 38 22 38H31V40H22C20.9391 40 19.9217 39.5786 19.1716 38.8284C18.4214 38.0783 18 37.0609 18 36V24C18 22.9391 18.4214 21.9217 19.1716 21.1716C19.9217 20.4214 20.9391 20 22 20H42C43.0609 20 44.0783 20.4214 44.8284 21.1716C45.5786 21.9217 46 22.9391 46 24V36C46 37.0609 45.5786 38.0783 44.8284 38.8284C44.0783 39.5786 43.0609 40 42 40H37.16L33.74 46Z" fill="white"></path><path d="M40 26H24V28H40V26Z" fill="white">
    </path><path d="M34 32H24V34H34V32Z" fill="white"></path></svg>
     </div>
     <h1>ear1 is pretty easy to use.</h1>
      <p>Sign up on ear1 and create your free profile.</p>
      <p>Set the price on your profile that people will pay to talk to you.</p>
      <p>Any user on the app can send you a chat request asking to talk to you.</p>
      <p>For each request you accept, the respective user has access
         to your chat inbox for a week, after which they would have to
         pay again for each new week.</p>
      <p>You get paid for every single chat request you accept.</p>
     </div>
      <div id = "overview-demo">
      <div className = "profile">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z" fill="black">
      </path></svg>
       <img src = "/newslideshow2.jpg" alt = ""/>
       <h3>Asa Asika</h3>
      </div>
      <div id ="messages-container">
      {messages.map((a,indx) => {
        return <Messages message = {a.message} time = {a.time} dir = {a.dir} key = {indx}/>
      })}
      </div>
      <div className = "text-box">
      <div className = "text-input-area">
      <p>The first thing to do immediately is...</p>
      <div className = "input-icons">
      <svg className="attachment" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 18.8999L18.9 3.89994C21.4 1.29994 25.5 1.29994 28.1 3.79994C30.7 6.29994 30.7 10.4999 28.1 12.9999L28 13.0999L25.2 15.9999L23.8 14.5999L26.7 11.6999C28.4 9.99994 28.4 7.09994 26.7 5.39994C25 3.69994 22.1 3.59994 20.4 5.29994C20.4 5.29994 20.4 5.29994 20.3 5.39994L5.4 20.2999C3.6 21.9999 3.6 24.8999 5.3 26.5999C7 28.3999 9.9 28.3999 11.6 26.6999C11.6 26.6999 11.6 26.6999 11.7 26.5999L19.1 19.1999C20.1 18.1999 20 16.5999 19.1 15.6999C18.1 14.7999 16.6 14.7999 15.6 15.6999L11.5 19.7999L10.1 18.3999L14.3 14.1999C16.1 12.4999 18.9 12.5999 20.6 14.3999C22.2 16.0999 22.2 18.7999 20.6 20.5999L13.1 28.0999C10.6 30.6999 6.5 30.6999 3.9 28.1999C1.3 25.6999 1.3 21.4999 3.9 18.8999C3.9 18.9999 3.9 18.8999 3.9 18.8999Z" fill="#BBBBBB"></path></svg>
      <svg className="mic" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 14V17C23 18.8565 22.2625 20.637 20.9497 21.9497C19.637 23.2625 17.8565 24 16 24C14.1435 24 12.363 23.2625 11.0503 21.9497C9.7375 20.637 9 18.8565 9 17V14H7V17C7.00105 19.2131 7.81745 21.3482 9.29322 22.9973C10.769 24.6465 12.8006 25.6941 15 25.94V28H11V30H21V28H17V25.94C19.1994 25.6941 21.231 24.6465 22.7068 22.9973C24.1825 21.3482 24.9989 19.2131 25 17V14H23Z" fill="#BBBBBB"></path><path d="M16 22C17.3261 22 18.5979 21.4732 19.5355 20.5355C20.4732 19.5979 21 18.3261 21 17V7C21 5.67392 20.4732 4.40215 19.5355 3.46447C18.5979 2.52678 17.3261 2 16 2C14.6739 2 13.4021 2.52678 12.4645 3.46447C11.5268 4.40215 11 5.67392 11 7V17C11 18.3261 11.5268 19.5979 12.4645 20.5355C13.4021 21.4732 14.6739 22 16 22ZM13 7C13 6.20435 13.3161 5.44129 13.8787 4.87868C14.4413 4.31607 15.2044 4 16 4C16.7956 4 17.5587 4.31607 18.1213 4.87868C18.6839 5.44129 19 6.20435 19 7V17C19 17.7956 18.6839 18.5587 18.1213 19.1213C17.5587 19.6839 16.7956 20 16 20C15.2044 20 14.4413 19.6839 13.8787 19.1213C13.3161 18.5587 13 17.7956 13 17V7Z" fill="#BBBBBB"></path></svg>
      </div>
      </div>
      <svg className="send" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg"><path d="M27.45 15.11L5.45 4.11001C5.27757 4.02377 5.08389 3.98922 4.89228 4.01051C4.70067 4.0318 4.5193 4.10803 4.37 4.23001C4.22742 4.3495 4.12101 4.50639 4.06271 4.68305C4.00441 4.85971 3.99655 5.04912 4.04 5.23001L7 16L4 26.74C3.95923 26.8911 3.95447 27.0496 3.98611 27.2028C4.01774 27.356 4.08489 27.4997 4.18216 27.6223C4.27943 27.7448 4.40409 27.8428 4.54613 27.9084C4.68818 27.9741 4.84363 28.0054 5 28C5.15654 27.9991 5.31068 27.9614 5.45 27.89L27.45 16.89C27.6138 16.8061 27.7513 16.6786 27.8473 16.5216C27.9432 16.3645 27.994 16.1841 27.994 16C27.994 15.816 27.9432 15.6355 27.8473 15.4785C27.7513 15.3214 27.6138 15.1939 27.45 15.11ZM6.55 25.11L8.76 17H18V15H8.76L6.55 6.89001L24.76 16L6.55 25.11Z" fill="black"></path></svg>
      </div>
      </div>
    </section>
    <section id = "influencers-container">
    <div className = "influencers-container-div-one">
    <img src = "phone5.png" alt = ""/>
    </div>
    <div className = "influencer-text">
    <button className = "button">Influencers</button>
    <h1>Earn money while you chat.</h1>
    <p>We take all the complexities out of the way so you can focus
     on talking to your audience and getting paid.</p>
     <p>The money you earn is paid out into the currency of your choice. We currently support
     only Naira and Cedis but plan to keep adding more currencies consistently into the future.</p>
    </div>
    </section>
    <section className = "split">
    <div id = "paid-notification-container">
    <div className = "paid-n-inner">
    <div className = "paid-notification-card">
    <div className = "card-header">
    <img src = "/newslideshow2.jpg" style = {{width:60, height: 60}} alt = ""/>
    <h3>Kofi Ansah <span>has paid ($50) to talk to you</span></h3>
    </div>
    <div className = "card-buttons-container">
    <button className = "decline">Decline</button>
    <button className = "accept">Accept</button>
    </div>
    </div>
    </div>
    </div>

    <div id = "influencers-filter">
    <div className = "tab">
    <button className = "button">Influencer</button>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 44H30C29.4696 44 28.9609 43.7893 28.5858 43.4142C28.2107 43.0391 28 42.5304 28 42V34.41L20.59 27C20.2144 26.6266 20.0022 26.1196 20 25.59V22C20 21.4696 20.2107 20.9609 20.5858 20.5858C20.9609 20.2107 21.4696 20 22 20H42C42.5304 20 43.0391 20.2107 43.4142 20.5858C43.7893 20.9609 44 21.4696 44 22V25.59C43.9978 26.1196 43.7856 26.6266 43.41 27L36 34.41V42C36 42.5304 35.7893 43.0391 35.4142 43.4142C35.0391 43.7893 34.5304 44 34 44ZM22 22V25.59L30 33.59V42H34V33.59L42 25.59V22H22Z" fill="white"></path><circle cx="32" cy="32" r="30.75" stroke="#FF8C62" strokeWidth="2.5"></circle></svg>
    </div>
    <h1>Filter the noise from your DM’s.</h1>
     <p>With a paywall in front of your chat inbox,
      every single person you interact with has something important to discuss.</p>
     <p>You never have to engage with time-wasters anymore. You can also easily
     ‘exempt’ friends and family from paying when requesting to talk to you.</p>
    </div>
    </section>

    <section id = "features">
     <h1>The ear1 assurance.</h1>
     <div className = "features-split">
     <div>
     <article className = "features-info">
     <div className = "icon-line">
     </div>
     <h2>Ease of Use.</h2>
     <p> Anyone can set-up a profile within minutes to get paid for talking.
         With as simple of 3 steps, you can get started using ear1.</p>
     </article>
     <article className = "features-info">
     <div className = "icon-line">
     </div>
     <h2>Local currency support.</h2>
     <p>Ear1 natively supports paying and getting paid
        in local currencies like Cedis, Naira, etc..</p>
     </article>
     <article className = "features-info">
     <h2>Total freedom.</h2>
     <p>Charge as much as you want. Accept as many chat requests as you are
        able to answer. Get paid immediately the chat session is over.</p>
     </article>
     </div>
     <div>
     <img src = "/phone3.png" id = "phone3" alt = ""/>
     </div>
     </div>
    </section>

    <section className = "advert">
    <div className = "advert-container">
    <div className = "hand-container">
    <img src = "/hand.png" id = "hand" alt = ""/>
    </div>
    <div className = "advert-text">
    <h1>Get ahead of your game.</h1>
    <p>Only have high level conversations from now on.</p>
    <div className = "app-play-store">
    <img src = "/playstore.png" alt = ""/>
    <img src = "/appstore.png" alt = ""/>
    </div>
    </div>
    </div>
    </section>
    <hr />
    </>
  )
}




const Messages = ({message,time,dir}) => {
  let cln =  dir ? "text-container " + dir : "text-container"
  return (
    <article className = {cln}>
    <p>{message}</p>
    <p><small>{time}</small></p>
    </article>
  )
}
