console.log('index.js is loading!');

// handles clicking on the hamburger toggle
function handleToggle (){
  $('.navbar_link_toggle').click( function(){
    console.log('toggle icon clicked!');
    $('.expanded_toggle_links').toggleClass('hidden').slideToggle();
  });
}

//handles clicking on the JC logo
const handleJcClick = function (){
  // $('nav').on('click', '' function(){

  // });
};

//hadnles clicking on About link
const handleAboutClick = function(){
  $('.about').on('click', function(){

  });
};

//handles clicking on the Projects link
const handleProjectClick = function(){
  $('.portfolio').on('click', function(){

  });
};

//handles clicking on the Contact link 
const handleContactClick = function(){
  $('.contact').on('click', function(){

  });
};

function render() {
  // Render app when loads
  handleToggle();
  // if (STORE.expanded === true) {
  //   $('.expanded_toggle_links').removeClass('.hidden');
  // } else {
  //   $('.expanded_toggle_links').addClass('.hidden');
  // }
}

$(render());