
var myFrames=[];
var fetched = -1;
if (window.addEventListener){window.addEventListener('load', initProps, false);
window.addEventListener('load', loadViewCount, false);
} 
else if (window.attachEvent){window.attachEvent('onload', initProps);
window.attachEvent('onload', loadViewCount);
}

function showViewCount(data){
 var div = document.createElement('div');
 div.innerHTML ="<b>"+data.entry["yt$statistics"].viewCount+"</b>";
 div.style.marginTop = "5px";
 div.style.display = "table";
 div.style.position = "relative";
 div.style.textAlign = "right";
 div.style.fontFamily = "Arial";
 div.innerHTML += "<div style='border-bottom: 2px solid #c0c0c0;width:100%;margin: 5px 0px 5px 0px'></div>"
 div.innerHTML += "<div><img style='margin: 0px 5px 0px 20px' src='http://i.imgur.com/1y1eaVA.png'/>"+data.entry["yt$rating"].numLikes+"<img style='margin: 0px 5px 0px 20px' src='http://i.imgur.com/vwWod4J.png'/>"+data.entry["yt$rating"].numDislikes+"</div>";   
 myFrames[fetched].parentNode.insertBefore(div, myFrames[fetched].nextSibling);
 div.style.left = (parseInt(myFrames[fetched].offsetLeft)+parseInt(myFrames[fetched].width)-parseInt(div.clientWidth))+"px";
 if(fetched < myFrames.length-1){
  loadViewCount();
 }
}

function loadViewCount(){
 fetched++;
 var script = document.createElement('script');
 var videoId = myFrames[fetched].src.split("embed/")[1].split("?")[0];
 script.src = "http://gdata.youtube.com/feeds/api/videos/"+videoId+"?v=2&alt=json&callback=showViewCount";
 myFrames[fetched].parentNode.appendChild(script);
}
function initProps(){
 var allFrames = document.getElementsByTagName("iframe")
 for(var i=0;i<allFrames.length;i++){
  if(allFrames[i].src.indexOf("youtube")>=0)
  myFrames.push(allFrames[i]);
 }
}
