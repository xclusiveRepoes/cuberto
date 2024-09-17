function smoothScrolling(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
smoothScrolling()

function menu(){
    var line1 =  document.querySelector(".menuBtn .line1");
    var line2 = document.querySelector(".menuBtn .line2");
    var menuIcon = document.querySelector(".menuBtn");
    var i = 0;
    var tl = gsap.timeline();
    tl.to(menuIcon,{
        gap: 0
    },"a")
    tl.to(line1,{
        rotate: 45
    },"a")
    tl.to(line2,{
        rotate: -45
    },"a")
    tl.to(".sideMenu",{
        right: 0,
        duration: 1
    },"a")
    tl.from(".social h6",{
        x: 50,
        opacity: 0,
        stagger: .04
    },"b")
    tl.from(".rElem h5",{
        x: 50,
        opacity: 0,
        stagger: .04
    }, "b")

    tl.pause()
    menuIcon.addEventListener("click",()=>{
        i++;
        if(i%2!=0){
            tl.play()
        }
        else{
            tl.reverse()
        }
    })
    document.querySelector(".main").addEventListener("click",()=>{
        i = 0;
        tl.reverse()
    })
}
menu()

function customCursor(){
    var cursor = document.querySelector(".customCursor")
    document.querySelector("body").addEventListener("mousemove",(dets)=>{
        gsap.to(cursor,{
            left: dets.x,
            top: dets.y
        })
        // cursor.style.transform = `translate(-50%, -50%)`
    })
}
customCursor();

function videoMouse(){
    var video = document.querySelector(".page1");
    var cursor = document.querySelector(".customCursor")
    video.addEventListener("mouseenter",()=>{
        gsap.to(".customCursor",{
            scale: 6.5,
            backgroundColor: "rgba(233, 233, 233, 0.849)"
        })
        cursor.innerHTML = "play reel"
    })
    video.addEventListener("mouseleave",()=>{
        gsap.to(".customCursor",{
            scale: 1,
            backgroundColor: "black"
        })
        cursor.innerHTML = ""
    })
}
videoMouse();

function lineColor(){
    var page3 = document.querySelector(".page3");
    gsap.to(".line",{
        backgroundColor : "white",
        scrollTrigger:{
            trigger: page3,
            scroller: ".main",
            scrub: 2,
            end: "top 70%"
        }
    })
    gsap.to(".line",{
        backgroundColor : "black",
        scrollTrigger:{
            trigger: ".page4",
            scroller: ".main",
            scrub: 2,
            end: "top 70%"
        }
    })
}
lineColor();

function dynamo1(){
    var cards1 = [
        {heading: "Punto Page", video: "c1.mp4"},
        {heading: "Riyadh", video: "c2.mp4"},        
        {heading: "Qvino", video: "c3.mp4"},
        {heading: "Zelt", video: "c4.mp4"},
        {heading: "Cisco", video: "c5.mp4"},
    ]
    var cards2 = [
        {heading: "Kelvin Zero", video: "c6.mp4"},
        {heading: "Magma", video: "c7.mp4"},        
        {heading: "Flipaclip", video: "c8.mp4"},
        {heading: "Potion", video: "c9.mp4"},
        {heading: "Ferrumpipe", video: "c10.mp4"},
    ]
    var col1 = document.querySelector(".column1");
    var col2 = document.querySelector(".column2")
    var clutter = "";
    cards1.forEach((x) =>{
        clutter += `
        <div class="box3">
            <video src="${x.video}" loop muted></video>
            <h1>${x.heading}</h1>
        </div> 
        `
    })
    col1.innerHTML = clutter;
    var clutterPrime = ""
    cards2.forEach((y) =>{
        clutterPrime += `
        <div class="box3">
            <video src="${y.video}" loop muted></video>
            <h1>${y.heading}</h1>
        </div> 
        `
    })
    col2.innerHTML = clutterPrime;
}
dynamo1();

function videoPlay(){
    var box = document.querySelectorAll(".box3");
    var video = document.querySelectorAll(".box3 video");
    var cursor = document.querySelector(".customCursor");
    var page3 = document.querySelector(".page3");
    page3.addEventListener("mouseenter",()=>{
        gsap.to(".customCursor",{
            backgroundColor: "white"
        })
    })
    page3.addEventListener("mouseleave",()=>{
        gsap.to(".customCursor",{
            backgroundColor: "black"
        })
    })
    box.forEach((x, index) =>{
        x.addEventListener("mouseenter", ()=>{
            video[index].play();
            gsap.to(".customCursor",{
                scale: 5,
                backgroundColor: "white"
            })
            cursor.innerHTML = "Explore"
        })
    })
    box.forEach((x, index) =>{
        x.addEventListener("mouseleave", ()=>{
            video[index].pause();
            video[index].currentTime = 0;
            gsap.to(".customCursor",{
                scale: 1,
                backgroundColor: "white"
            })
            cursor.innerHTML = ""
        })
    })
}
videoPlay();

function dynamo2(){
    var data = [
        {name: "How To Make Epic Website // Frontend development", img : "1.png"},
        {name: "Cuberto Mouse Follower", img : "2.png"},
        {name: "Making switch with SVG Distortion Effect", img : "3.jpg"},
        {name: "UI/UX Design Tips/Volume9", img : "5.png"},
        {name: "Liquid navigation in After Effects", img : "6.png"},
        {name: "How to prepare your design portfolio on Behance", img : "7.png"},
        {name: "Liquid Trasition in After Effects", img : "8.png"},
        {name: "Dynamic marquee effect", img : "9.png"},
        {name: "Cuberto Particles", img : "10.png"},
        {name: "Cuberto Boilerplate(Full version)", img : "11.png"},
    ]
    var bottom5 = document.querySelector(".bottom5");
    var page5 = document.querySelector(".page5");
    var clutter = "";
    data.forEach((x) =>{
        clutter +=`
             <div class="box5">
                <img src="${x.img}" alt="">
                <h4>${x.name}</h4>
            </div>
        `
    })
    bottom5.innerHTML = clutter;
    page5.addEventListener("mouseenter",()=>{
        gsap.to(".customCursor",{
            backgroundColor: "white"
        })
    })
    page5.addEventListener("mouseleave",()=>{
        gsap.to(".customCursor",{
            backgroundColor: "black"
        })
    })
}
dynamo2();

function box5Cursor(){
    var cursor = document.querySelector(".customCursor")
    let box5 = document.querySelectorAll(".box5")
    box5.forEach((x) =>{
        x.addEventListener("mouseenter", () =>{
            gsap.to(".customCursor",{
                scale: 5
            })
            cursor.innerHTML = "Scroll"
        })
        x.addEventListener("mouseleave", () =>{
            gsap.to(".customCursor",{
                scale: 1
            })
            cursor.innerHTML = ""
        })
    })
}
box5Cursor()

function h1Anim(){
    gsap.from(".s1",{
        y: `${100}%`,
        duration: 1,
        stagger: .3
    })
    gsap.from(".s2",{
        y: `${100}%`,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            start: "top 90%",
            scrub: 2,
            end: "top 10%"
        }
    })
    gsap.from(".circleH",{
        scale: 0,
        duration: 1
    })
    gsap.from(".left2 video, .right2 button",{
        scale: 0,
        duration: .5,
        scrollTrigger:{
            trigger: ".page2",
            scroller: ".main",
            scrub: 2,
            end: "top 20%"
        }
    })
    gsap.from(".box3",{
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger:{
            trigger: ".column1",
            scroller: ".main",
            start: "top 95%",
            scrub: 2,
            end: "top 0%"
        }
    })
}
h1Anim()

