   
    window.onscroll = function() {
      
      myPaddingFunction()};

   
    var paddingHomeAdjustment = document.getElementById("home"); 
    var paddingProductsAdjustment = document.getElementById("products");
    var paddingServicesAdjustment = document.getElementById("services");
    var paddingContactUsAdjustment = document.getElementById("contact");
    var paddingAboutAdjustment = document.getElementById("aboutus");
    var paddingGalleryAdjustment = document.getElementById("tabimages");
    

    var navbark = document.getElementById("po");
    var sticky = navbark.offsetTop;
    
    function myPaddingFunction() {

     
    
      if (window.pageYOffset >= sticky ) {
        
        
       
        navbark.classList.add("sticky");
        paddingHomeAdjustment.style.paddingTop = "90px";
        paddingProductsAdjustment.style.paddingTop ="90px";
        paddingServicesAdjustment.style.paddingTop = "90px";
        paddingContactUsAdjustment.style.paddingTop = "90px";
        paddingAboutAdjustment.style.paddingTop = "90px";
        paddingGalleryAdjustment.style.paddingTop = "90px";
        

      } 
     else {
        navbark.classList.remove("sticky");
        paddingHomeAdjustment.style.paddingTop = "0px";
        
      
      }

      
        
    };
    
    function myFunction(imgs) {
        // Get the expanded image
        var expandImg = document.getElementById("expandedImg");
        // Get the image text
        var imgText = document.getElementById("imgtext");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.src;
        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.alt;
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";
        }

    var currentYear = document.getElementById("currentyear");
    currentYear.innerHTML= new Date().getFullYear().toString();

  
    
  $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

   
  
    $('.carousel').carousel({
      interval: 3000, // Slide transition interval in milliseconds
      pause: 'hover' // Pause the carousel on hover
    });
    
