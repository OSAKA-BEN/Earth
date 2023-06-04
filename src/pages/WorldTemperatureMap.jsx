import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function WorldTemperatureMap() {
  const ref = useRef();
  const [countryName, setCountryName] = React.useState("");

  useEffect(() => {
    const width = 800, height = 800;

    const projection = d3.geoOrthographic()
      .scale(350)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .precision(.1)
      .rotate([0, 0, 0]);

    const path = d3.geoPath()
      .projection(projection);

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // Append all meridians and parallels
    const graticule = d3.geoGraticule();
    svg.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path);

    d3.json("/world-countries.json").then(function (collection) {
		svg.selectAll("path")
		.data(collection.features.sort((a, b) => a.properties.name.localeCompare(b.properties.name)))
		.enter().append("a")
        .attr("xlink:href", d => "https://www.google.com/search?q=" + d.properties.name)
        .append("path")
        .attr("d", path)
        .attr("class", "country")
        .attr("id", d => d.id)
		.attr("fill", "white")
        .on("mouseover", function (event, d) {
          d3.select(this).style("fill", "#0ff");
          setCountryName(d.properties.name);  // Update the state here
        })
        .on("mouseout", function (event, d) {
          d3.select(this).style("fill", "");
          setCountryName("");  // Clear the state here
        });

    });

    const lambda = d3.scaleLinear()
      .domain([0, width])
      .range([-180, 180]);

    const phi = d3.scaleLinear()
      .domain([0, height])
      .range([90, -90]);

    var drag = d3.drag().subject(function () {
      var r = projection.rotate();
      return {
        x: lambda.invert(r[0]),
        y: phi.invert(r[1])
      };
    }).on("drag", function (event) {
      projection.rotate([lambda(event.x), phi(event.y)]);

      svg.selectAll(".graticule")
        .datum(graticule)
        .attr("d", path);

      svg.selectAll(".country")
        .attr("d", path);
    });

    svg.call(drag);

  }, []);

  return (
    <div className='p-4 z-[1]'>
      <h1 className="alien-title text-center font-extrabold text-3xl tracking-wider shadow-neon">
        {countryName || 'Hover over a country'}
      </h1>
      <h2 className="text-center text-2xl font-bold">
        {countryName || 'Hover over a country'}
      </h2>
      <svg ref={ref}></svg>
    </div>
  );
}

export default WorldTemperatureMap;
