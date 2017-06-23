// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['От',18 ],
          ['До', 100]
        ]);

        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['От',18 ],
          ['До', 30]
        ]);


        // Set chart options
        var options = {
                        'width':30,
                        'height':30,
                        'legend': 'none',
                        'pieSliceText': 'none',                        
                        'chartArea':{left:0,top:0,right:0,bottom:0,width:'100%',height:'100%'},
                        'pieSliceBorderColor': 'transparent',
                        'backgroundColor':'transparent',
                        'slices': {
                          overflow:'visible',
                          0: { color: '#E91E63' },
                          1: { color: 'blue' },
                        },
                        tooltip: { trigger: 'none' },

                        
                     };

        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Topping');
        data3.addColumn('number', 'Slices');
        data3.addRows([
          ['От',18 ],
          ['До', 10]
        ]);


        // Set chart options
        var options = {
                        'width':30,
                        'height':30,
                        'legend': 'none',
                        'pieSliceText': 'none',                        
                        'chartArea':{left:0,top:0,right:0,bottom:0,width:'100%',height:'100%'},
                        'pieSliceBorderColor': 'transparent',
                        'backgroundColor':'transparent',
                        'slices': {
                          0: { color: '#E91E63' },
                          1: { color: 'blue' },
                        },
                        tooltip: { trigger: 'none' },

                        
                     };
        var data4 = new google.visualization.DataTable();
        data4.addColumn('string', 'Topping');
        data4.addColumn('number', 'Slices');
        data4.addRows([
          ['От',18 ],
          ['До', 5]
        ]);


        // Set chart options
        var options = {
                        'width':30,
                        'height':30,
                        'legend': 'none',
                        'pieSliceText': 'none',                        
                        'chartArea':{left:0,top:0,right:0,bottom:0,width:'100%',height:'100%'},
                        'pieSliceBorderColor': 'transparent',
                        'backgroundColor':'transparent',
                        'slices': {
                          overflow:'visible',
                          0: { color: '#E91E63' },
                          1: { color: 'blue' },
                        },
                        tooltip: { trigger: 'none' },

                        
                     };



        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('chart3'));
        var chart4 = new google.visualization.PieChart(document.getElementById('chart4'));
        chart.draw(data, options);
        chart2.draw(data2, options);
        chart3.draw(data3, options);
        chart4.draw(data4, options);
      }