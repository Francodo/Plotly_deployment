# Plotly_deployment
Francis Odo

Background 
Dashboard concept is a process in which data story telling is presented in an effective and persuasive visualization format that depicts key performance indicators interactively in real time. This project combine HTML and JavaScript capability to create an interactive data presentation front.
Objective
The objective is to create a Bar Chart, Bubble Chart and a Drop Down Selection Option interface that takes data information from a JSON formatted file and display the analysis in all three types of graphs. 
Tools/Environment
The development environment is Visual Studio Code. Programming is done in three major area, namely:
1.	HTML 
2.	Java Script 
3.	Web Server  
Code Plan
(1)	Java Script–(a) Create a main function init() to initialize the processes
 		(b) Use the d3.select method to create a dropdown selector
		© Apply D3.json to read the “samples.json” data file
		(d) Use .forEach() method for the “option select”
(e) Append row and cell for each value in the row
		(f) Create a function to build metadata
		(g) Clear PANEL for any existing data
		(h) Use Object.entries() to populate the Demographic Information Panel
		(i) Create a function for building the charts
(j) Create entries for Bar chart
(k) Create entries for Bubble chart
(l) Create the entries for the Gauge/indicator
(2) HTML 	(a) Verify entries for the Bar Chart
		(b) Verify entries for the Bubble Chart
		© Verify entries for the Gauge
		(c) Provide links or file path to sample.json file 
 Approach
•	The index.html is the main engine of the document page. 
•	The “plots.js” Java Script provides dynamic and interactive experience to the user.
Conclusion
The application function properly as expected by displaying dropdown options and populating the demographic information panel based on the option ID of choice. All interactive and simultaneously.
 In addition, the application presents the user with the Bar Chart and Bubble Chart analysis side by side. 
The Gauge development is incomplete due to time constraint. Extra work is required on the needle and data feed.
