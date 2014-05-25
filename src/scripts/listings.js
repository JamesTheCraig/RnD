
var RnD = RnD || {};

RnD.listings = {
    
    utils : RnD.Utilities, 

    init: function() {

        var _self = this;
        
        var screenWidth = window.screen.availWidth,
            screenHeight = window.screen.availHeight,
            chromeHeight = screenHeight - document.documentElement.clientHeight;    

        var $list = $('#the-listings'),
            $listings = $list.find('.list-item');            

        // -($listings.length * $listings.height())            
        $list.css({             
            translateX : -(screenHeight / 2),            
            width : screenWidth,
            height: screenHeight,
            opacity: 0
        });

        $listings.css({ opacity: 0 });

        $list.velocity({            
            translateX: 0,
            opacity: 1
            },{
            duration: 280,
            easing: 'easeOut',
            complete: function() {
                // $($listings.get().reverse()).each( function(i) {
                $listings.each( function(i) {

                    var $this = $(this),
                        $links = $this.find('a'),
                        hue = _self.utils.randRGB(100, 200, 255);

                    $links.css({ background : hue });            

                    $this.velocity({

                        translateX: -50,
                        opacity: 0.50
                        },{
                        duration: 280,
                        delay: ( i * 100 ),
                        easing: 'easeOut',
                        complete: function() {
                            $this.velocity({
                                translateX: 0,
                                opacity: 1
                                },{
                                duration: 380,
                                easing: 'easeOutQuint'
                            });
                        }
                    });
                });
            }
        });           
    }
        
};

RnD.listings.init();

