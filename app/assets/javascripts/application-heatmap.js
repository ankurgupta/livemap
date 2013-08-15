(function ($) {
    var Maps = window.Maps || {};
    window.Maps = Maps;
}(window.jQuery));

(function ($, Maps) {
    window.onload = function(){
        var myLatlng = new google.maps.LatLng(20, 78);
        var myOptions = {
          zoom: 3,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: false,
          scrollwheel: true,
          draggable: true,
          navigationControl: true,
          mapTypeControl: false,
          scaleControl: true,
          disableDoubleClickZoom: false
        };
        Maps.map = new google.maps.Map(document.getElementById("heatmapArea"), myOptions);        
        Maps.heatmap = new HeatmapOverlay(Maps.map, {"radius":15, "visible":true, "opacity":60});                
        google.maps.event.addListenerOnce(Maps.map, "idle", function(){
            var data = { max: 3, data: [{lat: 19, lng: 78, count: 5},{lat: 20, lng: 78, count: 5}, {lat: 21, lng: 78, count: 5}, {lat: 22, lng: 78, count: 5}, {lat: 23, lng: 78, count: 5}]}
            Maps.heatmap.setDataSet(data);
            Maps.heatmap.addDataPoint(21,78,5);
        });
    };
}(window.jQuery, window.Maps));
