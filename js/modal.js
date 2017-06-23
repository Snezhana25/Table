$(document).ready(function(){
  //click on btn
  $(".btn").click(function() {
    //show modal window
    $("#myModal").modal('show');
  });

 	// var $table = $('#table');
 	// var mydata = 
	// [	
	// 	{
	//       "preview": '',
	//       "data": '<div class="time"><input type="text" placeholder="От"/></div><div class="time"><input type="text" placeholder="До"/></div>',
	//       "status": '<div class="grey"><select><option>Все</option><option>1</option><option>2</option><option>3</option></select></div>',
	//       "platform":'<input type="search" name="serch" placeholder="Поиск...">',
	//       "type": '<div class="grey"><select><option>E</option><option>1</option><option>2</option><option>3</option></select></div>',
	//       "price": '<div class="time"><input type="text" placeholder="От"/></div><div class="time"><input type="text" placeholder="До"/></div>',
	//       "activity": '<div class="time"><i class="fa fa-heart" aria-hidden="true"></i><input type="text" placeholder=". от"/></div><div class="time"><i class="fa fa-heart" aria-hidden="true"></i><input type="text" placeholder=". до"/></div>',
	//       "subscriptions": '<div class="time"><input type="text" placeholder="От"/></div><div class="time"><input type="text" placeholder="До"/></div>',
	//       "gender": '<div class="time"><i class="fa fa-mars" aria-hidden="true"></i><input type="text" placeholder=". от"/></div><div class="time"><i class="fa fa-mars" aria-hidden="true"></i><input type="text" placeholder=". до"/></div>',
	//       "age": '<div class="grey"><select><option>Все</option><option>1</option><option>2</option><option>3</option></select></div>',
	//       "cpa": '<div class="time"><input type="text" placeholder="От"/></div><div class="time"><input type="text" placeholder="До"/></div>',
	//       "filter":'<i class="fa fa-filter" aria-hidden="true"></i><i class="fa fa-times" aria-hidden="true"></i>'
	//     },
	// 	{
	//       "preview": '<img src="img/avatar.png" class="media-photo">',
	//       "data": "16.06.17 16:10",
	//       "status": '<i class="fa fa-check" aria-hidden="true"></i>',
	//       "platform":'<img src="img/smile2.png" class="media-photo"> КиноКайф-Лучшие фильмы<i class="fa fa-vk" aria-hidden="true"></i>',
	//       "type": '<a class="tooltips" href="#"><i class="fa fa-info" aria-hidden="true"></i><span>Information</span></a>',
	//       "price": '7 375 p',
	//       "activity": '<div class="like1"><i class="fa fa-heart" aria-hidden="true"></i>0</div><div class="like"><i class="fa fa-bullhorn" aria-hidden="true"></i>0</div><div class="like"><i class="fa fa-comments" aria-hidden="true"></i>0</div>',
	//       "subscriptions": '0',
	//       "gender": '<div class="round"></div>',
	//       "age": '<div class="round"></div>',
	//       "cpa": '<div class="round"></div>',
	//       "filter":'<i class="fa fa-info-circle" aria-hidden="true"></i>'
	//     },
	//     {
	//       "preview": '<img src="img/photo.jpg" class="media-photo">',
	//       "data": "16.06.17 09:07",
	//       "status": '<i class="fa fa-check" aria-hidden="true"></i>',
	//       "platform":'<img src="img/smile.png" class="media-photo">  ПРИКОЛЫ|Смеякаы<i class="fa fa-vk" aria-hidden="true"></i>',
	//       "type": '<a class="tooltips" href="#"><i class="fa fa-info" aria-hidden="true"></i><span>Information</span></a>',
	//       "price": '7 550 p',
	//       "activity": '<div class="like1"><i class="fa fa-heart" aria-hidden="true"></i>22060</div><div class="like"><i class="fa fa-bullhorn" aria-hidden="true"></i>176</div><div class="like"><i class="fa fa-comments" aria-hidden="true"></i>0</div>',
	//       "subscriptions": '<div class="click">2 875</div>',
	//       "gender": '<div id="chart_div"></div>',
	//       "age": '<div class="round"></div>',
	//       "cpa": '<div class="click">2.6p</div>',
	//       "filter":'<i class="fa fa-info-circle" aria-hidden="true"></i>'
	//     },
	//     {
	//       "preview": '<img src="img/photo.jpg" class="media-photo">',
	//       "data": "16.06.17 09:07",
	//       "status": '<i class="fa fa-check" aria-hidden="true"></i>',
	//       "platform":'<img src="img/sacura.png" class="media-photo"> Бот Максим<i class="fa fa-vk" aria-hidden="true"></i>',
	//       "type": '<a class="tooltips" href="#"><i class="fa fa-info" aria-hidden="true"></i><span>Information</span></a>',
	//       "price": '5 162 p',
	//       "activity": '<div class="like1"><i class="fa fa-heart" aria-hidden="true"></i>2314</div><div class="like"><i class="fa fa-bullhorn" aria-hidden="true"></i>5</div><div class="like"><i class="fa fa-comments" aria-hidden="true"></i>183</div>',
	//       "subscriptions": '<div class="click">1 869</div>',
	//       "gender": '<div id="chart2"></div>',
	//       "age": '<div class="round"></div>',
	//       "cpa": '<div class="click">2.8p</div>',
	//       "filter":'<i class="fa fa-info-circle" aria-hidden="true"></i>'
	//     },
	//     {
	//       "preview": '<img src="img/elliot.jpg" class="media-photo">',
	//       "data": "16.06.17 09:07",
	//       "status": '<i class="fa fa-clone" aria-hidden="true"></i>',
	//       "platform":'<img src="img/smile.png" class="media-photo">  ПРИКОЛЫ|Смеякаы<i class="fa fa-vk" aria-hidden="true"></i>',
	//       "type": '<a class="tooltips" href="#"><i class="fa fa-info" aria-hidden="true"></i><span>Information</span></a>',
	//       "price": '7 550 p',
	//       "activity": '<div class="like1"><i class="fa fa-heart" aria-hidden="true"></i>9406</div><div class="like"><i class="fa fa-bullhorn" aria-hidden="true"></i>28</div><div class="like"><i class="fa fa-comments" aria-hidden="true"></i>0</div>',
	//       "subscriptions": '<div class="click">2 466</div>',
	//       "gender": '<div id="chart3"></div>',
	//       "age": '<div class="round"></div>',
	//       "cpa": '<div class="click">3.0p</div>',
	//       "filter":'<i class="fa fa-info-circle" aria-hidden="true"></i>'
	//     },
	//     {
	//       "preview": '<img src="img/images.png" class="media-photo">',
	//       "data": "16.06.17 09:07",
	//       "status": '<i class="fa fa-clock-o" aria-hidden="true"></i>',
	//       "platform":'<img src="img/smile.png" class="media-photo">  ПРИКОЛЫ|Смеякаы<i class="fa fa-vk" aria-hidden="true"></i>',
	//       "type": '<a class="tooltips" href="#"><i class="fa fa-info" aria-hidden="true"></i><span>Information</span></a>',
	//       "price": '7 550 p',
	//       "activity": '<div class="like1"><i class="fa fa-heart" aria-hidden="true"></i>1792</div><div class="like"><i class="fa fa-bullhorn" aria-hidden="true"></i>741</div><div class="like"><i class="fa fa-comments" aria-hidden="true"></i>0</div>',
	//       "subscriptions": '<div class="click">2 466</div>',
	//       "gender": '<div id="chart4"></div>',
	//       "age": '<div class="round"></div>',
	//       "cpa": '<div class="click">2.1p</div>',
	//       "filter":'<i class="fa fa-info-circle" aria-hidden="true"></i>'
	//     }
    	//...
	// ];
	// Fill table
	// $(function () {
	// 	$('#table').bootstrapTable({
	// 		data: mydata
	// 	});
	// });

	Highcharts.chart('container', {
	    chart: {
	        type: 'line'
	    },
	    
	    xAxis: {
	        categories: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature (°C)'
	        }
	    },
	    plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true
	            },
	            enableMouseTracking: false
	        }	          
	    },
	    series: [{
	        name: 'AddSpoiler',
	        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }, {
	        name: 'Пересечения',
	        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	    }]
	});


});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
