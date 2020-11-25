export const canvasConfig = {
	height: 260,
	theme: 'light2',
	axisY: {
		title: '',
		tickLength: 0,
		lineThickness: 0,
		gridThickness: 0,
		margin: 0,
		labelFormatter: function(e: any) {
			return '';
		}
	},
	axisX: {
		gridThickness: 100,
		gridColor: '#11a389',
		labelFontColor: 'black',
		tickColor: 'white',
		lineColor: 'white'

	},
	data: [{
		lineColor: 'red',
		color: 'blue',
		type: 'line',
		xValueFormatString: 'MMM YYYY'
	}]
}
