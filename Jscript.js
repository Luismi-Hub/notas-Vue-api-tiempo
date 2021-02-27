//////   f4cf24f9cb34ed2dd857cc66dc22b94d API key
//////////   http://api.openweathermap.org/data/2.5/weather?q=Granada,es&appid=f4cf24f9cb34ed2dd857cc66dc22b94d&units=metric&lang=es

var tBoton = document.getElementById("boton");
        var tCiudad = document.getElementById("ciudad");
        tBoton.addEventListener("click", function () {
            var ciudad = tCiudad.value;
            loadDoc("http://api.openweathermap.org/data/2.5/weather?q="+ciudad+",es&appid=f4cf24f9cb34ed2dd857cc66dc22b94d&units=metric&lang=es",loadAPI)

        })

        http://api.openweathermap.org/data/2.5/weather?q=Granada,es&appid=f4cf24f9cb34ed2dd857cc66dc22b94d&units=metric&lang=es


        function loadDoc(url,callback) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        callback(this);
                    }
                };
                xhttp.open("GET", url, true);
                xhttp.send();
            }
        function loadAPI(xhttp) {
            o=JSON.parse(xhttp.responseText);
            document.getElementById("datos").innerHTML=o.main.temp+" "+o.weather[0].description;
        }