
Highcharts.theme = {
    colors: ['#028482', 'black',],
   
    title: {
        style: {
            color: '#000',
            font: '24pt Didot, Times, serif',
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 11pt Didot, Times, serif',
        }
    },

    legend: {
        itemStyle: {
            font: '14pt Didot, Times, serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);