
//   const introContent = document.getElementById("intro-content");
//     const content = document.getElementById("what_i_do-content");

//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;
//     const maxScroll = window.innerHeight / 3; // how far before it disappears

//     // Calculate progress (0 → 1)
//     const progress = Math.min(scrollY / maxScroll, 1);

//     // Move up & fade out
//     introContent.style.transform = `translateY(-${progress * 220}px)`;
//     introContent.style.opacity = `${1 - progress}`;

//       content.style.transform = `translateY(-${progress * 220}px)`;
//     content.style.opacity = `${1 - progress}`;
//   });



  const introContent = document.getElementById("intro-content");
  const whatIDoSection = document.getElementById("what_i_do");
  const whatIDoContent = document.getElementById("what_i_do-content");

  const whatIAmSection = document.getElementById('what_i_am');

  const whatIAmContent = document.getElementById('what_i_am-content');



  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    /* --------------------
       Intro fade/move out
    -------------------- */
    const introMax = vh / 1.2; // how far before intro disappears
    const introProgress = Math.min(scrollY / introMax, 1);

    introContent.style.transform = `translateY(-${introProgress * 220}px)`;
    introContent.style.opacity = `${1 - introProgress}`;

    /* --------------------
       What I Do slide in
    -------------------- */
    const rect = whatIDoSection.getBoundingClientRect();

    if (rect.top === 0) { 
      // section is stuck at top
      whatIDoContent.style.transform = "translateX(100px)";
      whatIDoContent.style.opacity = "1";
      whatIDoContent.style.transition = "all 0.7s ease-out";
    } else {
      // reset (optional, if you want replay effect when scrolling back up)
      whatIDoContent.style.transform = "translateX(200px)";
      whatIDoContent.style.opacity = "0";
    }



    const whatIAmSectionRect = whatIAmSection.getBoundingClientRect();

    if(whatIAmSectionRect.top === 0){
       // section is stuck at top
     whatIAmContent.style.transform = "translateX(0)";
      whatIAmContent.style.opacity = "1";
      whatIAmContent.style.transition = "all 0.7s ease-out";
    }else{
         // reset (optional, if you want replay effect when scrolling back up)
     whatIAmContent.style.transform = "translateX(-150px)";
      whatIAmContent.style.opacity = "0";
    }
  });