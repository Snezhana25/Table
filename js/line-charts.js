


  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0, color: '#FF0000'},
          legend:{position:'bottom', maxLines: 3},
          backgroundColor:'transparent',
          colors:['red','blue'],
          height: 500,
          width: 800,
          textStyle: {
            fontSize: 18,
          }
          
        };

        var chart = new google.visualization.AreaChart(document.getElementById('line'));
        chart.draw(data, options);
      }
   