function marquee(){
    var main = document.querySelector(".main");
    var b6 = document.querySelector(".b6");
    main.addEventListener("wheel",(dets)=>{
        if(dets.deltaY>0){
            gsap.to(".b6",{
                transform: "translateX(-200%)", 
                duration: 8,
                repeat: -1,
                ease: "none"
            })
        }
        else{
        gsap.to(".b6",{
            transform: "translate(0%)",
            duration: 8,
            ease: "none",
            repeat: -1
        })
        }
    })
}
marquee();

function box6(){
    var bottom6 = document.querySelector(".bottom6");
    var elems = [
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/448224472_1136112281053760_6819421041192435539_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=t8LLaZc-rKQQ7kNvgHS1dJ1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYClINAYP86tspMDlqDt4a9ua2yiuwKWhLPGxHzaskaUhA&oe=669C549D", title: "cubertodesign"},
        {img: "https://cdn.dribbble.com/userupload/15048184/file/original-66fe6a7120cf88d0c4022ed3c6aabeda.png?resize=400x300", title: "cuberto"},
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/447782419_1000146605089838_6015703961655881459_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=J8eA7H0qqcUQ7kNvgFjaD_B&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBj19uEkfKbInUcgJ2nVDzwKshte8C19FsSw2zHWPWI7A&oe=669C4699", title: "cubertodesign"},
        {img: "https://cdn.dribbble.com/userupload/14946205/file/still-dd463712f94c6831a501f0381b403b91.png?resize=400x300", title: "cuberto"},
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/447066647_1459807157996046_4187083229220520353_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=zGj_U7NG0C8Q7kNvgG3R4Ef&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAVJ2QQ8exWhWB2zofsWA5f5ilQ8WdNVCF-tzRgRL6ZSQ&oe=669C6310", title: "cubertodesign"},
        {img: "https://cdn.dribbble.com/userupload/14831469/file/still-2b0f8d008ab77eac58e583c01e2919b0.png?resize=400x300", title: "cuberto"},
        {img: "https://cdn.dribbble.com/userupload/14791373/file/still-ba55f6f96a38875d8b5d1689c81a28c8.png?resize=400x300", title: "cubertodesign"},
        {img: "https://cdn.dribbble.com/userupload/14693277/file/still-6f2ff966c612a1259b665391a864ff35.png?resize=400x300", title: "cuberto"},
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/436469866_275976705507718_738607228487818626_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=tLche-17yIQQ7kNvgFT6F7V&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBM6MvkqE2C0w1ffUgXSpbsOX-B-r3tB5Ma6-riYOhlHA&oe=669C4AC4", title: "cubertodesign"},
        {img: "https://cdn.dribbble.com/userupload/14590903/file/original-ade91066bc5ddcc8465f65e280a87f1c.png?resize=400x300", title: "cuberto"},
        {img: "https://cdn.dribbble.com/userupload/14569946/file/still-39934077f590d108d0b9d66b3b3e66d2.png?resize=400x300", title: "cubertodesing"},
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/441373292_1116325536251400_3453299506358713232_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=mAAdUQcwfhoQ7kNvgFDxSBo&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA2OJ3BHry_6Lggh2yEGm3IF9vwdXvUYk3mYrZYWkkY9Q&oe=669C5514", title: "cuberto"},
        {img: "https://cdn.dribbble.com/userupload/14392763/file/still-5766e2286131c0eb5344c6d1bdf4b14d.png?resize=400x300", title: "cubertodesign"},
        {img: "https://scontent.cdninstagram.com/v/t51.29350-15/440341880_289823247510050_1082076346039428995_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=ticS6BYWBmUQ7kNvgHr4dRk&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCXuMTEBzmaZJMU2gcANU3weOXyAnU5hbeV0Is2KRn5MA&oe=669C579D", title: "cuberto"},
    ]
    var clutter = "";
    elems.forEach((x) =>{
        clutter += `<div class="box6"><div class="boxC6"><img src="${x.img}" alt=""></div><h6>${x.title}</h6></div>`
    });
    bottom6.innerHTML = clutter
}
box6()