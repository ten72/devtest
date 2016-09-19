// JavaScript Document
function swap(image, title, caption){
	document.getElementById("img_lg").innerHTML = '<img src="'+image+'" alt=""/>';
	document.getElementById("img_title").innerHTML = title;
	document.getElementById("img_caption").innerHTML = caption;
}

function playVideo(){
    document.getElementById('video').play();
};

function loadTiles(start, end){
	var xmlhttp = new XMLHttpRequest();
	var url = "masonry-data.json";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var masonryData = JSON.parse(this.responseText);
			//alert (masonryData.tiles);
			masonry(masonryData.tiles, start, end);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function masonry(tiles, start, end) {
    var masonry = document.getElementById("tiles").innerHTML;
    var i;
    for(i = start; i < end; i++) {
		var image=tiles[i].image;
		if(image){
			image='<img src="'+tiles[i].image+'">';
		}else{
			image='<div class="no-image"></div>';
		}
		masonry += '<div class="item">'+
		image+
		'<span class="news-title">'+tiles[i].heading+'</span>'+
		'<p>'+tiles[i].content+'</p>'+
		'<a href="" class="learn-more">'+tiles[i].meta+'</a>'+
        '</div>';
    }
    document.getElementById("tiles").innerHTML = masonry;
}