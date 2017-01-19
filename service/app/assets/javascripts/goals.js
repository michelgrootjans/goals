(function() {
  var $goals;
  function initialize() {
    $goals = $("#goals");

    var widget_url = "http://localhost:3001/goals.js?callback=?"
    $.getJSON(widget_url, function(data) {
      $goals.html(data.html);
    });
  }

  return {
    initialize: initialize
  }
})().initialize();