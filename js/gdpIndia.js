
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, -10]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(yearFormatter);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function yearFormatter(d) {
    return d.substr(2,2);
  }

  d3.json("json/gdpIndia.json",
  function(error, data) {
    x.domain(data.map(
      function(d) {
        return d.year;
      }));
    y.domain([-10, d3.max(data,
      function(d) {
         return d.value;
       })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("transform", "rotate(0)")
      .attr("x", 1)
      .attr("dx", "176em")
      .style("text-anchor", "end")
      .text("Year");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value");

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x",
      function(d) {
        return x(d.year);
      })
      .attr("width", x.rangeBand())
      .attr("y",
      function(d) {
        return y(d.value);
      })
      .attr("height",
      function(d) {
        return height - y(d.value);
      });
  });
