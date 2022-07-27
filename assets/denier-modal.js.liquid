(function DenierModal(){

  let resizeTimer = null;

  const denierResizeHandler = function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {

      // Reset the sliders on window resize
      resetSliders(); 
                
      }, 250);
  };


  const resetSliders = function() {
    document.querySelector( '#denier-range-input' ).value = 0;
    document.querySelector( '#denier-skin-tone-input' ).value = 0;
    window.jQuery( '#denier-modal .skintone-track' ).css( "transform", "translate3d(0px, 0px, 0px)" );
    window.jQuery( '#denier-modal .denier-track' ).css( "transform", "translate3d(0px, 0px, 0px)" );

    window.jQuery( '#denier-modal .skintone-track .slick-slide picture img' ).css('display','none');
    // Reset the sheerness level on the Skin tone images
    window.jQuery( '#denier-modal .skintone-track .slick-slide picture img[data-denier="0"]' ).css('display','block');

    // On mobile, display the first image of each slider
    if(window.jQuery( window ).width() < 768) {
      document.querySelector('#denier-modal .skintone-track .slick-slide').style.display = 'block';
      document.querySelector('#denier-modal .denier-track .slick-slide').style.display = 'block';
    }
  };

  const getSlideWidth = function() {
    if(window.jQuery( window ).width() > 768 && window.jQuery( window ).width() < 900 ) {
      return -279;
    }

    if(window.jQuery( window ).width() >= 900 ) {
      return -320;
    }
  }; 

  const openDenierModal = function() {
    document.getElementById('denier-modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    document.addEventListener('click', denierWindowListener);
    window.jQuery(window).on('resize', denierResizeHandler);

    if( window.jQuery(window).width() < 768 ){
      document.querySelector('#denier-modal .skintone-track .slick-slide').style.display = 'block';
      document.querySelector('#denier-modal .denier-track .slick-slide').style.display = 'block';
    }
    
  };

  const closeDenierModal= function() {
    document.getElementById('denier-modal').style.display = 'none';
    document.querySelector('body').style.overflow = '';
    document.removeEventListener('click', denierWindowListener);
    window.jQuery(window).off('resize', denierResizeHandler);

    document.querySelector( '#denier-range-input' ).value = 0;
    document.querySelector( '#denier-skin-tone-input' ).value = 0;
  };

  const denierWindowListener = function(e) {
    if( e.target == window.jQuery('#denier-modal')[0] || e.target == window.jQuery('#denier-modal .modal__inner')[0] ){
      closeDenierModal();
    }
  };

  const addDenierModalListeners = function() {
    
    window.jQuery('#denier-modal .js-modal-close').click(function () {
      closeDenierModal();
    });

    window.jQuery('.denier-trigger__btn').click(function(){
      openDenierModal();
    });

    const skinToneChangeHandler = function(value) {
        if( window.jQuery(window).width() < 768 ) {
          const slideIndex = value;
          window.jQuery( '#denier-modal .skintone-track .slick-slide' ).css("display", "none");
          window.jQuery( '#denier-modal .skintone-track .slick-slide[data-index="' + slideIndex + '"]' ).css("display", "block");
        } else {
          const newPosition = getSlideWidth() * value;
          window.jQuery( '#denier-modal .skintone-track' ).css( "transform", "translate3d("+ newPosition +"px, 0px, 0px)" );
        }
    };

    window.jQuery('#denier-modal .skin-tone-labels span').click(function(){
      document.querySelector( '#denier-skin-tone-input' ).value = this.dataset.value; 
      skinToneChangeHandler(this.dataset.value);
    })

    window.jQuery('#denier-skin-tone-input').on('input change', function (e) {
        skinToneChangeHandler(this.value);
        
    });

    const denierChangeHandler = function(value){
        if( window.jQuery(window).width() < 768 ) {
          const slideIndex = value;
          window.jQuery( '#denier-modal .denier-track .slick-slide' ).css( "display", "none" );
          window.jQuery( '#denier-modal .denier-track .slick-slide[data-index="' + slideIndex + '"]' ).css( "display", "block" );
        } else {
          const newPosition = getSlideWidth() * value;
          window.jQuery( '#denier-modal .denier-track' ).css( "transform", "translate3d("+ newPosition +"px, 0px, 0px)" );
        }

        // Update the images displayed in the skin tone slider
        window.jQuery( '#denier-modal .skintone-track .slick-slide picture img' ).css('display','none');
        // Show the denier image based on the Denier slider
        window.jQuery( '#denier-modal .skintone-track .slick-slide picture img[data-denier="'+ value + '"]' ).css('display','block');
    }

    window.jQuery('#denier-modal .denier-labels span').click(function(){
      document.querySelector( '#denier-range-input' ).value = this.dataset.value; 
      denierChangeHandler(this.dataset.value);
    })

    window.jQuery('#denier-range-input').on('input', function (e) { 
        denierChangeHandler(this.value);
    });

  };

  const initDenierModal = function() {
    addDenierModalListeners();
  };

  window.jQuery(document).ready(function() {
      initDenierModal();
  });

})();

