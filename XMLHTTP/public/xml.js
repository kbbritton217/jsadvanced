var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;

	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	return xmlHttp;
}

function process() {
	if(xmlHttp) {
		try {
			xmlHttp.open("GET", "xml.txt", true); // does not start a connection with the server; it configures the connection settings
			xmlHttp.onreadystatechange = handleServerResponse; // set onreadystatechange before you .send()
			xmlHttp.send(null);
		} catch (e) {
			alert( e.toString() );
		}
	}
}

function handleServerResponse() {
	div = document.getElementById('div');
	if(xmlHttp.readyState == 1) { //readyState 1 means a connection has been established
		div.innerHTML += "Status 1: server connection established <br/>" //ignored in Chrome
	} else if (xmlHttp.readyState == 2) {
		div.innerHTML += "Status 2: Request received <br/>"; //server has received the requests
	} else if (xmlHttp.readyState == 3) {
		div.innerHTML += "Status 3: processing request <br/>"; //server is processing the request
	} else if (xmlHttp.readyState == 4) {

		if(xmlHttp.status == 200) {
			try{
				text = xmlHttp.responseText;
				div.innerHTML += "Status 4: request is finished and response is ready <br/>";
				div.innerHTML += text;
			}catch(e){
				alert( e.toString() );
			}
		}else {
			alert( xmlHttp.statusText );
		}
	}
}