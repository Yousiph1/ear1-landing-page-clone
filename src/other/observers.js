
export default function createObserver() {

  let prevRatio = 0.0;

  let messagesObserver = new IntersectionObserver(handleIntersect);

  let element = document.querySelector("#messages-container")
      messagesObserver.observe(element)

  function handleIntersect(entries, observer) {
    if(entries[0].intersectionRatio > prevRatio)  {
      entries[0].target.childNodes.forEach((child, i) => {
        setTimeout(()=> {
          child.classList.add("text-animate")
        }, (i+1) * 500)
      });
    }else {
      entries[0].target.childNodes.forEach((child, i) => {
          child.classList.remove("text-animate")
      });
    }
    prevRatio = entries[0].intersectionRatio
  }

        let prevRatioCard = 0.0
        let paidCardObserver = new IntersectionObserver((entry,observe)=> {
          if(prevRatioCard < entry[0].intersectionRatio) {
            document.getElementsByClassName("paid-notification-card")[0].classList.add("card-animate")
          }else {
            document.getElementsByClassName("paid-notification-card")[0].classList.remove("card-animate")
          }
          prevRatioCard = entry[0].intersectionRatio
        },{threshold:0.5});
        paidCardObserver.observe(document.querySelector("#paid-notification-container"))


      let prevRatioSlide = 0.0
      let slideObserver = new IntersectionObserver((entry,observer) => {
        let timeout
        let interval
             if(prevRatioSlide < entry[0].intersectionRatio) {
               let total = 3
               for(let i = 0; i < 4; i++) {
                timeout = setTimeout(()=> {
                     let cls = "slide-" + (total - i)
                     entry[0].target.childNodes[total - i].classList.add(cls)
                 },(i+1) * 1300)
               }
                 interval = setInterval(()=>{
                 entry[0].target.childNodes.forEach((child, i) => {
                     child.classList.remove("slide-"+i)
                 });
                 for(let i = 0; i < 4; i++) {
                  timeout = setTimeout(()=> {
                       let cls = "slide-" + (total - i)
                       entry[0].target.childNodes[total - i].classList.add(cls)
                   },(i+1) * 1300)
                 }
               },12000)
             }else {
               entry[0].target.childNodes.forEach((child, i) => {
                   child.classList.remove("slide-"+i)
               });
               clearTimeout(timeout)
               clearInterval(interval)
             }
      })
      slideObserver.observe(document.querySelector("#slide-show-img-container"))

}
