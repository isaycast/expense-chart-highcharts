const softRed = 'hsl(10, 79%, 65%)'
const cyan = 'hsl(186, 34%, 60%)'

const barConfig = {
    chart: {
        height: 200,
        backgroundColor:"#FFFAF5",
        type: 'column'
    },
    plotOptions: {
        series: {
            borderRadius: 4
        }
    },
    legend: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 0,
        visible: false
    },
    title: {
        align: 'left',
        text: 'Spending - Last 7 days',
        style: { "color": "#333333", "fontSize": "18px" ,"font-weight": "bold"}
    },
   
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    tooltip: {
        pointFormat: '<b>{point.y}</b><br/>',
        valuePrefix: ' $',
        headerFormat:''
    },
    
    series: [{
        data: [
            {y: 17.45, color:softRed},
            {y: 34.91, color:softRed}, 
            {y : 52.36, color : softRed}, 
            {y :31.07, color :softRed}, 
            {y : 23.39, color : softRed}, 
            {y : 43.28, color : softRed}, 
            {y : 25.48, color : softRed}]
    }]
};

export {barConfig, cyan}
