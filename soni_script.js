// JavaScript Document
var db = openDatabase('soni_db', '1.0', 'soni band db', 2 * 1024 * 1024);
$(document).ready(function(e) {
    console.log("ready!");
	//setup database if it does not exist
	//if it exists then check date with todays date
	//if date is not a soni date then show message saying when festival starts bands will appear here
	set_up_soni_db();
});

function add_to_plan2(e,method){
	var val_text =	$(e).val();
	//console.log(val_text);
	var band_id =	$(e).attr("id");
	band_id = band_id.substring(4,band_id.length);
	//console.log(band_id);
	
	if(method==1)
	{
		//remove box from screen and reload fav bands
		//load_band_fav();
		$("#fav"+band_id).animate({height:0},1000,function(){
						load_band_fav();
					}
				);
		
		
	}
	
	if(val_text == "on"){
		//place band on see list - make band_fav 1
		console.log("its on");
		
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET band_fav=1 WHERE id='+band_id+'');
		});
		
		
	}else if(val_text == "off"){
		//take band off see list, make band_fav 0
		console.log("na na na na na");
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET band_fav=0 WHERE id='+band_id+'');
		});
	}
	
}


function set_up_main_page(){
	console.log("setting up...");
	
	var fulldate=getFulldate();
	var time = getFulltime();
	
	//fulldate=20140705;
	//time=1359;
	if (fulldate == 20140704 || fulldate == 20140705 || fulldate == 20140706 )
		{
			 db.transaction(function (txs) {
						txs.executeSql('select * from bands where day = '+fulldate+' and start_time < '+time+' and finish_time > '+time+' ', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{	
									var BandRecord = results.rows.item(i);
									//console.log(BandRecord.band_name+" start time: "+BandRecord.start_time+" stage: "+BandRecord.stage);
									$("#"+BandRecord.stage+"_now_band").text(BandRecord.band_name);
									var finish_time = BandRecord.finish_time.toString();
									finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);

									$("#"+BandRecord.stage+"_now_finish").text(finish_time);
									
									if(BandRecord.band_fav==1){
										$("#"+BandRecord.stage+"_now_band").css("color","#80FF00");
									}else{
										$("#"+BandRecord.stage+"_now_band").css("color","#FFF");
									}
								}
								if(len==0)
								{
									//no bands
								}
						});
						
						next_bands(txs,"Apollo",fulldate,time);
						next_bands(txs,"Saturn",fulldate,time);
						next_bands(txs,"Bohemia",fulldate,time);
						next_bands(txs,"Jagermeister",fulldate,time);
						next_bands(txs,"Satellite",fulldate,time);
						
						
						
			 });
		}else{
			$("#not_time").html("Once The Festival Starts Bands Will Appear Here <br/><br/>"); 
			}
			set_up_lineup(1,"system");
}


function next_bands(txs,StageName,fulldate,time){
	txs.executeSql('select * from bands where day = '+fulldate+' and start_time > '+time+' and stage="'+StageName+'" order by start_time ASC Limit 1', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{			
									var BandRecord = results.rows.item(i);
									//console.log(BandRecord.band_name+" start time: "+BandRecord.start_time+" stage: "+BandRecord.stage);
									$("#"+BandRecord.stage+"_next_band").text(BandRecord.band_name);
									var start_time = BandRecord.start_time.toString();
									start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
									$("#"+BandRecord.stage+"_next_start").text(start_time);
									var finish_time = BandRecord.finish_time.toString();
									finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									$("#"+BandRecord.stage+"_next_finish").text(finish_time);
									if(BandRecord.band_fav==1){
										$("#"+BandRecord.stage+"_next_band").css("color","#80FF00");
									}else{
										$("#"+BandRecord.stage+"_next_band").css("color","#FFF");
									}
									
								}
								
						});
}


