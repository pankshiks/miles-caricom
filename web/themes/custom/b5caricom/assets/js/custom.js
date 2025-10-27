 // Initialize Slick Hero slider
    // $(function(){
    //   $('#hero-slider').slick({
    //     dots:true,
    //     arrows:true,
    //     autoplay:true,
    //     autoplaySpeed:4000,
    //     speed:600,
    //     pauseOnHover:true,
    //     adaptiveHeight:false,
    //     prevArrow:'<button type="button" class="slick-prev" aria-label="Previous">Previous</button>',
    //     nextArrow:'<button type="button" class="slick-next" aria-label="Next">Next</button>'
    //   });

    jQuery('.hero-slider').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            pauseOnHover: true,
            adaptiveHeight: false,
            prevArrow: '<button type="button" class="slick-prev" aria-label="Previous">Previous</button>',
            nextArrow: '<button type="button" class="slick-next" aria-label="Next">Next</button>'
          });
    (function ($, Drupal) {
  


      $('#flags-slider').slick({
        slidesToShow:8,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2500,
        responsive:[
          { breakpoint: 1100, settings: { slidesToShow:6 } },
          { breakpoint: 900, settings: { slidesToShow:4 } },
          { breakpoint: 700, settings: { slidesToShow:3 } },
          { breakpoint: 520, settings: { slidesToShow:2 } }
        ]
      });

      // Leaders slider
      $('#leaders-slider').slick({
        centerMode:true,
        centerPadding:'320px',
        slidesToShow:1,
        arrows:false,
        dots:true,
        responsive:[
          { breakpoint: 980, settings: { centerPadding:'160px' } },
          { breakpoint: 640, settings: { centerPadding:'24px' } }
        ]
      });

      $('.cards-slider').slick({
        slidesToShow: 3,       // default (desktop)
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 992,   // below 992px → tablet
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,   // below 700px → mobile
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

       $('#search-btn').on('click', function () {
    $('#search-overlay').addClass('show');
    $('body').css('overflow', 'hidden'); // disable scroll
  });

  // Close overlay on X button
      $('#close-search').on('click', function () {
        $('#search-overlay').removeClass('show');
        $('body').css('overflow', 'unset'); // restore scroll
      });

      // Close overlay on ESC key
      $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
          $('#search-overlay').removeClass('show');
          $('body').css('overflow', 'unset');
        }
      });

      // Optional: Close overlay when clicking outside search box
      $('#search-overlay').on('click', function (e) {
        if (!$(e.target).closest('.search-box').length && !$(e.target).is('#search-btn')) {
          $('#search-overlay').removeClass('show');
          $('body').css('overflow', 'unset');
        }
      });

      $('.timeline-track').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: { slidesToShow: 4 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 576,
            settings: { slidesToShow: 2 }
          }
        ]
      });

      document.getElementById("resumeUpload").addEventListener("change", function(){
        const fileName = this.files[0]?.name || "Choose file";
        document.querySelector(".custom-file-label").textContent = fileName;
      });

    });