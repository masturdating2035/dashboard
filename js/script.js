var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [{
            label: 'تعداد',
            data: [{
                y: 10,
            }, {
                x: 5,
                y: 20
            }, {
                x: 10,
                y: 32
            }, {
                x: 15,
                y: 10
            }, {
                x: 20,
                y: 47
            }, {
                x: 25,
                y: 10
            }, {
                x: 30,
                y: 17
            }],
            backgroundColor: [
                '#fbe5cd'
            ],
            borderColor: [
                '#ef9c18'
            ],
            borderWidth: 1,
            lineTension: 0,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },

});