function getFulldate()
	{
		var d = new Date();
		//month plus one - starts at 0 plus if lenght 1 add 0 to start
		//day=date,year=fullyear
		var year = d.getFullYear();
		var month = d.getMonth();
		month++;
		month = month < 10 ? '0'+month : month;
		var day = d.getDate();
		day = day < 10 ? '0'+day : day;
		var fulldate = year+''+month+''+day;
		return fulldate;
	}
	function getFulltime()
	{
		var d = new Date();
		var hour = d.getHours();
		hour = hour < 10 ? '0'+hour : hour;
		var minute = d.getMinutes();
		minute = minute < 10 ? '0'+minute : minute;
		var time = hour+''+minute;
		return time;
	}



function set_up_lineup(stageNum,method){
	console.log("reading.. lineup");
	var stageName = "Apollo";
	switch(stageNum){
		case 1:
		//alert("apollo");
		stageName= "Apollo";
		break;
		case 2:
		//alert("saturn");
		stageName= "Saturn";
		break;
		case 3:
		//alert("bohemia");
		stageName = "Bohemia";
		break;
		case 4:
		//alert("jager");
		stageName = "Jagermeister";
		break;
		case 5:
		//alert("Satellite");
		stageName = "Satellite";
		break;
	}
	//var stageName="Apollo";
	$("#stage_name_heading").text(stageName);
	//remove content in tabs
	$("#tab_one,#tab_two,#tab_three").empty();
	 db.transaction(function (txs) {
		 
		
						txs.executeSql('select * from bands where stage = "'+stageName+'" order by start_time DESC ', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{	
								
								var BandRecord = results.rows.item(i);
								var finish_time = BandRecord.finish_time.toString();
								finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									
								var start_time = BandRecord.start_time.toString();
								start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
								
								var flip_off = "selected";
								var flip_on = "";
								if(BandRecord.band_fav==1){
									flip_off="";
									flip_on="selected";
									//console.log(BandRecord.band_fav);
								}
									
								var content = '<div class="lineup_band" ><strong>'+BandRecord.band_name+'</strong>'+
														'<br/><span class="darker_text">'+start_time+' - '+finish_time+'</span><br/>'+
													'<form><select name=flip'+BandRecord.id+' id=flip'+BandRecord.id+' data-role="flipswitch" data-mini="true" data-theme="c" onChange="add_to_plan2(this,0)">'+
													'<option value="off" '+flip_off+' >Off</option> <option value="on" '+flip_on+' >On</option></select></form> </div>';
									
									if(BandRecord.day==20140704){
									$("#tab_one").append(content);
									}
									if(BandRecord.day==20140705){
									$("#tab_two").append(content);
									}
									if(BandRecord.day==20140706){
									$("#tab_three").append(content);
									}
										
								}
								$(".lineup_band").trigger('create');
								$("#tabs").trigger('updatelayout');
								
						});
			 });
			 
			 if(method=="panel"){
				$("#stage_panel").panel("close");
			 }
}

function bg_chang(day,sel){
	//3D505B -selected
	//D1CCD2 - unactive
	if(day==1){
	$("#"+sel+"_fri").css("background-color","#3D505B");
	$("#"+sel+"_fri").css("color","#FFF");
	$("#"+sel+"_sat").css("background-color","#D1CCD2");
	$("#"+sel+"_sat").css("color","#000");
	$("#"+sel+"_sun").css("background-color","#D1CCD2");
	$("#"+sel+"_sun").css("color","#000");
	}
	if(day==2){
	$("#"+sel+"_fri").css("background-color","#D1CCD2");
	$("#"+sel+"_fri").css("color","#000");
	$("#"+sel+"_sat").css("background-color","#3D505B");
	$("#"+sel+"_sat").css("color","#FFF");
	$("#"+sel+"_sun").css("background-color","#D1CCD2");
	$("#"+sel+"_sun").css("color","#000");
	}
	if(day==3){
	$("#"+sel+"_fri").css("background-color","#D1CCD2");
	$("#"+sel+"_fri").css("color","#000");
	$("#"+sel+"_sat").css("background-color","#D1CCD2");
	$("#"+sel+"_sat").css("color","#000");
	$("#"+sel+"_sun").css("background-color","#3D505B");
	$("#"+sel+"_sun").css("color","#FFF");
	}

}


