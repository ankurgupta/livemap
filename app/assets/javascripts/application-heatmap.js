(function ($) {
    var Maps = window.Maps || {};
    window.Maps = Maps;
}(window.jQuery));

(function ($, Maps) {
    window.onload = function(){
        var myLatlng = new google.maps.LatLng(0, 0);
        var myOptions = {
          zoom: 2,
          zoomControl: false,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: false,
          scrollwheel: true,
          draggable: false,
          navigationControl: true,
          mapTypeControl: false,
          scaleControl: false,
          disableDoubleClickZoom: false,
          streetViewControl: true
        };
        Maps.map = new google.maps.Map(document.getElementById("heatmapArea"), myOptions);        
        Maps.heatmap = new HeatmapOverlay(Maps.map, {"radius":15, "visible":true, "opacity":60});
        google.maps.event.addListenerOnce(Maps.map, "idle", function(){
            $.ajax({
              url: "/addresses",
              dataType: "JSON",
              success: function(data){
                $.each(data, function(index, address){
                  Maps.heatmap.addDataPoint(address.latitude,address.longitude,8);
                });
              }
            })
        });
    };
}(window.jQuery, window.Maps));