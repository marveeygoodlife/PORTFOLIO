/* Scroll to top button function
This code generates a button inside the document, gives it an attribute, and inserts the button into the document. */

const scrollToTop = function() {
    const scrollButton = document.createElement("button");
    scrollButton.innerHTML = "&uarr;"; // Use HTML entity for up arrow
    scrollButton.setAttribute('id', "scrollButton");
    scrollButton.classList.add('scroll-to-top-button'); // Add a class for styling
  
    // Add click event listener to scroll to top
    scrollButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling
    });
  
    // Append the *actual button* to the body
    document.body.appendChild(scrollButton);
  
    // Show/hide scroll button based on scroll position
    const ShowScrollButton = function () {
      //Added a console.log to see if the function is getting triggered
      console.log("ShowScrollButton triggered");
      if (window.scrollY > window.innerHeight) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show');
      }
    };
    window.addEventListener('scroll', ShowScrollButton);
  };
  
  scrollToTop();
  
  // Add some CSS to make the button visible and position it nicely
  const style = document.createElement('style');
  style.innerHTML = `
    .scroll-to-top-button {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: blueviolet;
      color: white;
      border: none;
      border-radius: 50%;
      padding: 10px 15px;
      cursor: pointer;
      z-index: 1000; /* Ensure it's on top */
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .scroll-to-top-button.show {
      display: block;
      opacity: 1;
    }
  `;
  document.head.appendChild(style);


/* 
  /* FUNCTIONS TO SHOW NAV OVERLAY 
  const opennavMenu = document.getElementById('openNav');
  const closenavMenu = document.getElementById('closeNav');
  const navbar = document.getElementById("navigation");
  const navigation = document.getElementById('mainnav');
  const mainContainer = document.getElementById('container');

  const opennav = ()=> {
    console.log('Arrow function');
    navbar.style.display = 'flex';
    opennavMenu.classList.add('hidden');
    closenavMenu.classList.remove('hidden');
    closenavMenu.style.color = "white";
    opennavMenu.style.color = "white;"
    navigation.style.backgroundColor = '#333333';
      navigation.style.width = '200px';
     mainContainer.marginLeft = '200px';
     closenavMenu.style.textDecoration = 'none';
   };

  const closenav = ()=> {
    navbar.style.display = 'none';
    opennavMenu.classList.remove('hidden');
    closenavMenu.classList.add('hidden');
    navigation.style.width = '0';
     mainContainer.marginLeft = '0';
    console.log('Close nav is active');
  };


opennavMenu.addEventListener('click', opennav);
closenavMenu.addEventListener('click', closenav);


 */