function load_band_fav(){
		$("#tab_one_day,#tab_two_day,#tab_three_day").empty();
	console.log("loading fav bands...");
	
	 db.transaction(function (txs) {
						txs.executeSql('select * from bands where band_fav=1 order by start_time ASC ', [], function(txs, results){
							var len = results.rows.length, i;
							
							//1 fri 2 sat 3 sun
							var preEnd_1 = 0;
							var preEnd_2 = 0;
							var preEnd_3 = 0;
							var preBand_1 = "";
							var preBand_2 = "";
							var preBand_3 = "";
							var preId_1 = "";
							var preId_2 = "";
							var preId_3 = "";
							var count_1 = 0;
							var count_2 = 0;
							var count_3 = 0;
							
							for(i=0;i<len;i++)
								{	
								var BandRecord = results.rows.item(i);
																
								
								var finish_time = BandRecord.finish_time.toString();
								finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									
								var start_time = BandRecord.start_time.toString();
								start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
								
								
									
								var content = '<div id=fav'+BandRecord.id+' class="lineup_band" ><strong>'+BandRecord.band_name+'</strong>'+
														'<br/><span class="darker_text">'+BandRecord.stage+' at '+start_time+' - '+finish_time+'</span><br/>'+
													'<form><select name=flip'+BandRecord.id+' id=flip'+BandRecord.id+' data-role="flipswitch" data-mini="true" data-theme="c" onChange="add_to_plan2(this,1)">'+
													'<option value="off" >Off</option> <option value="on" selected >On</option></select></form> </div>';
									
									
									
									if(BandRecord.day==20140704){
									$("#tab_one_day").append(content);
									if(count_1>0){
										if(preEnd_1>BandRecord.start_time)
												{
													//clash
													//console.log("clash");
													$("#fav"+BandRecord.id).append("Clash with "+preBand_1+"!");
													$("#fav"+preId_1).append("Clash with "+BandRecord.band_name+"!");
													$("#fav"+BandRecord.id+", #fav"+preId_1).addClass("clash_bands");
												}
											}
									count_1++;
									preBand_1 = BandRecord.band_name;
									preEnd_1 = BandRecord.finish_time;
									preId_1 = BandRecord.id;
									}
									
									
									if(BandRecord.day==20140705){
									$("#tab_two_day").append(content);
									if(count_2>0){
										if(preEnd_2>BandRecord.start_time)
												{
													//clash
													$("#fav"+BandRecord.id).append("Clash with "+preBand_2+"!");
													$("#fav"+preId_2).append("Clash with "+BandRecord.band_name+"!");
													$("#fav"+BandRecord.id+", #fav"+preId_2).addClass("clash_bands");
												}
											}
									count_2++;
									preBand_2 = BandRecord.band_name;
									preEnd_2 = BandRecord.finish_time;
									preId_2 = BandRecord.id;
									}
									
									
									if(BandRecord.day==20140706){
									$("#tab_three_day").append(content);
									if(count_3>0){
										if(preEnd_3>BandRecord.start_time)
												{
													//clash
													$("#fav"+BandRecord.id).append("Clash with "+preBand_3+"!");
													$("#fav"+preId_3).append("Clash with "+BandRecord.band_name+"!");
													$("#fav"+BandRecord.id+", #fav"+preId_3).addClass("clash_bands");
												}
											}
									count_3++;
									preBand_3 = BandRecord.band_name;
									preEnd_3 = BandRecord.finish_time;
									preId_3 = BandRecord.id;
									}
																
									
									
									
										
								}
								$(".lineup_band").trigger('create');
								$("#tabs_day").trigger('updatelayout');
								
						});
			 });
	
}

