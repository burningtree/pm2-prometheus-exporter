var pmx = require('pmx')
var probe = pmx.probe();

// Here the value function will be called each second to get the value
// returned by Object.keys(users).length

var counter1 = 0;

var metric_1 = probe.metric({
  name    : 'Metric 1',
  value   : function() {
    return counter1;
  }
});

// Here we are going to call valvar.set() to set the new value
var metric_2 = probe.metric({
  name    : 'Metric 2'
});

var meter = probe.meter({
    name      : 'Meter req/sec',
    samples   : 1,  // This is per second. To get per min set this value to 60
    timeframe : 60
  });

  var counter = probe.counter({
    name : 'Counter'
  });

  var histogram = probe.histogram({
    name        : 'Histogram',    
    measurement : 'mean'
  });


  var latency = 0

  setInterval(function() {


    counter1++;

    metric_2.set(0.6)

    counter.inc();

    meter.mark();


    latency = Math.round(Math.random() * 100);
    histogram.update(latency);

  }, 1000);
