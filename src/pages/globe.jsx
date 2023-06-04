function mapWorldTemperature() {
    const width = 800, height = 800;

	const projection = d3.geoOrthographic()
		.scale(350)
		.translate([width / 2, height / 2])
		.clipAngle(90) // without this options countries on the other side are visible
		.precision(.1)
		.rotate([0,0,0]);

	const path = d3.geoPath()
		.projection(projection);

	const svg = d3.select("#chart").append("svg")
		.attr("id", "world")
		.attr("width", width)
		.attr("height", height);
	
	// Append all meridians and parallels
	const graticule = d3.geoGraticule();
	svg.append("path")
		.datum(graticule)
		.attr("class", "graticule")
		.attr("d", path);
		
	d3.json("https://www.datavis.fr/tutorials/d3js/map-world-temperature/world-countries.json").then(function(collection) {
		var countries = svg.selectAll("path")
			.data(collection.features)
			.enter().append("path")
			.attr("d", path)
			.attr("class", "country")
			.attr("id", d => d.id);
			
		d3.csv("../../world-temperature.csv").then(function(data) {
			// 60 is the number of class in temperature.css
			var quantile = d3.scaleQuantile().domain([
				d3.min(data, e => e.temperature),
				d3.max(data, e => +e.temperature)])
				.range(d3.range(60));
				
			var legend = svg.append('g')
				.attr('transform', 'translate(35, 10)')
				.attr('id', 'legend');
				
			legend.selectAll('.colorbar')
				.data(d3.range(60))
				.enter().append('rect')
				.attr('y', d => d * 5 + 'px')
				.attr('height', '5px')
				.attr('width', '20px')
				.attr('x', '0px')
				.attr("class", d => "temperature-" + d);
			
			legendScale = d3.scaleLinear()
				.domain([d3.min(data, e => +e.temperature), d3.max(data, e => +e.temperature)])
				.range([0, 60 * 5]);
				
			svg.append("g")
				.attr('transform', 'translate(25, 10)')
				.call(d3.axisLeft(legendScale).ticks(10));
			
			data.forEach(function(e,i) {
				d3.select("#" + e.country)
					.attr("class", d => "country temperature-" + quantile(+e.temperature));
			});
		});
	});
	
	const Î» = d3.scaleLinear()
		.domain([0, width])
		.range([-180, 180]);

    const Ï† = d3.scaleLinear()
		.domain([0, height])
		.range([90, -90]);

    var drag = d3.drag().subject(function() {
        var r = projection.rotate();
        return {
			x: Î».invert(r[0]),
			y: Ï†.invert(r[1])
		};
	}).on("drag", function(event) {
		projection.rotate([Î»(event.x), Ï†(event.y)]);

		svg.selectAll(".graticule")
			.datum(graticule)
			.attr("d", path);
		
		svg.selectAll(".country")
			.attr("d", path);
	});
	
	svg.call(drag);
}