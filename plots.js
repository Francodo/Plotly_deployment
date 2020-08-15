function init() {
  var selector = d3.select("#selDataset");          // method is used to select the dropdown menu, which has an id of selDataset 

  d3.json("samples.json").then((data) => {          // Used to read data from sample.json data file. The arbitrary argument name is "data"
    console.log(data);
    var sampleNames = data.names;               // Define a variable sampleNames for data.names
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
        buildMetadata(sampleNames[0]);  // Call buildMetadata function to hover at startup
        buildCharts(sampleNames[0]);    // Call buildCharts function to hover at startup

    });
})}

init();

  function buildMetadata(sample) {                     // // newSample is the volonteer ID number to create that specific individual’s information panel and charts
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");                               // Clear the panel for any existing data
     

    Object.entries(result).forEach(([key, value]) => {      // Populate the demographic information panel all data parameters available i.e Key : Value
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      
      });
     
    });
  }

// Create a function "buildCharts"
function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      console.log(result);
  
  // Define a variable Trace1 for the sliced data
  var trace1 = {
    x: result.sample_values.slice(0,10).reverse(),
    y: result.otu_ids.slice(0,10).map(otu_ID => `OTU ${otu_ID}`).reverse(),
    text: result.otu_labels.slice(0,10).reverse(),
    name: "OTUs",
    type: "bar",
    orientation: "h"
  };
  
  // data
  var data = [trace1];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Top 10 bacterial species OTUs",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
   };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", data, layout);

  // Define a variable Trace1 for the data in Bubble plot
  var bubble1 = {
    x: result.otu_ids,
    y: result.sample_values,
    text: result.otu_labels,
    mode:'markers',
    marker: {
        size: result.sample_values,
        color:  result.otu_ids,
        colorscale: "Jet"
    }
   };
 
// data
var data = [bubble1];
  
// Apply the group bubble mode to the layout
var layout = {
    title: "Bacterial species OTUs",
    name: "OTUs",
    type: "bubble"
    
    };
   // Render bubble
   Plotly.newPlot("bubble", data, layout);

   // Build the gauge here
   var data = [
    { 
      domain: { x: result.sample_values.slice(0,10), 
                y:  result.otu_ids.slice(0,10).map(otu_ID => `OTU ${otu_ID}`),
      value: result.otu_labels.slice(0,10)},
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number+delta",
      delta: { reference: 1 },
      gauge: {
        axis: { range: [null, 10] },
        steps: [
          { range: [1, 2], color: "yellow", text:"1-2" },
          { range: [2, 3], color: "orange", text:"2-3" },
          { range: [3, 4], color: "lightgrey", text:"3-4"},
          { range: [4, 5], color: "white", text:"4-5"},
          { range: [5, 6], color: "white", text:"5-6"},
          { range: [6, 7], color: "lightgrey", text:"6-7"},
          { range: [7, 8], color: "orange", text:"4-5"},
          { range: [8, 9], color: "yellow", text: "8-9"},

      ],
      text:["1-2", "2-3", "3-4", "4-5", "6-7", "7-8", "8-9" ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 5
        }
      }
    }
  ];
  
  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };

  Plotly.newPlot('gauge', data, layout);
     
});

  }

  function optionChanged(newSample) {               // optionChanged function is called from the HTML file
    buildMetadata(newSample);                       // newSample is the volonteer ID number to create that specific individual’s information panel and charts
    buildCharts(newSample);
  
  }
