
Highcharts.theme = {
    colors: ['#028482', 'black',],
   
    title: {
        style: {
            color: '#000',
            font: '24pt Dense-Regular, Times, serif',
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 11pt Dense-Regular, Times, serif',
        }
    },

    legend: {
        itemStyle: {
            font: '14pt Dense-Regular, Times, serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);