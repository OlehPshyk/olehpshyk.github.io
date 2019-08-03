var $ = jQuery;
$(document).ready(function(){

  //Hero-Slider
  $('.hero-slider').slick({
    arrows: false,    
    autoplay: true, 
    autoplaySpeed: 2000,   
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    dots: false,
    mobileFirst: true,   
    responsive: [
      {
        breakpoint: 767,
        settings: {        
          dots: true
        }
      }
    ]
  });  

  //Course-Slider
  $('.course-slider').slick({  
    arrows: false,     
    autoplay: true,
    initialSlide: 1,
    centerMode: true, 
    variableWidth: true, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,      
    autoplaySpeed: 0,
    speed: 20000,
    cssEase: 'linear'
  });  
  
  var date = moment().format('YYYY-MM-DD');
  var date_before = moment().subtract(1, 'day').format('YYYY-MM-DD');
  //EURUSD - USDTRY - USDCAD - AUDUSD - GBPUSD
  jQuery.get('https://openexchangerates.org/api/historical/' + date + '.json', {app_id: 'f1b35b500b334b54bdd756df874cf986', base: 'USD'}, function(data) {
    //console.log("On " + date + ", 1 Eur was worth " + data.rates.ALL + "ALL Today");
    rate_EUR = (1/data.rates.EUR).toFixed(7);
    rate_122 = data.rates.TRY.toFixed(7);
    rate_AUD = (1/data.rates.AUD).toFixed(7);
    rate_GBP = (1/data.rates.GBP).toFixed(7);
    jQuery.get('https://openexchangerates.org/api/historical/' + date_before + '.json', {app_id: 'f1b35b500b334b54bdd756df874cf986', base: 'USD'}, function(data) {
      //console.log("On " + date + ", 1 Eur was worth " + data.rates.ALL + "ALL Yesterday");
      rate_EUR_1 = (1/data.rates.EUR).toFixed(7); 
      rate_222 = data.rates.TRY.toFixed(7);
      rate_AUD_1 = (1/data.rates.AUD).toFixed(7);
      rate_GBP_1 = (1/data.rates.GBP).toFixed(7);        
      if( rate_EUR > rate_EUR_1 ){
          //console.log('up');
            jQuery('.EURUSD').append('<span class="currency-direction"><span class="tr-up"></span>'+rate_EUR+'</span>');
      }else{
          //console.log('down');
          jQuery('.EURUSD').append('<span class="currency-direction"><span class="tr-down"></span>'+rate_EUR+'</span>');
      }        
      if( rate_122 > rate_222 ){
          //console.log('up');
            jQuery('.USDCHF').append('<span class="currency-direction"><span class="tr-up"></span>'+rate_122+'</span>');
      }else{
          //console.log('down');
          jQuery('.USDCHF').append('<span class="currency-direction"><span class="tr-down"></span>'+rate_122+'</span>');
      }        
      if( rate_AUD > rate_AUD_1 ){
          //console.log('up');
            jQuery('.AUDUSD').append('<span class="currency-direction"><span class="tr-up"></span>'+rate_AUD+'</span>');
      }else{
          //console.log('down');
          jQuery('.AUDUSD').append('<span class="currency-direction"><span class="tr-down"></span>'+rate_AUD+'</span>');
      }        
      if( rate_GBP > rate_GBP_1 ){
          //console.log('up');
            jQuery('.GBPUSD').append('<span class="currency-direction"><span class="tr-up"></span>'+rate_GBP+'</span>');
      }else{
          //console.log('down');
          jQuery('.GBPUSD').append('<span class="currency-direction"><span class="tr-down"></span>'+rate_GBP+'</span>');
      }      
    });    
  });
  //base : EUR , EURTRY
  jQuery.get('https://openexchangerates.org/api/historical/' + date + '.json', {app_id: 'f1b35b500b334b54bdd756df874cf986', base: 'EUR'}, function(data) {
    rate_EURTRY = data.rates.TRY.toFixed(7);
    jQuery.get('https://openexchangerates.org/api/historical/' + date_before + '.json', {app_id: 'f1b35b500b334b54bdd756df874cf986', base: 'EUR'}, function(data){
      // variable *_Y stands for yesterday data
      rate_EURTRY_Y = data.rates.TRY.toFixed(7);
      // here we control if the values are up or down
      if( rate_EURTRY > rate_EURTRY_Y ){
        // this will show if todays data are grater than yesterday
        jQuery('.EURTRY').append('<span class="currency-direction"><span class="tr-up"></span>'+rate_EURTRY+'</span>');
      }else{
        // this will show if todays data are lower than yesterday
        jQuery('.EURTRY').append('<span class="currency-direction"><span class="tr-down"></span>'+rate_EURTRY+'</span>');
      }
    });
  });
  
  // $('.course-slider').css({"opacity": "1","transition": "opacity 3s ease"});

});