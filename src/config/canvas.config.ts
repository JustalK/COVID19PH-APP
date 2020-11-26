export const canvasConfig = {
	height: 260,
	theme: 'light2',
	backgroundColor: '#11a389',
	axisY: {
		title: '',
		tickLength: 0,
		lineThickness: 0,
		gridThickness: 0,
		maximum: 9500,
		minimum: 8500,
		margin: 0,
		labelFormatter: function(e: any) {
			return '';
		}
	},
	axisX: {
		title: '',
		tickLength: 0,
		lineThickness: 0,
		gridThickness: 0,
		minimum: 1484000000000,
		margin: 0,
		labelFormatter: function(e: any) {
			return '';
		}
	},
	data: [{
		indexLabel: " {x} {y} cases",
		indexLabelPlacement: "auto",
		indexLabelMaxWidth: 80,
    	indexLabelWrap: true,
		indexLabelOrientation: "horizontal",
		indexLabelFontColor: "white",
		indexLabelFontSize: "16",
		lineColor: 'red',
		color: 'white',
		type: 'line',
		xValueFormatString: 'DD/MM/YY'
	}]
}
