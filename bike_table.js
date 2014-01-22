$(document).ready(function() {

        $('a.bike_pic').bigPicture({
		'prevLabel': '前の写真',
 		'nextLabel': '次の写真',
  		'hideLabel': '閉じる'
	});


	$('#bike_used_table').dataTable({
		aoColumns: [
			null,
			null,
			null,
			null,
			{sType: 'formatted-num' },
			{sType: 'formatted-num' }
			],
		aaSorting: [[3,'asc'], [5,'asc']]
	});

	$('#bike_new_table').dataTable({
		aoColumns: [
			null,
			null,
			null,
			null,
			{sType: 'formatted-num' }
		],
		aaSorting: [[2,'asc'], [4,'asc']]
	});
});
