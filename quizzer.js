// inicializamos un array de arrays con la preguntas del juego. 
var questions = [
	[
		"¿Que es un Archivo?",
		"es un juego",
		"es una secuencia de bytes que son almacenados en un dispositivo",
		"PHP",
		"AngularJS",
		1
	],
	[
		"¿Qué significa compartir información mediante medios tecnológicos?",
		"Consiste en poner a disponibilidad el contenido de uno o más directorios a través de la red",
		"Compilado",
		"Los 2 anteriores",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Cuantos tipos de formatos existen?",
		"docx,txt,mp4,mp3.png,jpg",
		"PHP",
		"Java",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Por cuales herramientas se puede compartir información?",
		"&lt;?php",
		"&lt;?",
		"googleDrive,Dropbox,whatsApp,Correo",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Cual es el primer paso para enviar un archivo entre dispositivos móviles?",
		"Activar wifi",
		"hacer una llamada",
		"tener dinero",
		"vivir ceca",
		0
	],
	[
        "¿Cual es el segundo paso para enviar información entre dispositivos móviles?",
        "tener una aplicación instalada WhatsApp",
        "tener megas",
        "tener muchos números",
        "tener unos archivos",
        0

	],
	[
        "Cual es el tercer paso para enviar información entre dispositivos móviles",
        "Abrir teclado y escojer la opción adjuntar &",
        "ver la infromación",
        "resultado final",
        "tomar la imagen",
        0

	],
	[

        "Cual es el cuarto paso para enviar información entre dispositivos móviles",
        "enviar el archivo dando click en send >",
        "descartar",
        "regresar",
        "eliminar",
        0



	],
	[
       "Cual es el primer paso para enviar un archivo por correo",
       "abrir nuestro correo y escojer la opción componer",
       "jugra",
       "eliminar",
       "actualizar",
       0

	],
	[
       "Cual es el segundo paso para enviar un archivo por correo",
       "tenemos que elejir a cual vamos a enviar con la opción TO",
       "se detiene el correo",
       "jugar",
       "detener",
       0

	],
	[
       "Cual es el tercer paso para enviar un archivo por correo",
       "Adjuntar el archivo dando click en el icono &",
       "buscar en la computadora",
       "buscar el la web",
       "jugar",
       0

	],
	[
       "Cual es el cuarto paso para enviar un archivo por correo",
       "Escojer un archivo desde mi computador",
       "eliminar el archivo",
       "actualizar la computadora",
       "abrir correo",
       0


	],
	[
      "Cual es el quinto paso para enviar un archivo por correo",
      "escojemos el archivo y lo abrimos y lo enviamos",
      "escojemos y lo abrimos",
      "lo eliminamos",
      "lo enviamos",
      0

	],
	[
       "Como compartimos un video por Facebook",
       "escojer la opción foto/video",
       "eliminar archivos",
       "llamar a un comando",
       "jugar",
       0



	],
	[

       "Cual es el segundo paso para compartir un video en facebook",
       "escojer un video desde la computadora",
       "eliminar video",
       "cerrar ",
       "abrir",
       0

	],
	[
       "Cual es el tercer paso para compartir un video por facebook",
       "se abre el archivo y se carga en facebook",
       "retroseder atras",
       "no eliminar el archivo",
       "enviar imagen",
       0



	],
	[
       "Cual es el último paso para compartir un video por facebook",
       "escojer la opción compartir a todo público",
       "eliminar video",
       "grabar video",
       "actualizar video",
       0




	]








];

// Aquí utilizamos UnderscoreJS para generar un template de pregunta.
var questionTemplate = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
          <label for='q<%= index %>o4'><%= d %></label> \
        </li> \
      </ul> \
    </div> \
    ");

// Definimos las variables de estado del juego y los valores iniciales (como el tiempo de respuesta de cada pregunta).
var points,
	pointsPerQuestion,
	currentQuestion,
	questionTimer,
	timeForQuestion = 8, // segundos
	timeLeftForQuestion; 
// Manipulacion de elementos con JQuery.
$(function() {

	// Uso de jQuery para escuchar el evento click del botón de Comenzar y Volver a jugar.
	$('button.start').click(start);
	$('.play_again button').click(restart);

	// La función restart inicializa los valores de las variables de estado del juego.
	function restart() {
		points = 0;
		pointsPerQuestion = 10;
		currentQuestion = 0;
		timeLeftForQuestion = timeForQuestion;
	// Se oculta la pantalla de finalizar y un mensaje que dice "Se acabó el tiempo".
		$('.finish.card').hide();
		$('div.start').show();
		$('.times_up').hide();

		generateCards();
		updateTime();
		updatePoints();
	}

	//  La función start se ejecuta cuando el jugador hace click en comenzar.
	function start() {
		$('div.start').fadeOut(200, function() {
			moveToNextQuestion();
		});
	}

	// Esta es una de las funciones clave del juego, encargada de generar las preguntas. 
	function generateCards() {
		$('.questions').html('');
		for (var i = 0; i < questions.length; i++) {
			var q = questions[i];
			var html = questionTemplate({
				question: q[0],
				index: i,
				a: q[1],
				b: q[2],
				c: q[3],
				d: q[4],
				e: q[5],
				f: q[6],
				g: q[7],
				h: q[8],
				i: q[9],
				j: q[10],
				k: q[11],
				l: q[12],
				l: q[13],
				m: q[14],
				n: q[15],
				o: q[16]

			});
			$('.questions').append(html);
		};

                // Indicamos que nos interesa el evento change de los inputs dentro de los elementos con clase question y card (cada una de las preguntas).
		$('.question.card input').change(optionSelected);
	}

	// Esta función cambia el estado del juego para pasar de una pregunta a la siguiente.
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
		}

		// Se muestra la siguiente pregunta.
		showQuestionCardAtIndex(currentQuestion);
		setupQuestionTimer();
	}

	// Esta función inicializa el temporizador para responder una pregunta.
	function setupQuestionTimer() {
		if (currentQuestion > 1) {
			clearTimeout(questionTimer);
		}
		timeLeftForQuestion = timeForQuestion;

		// Cada 1 segundo, nuestro temporizador llamará a la función countdownTick(). 
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// Mostramos la tarjeta de pregunta correspondiente al índice que la función recibe por parámetro.
	function showQuestionCardAtIndex(index) { // staring at 1
		var $card = $('.question.card:nth-child(' + index + ')').show();
	}

	// La función countdownTick() se ejecuta cada un segundo, y actualiza el tiempo restante para responder en la pantalla del jugador.
	function countdownTick() {
		timeLeftForQuestion -= 1;
		updateTime();
		if (timeLeftForQuestion == 0) { 
			return finish();
		}
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// Actualiza el tiempo restante en pantalla, utilizando la función html(). 
	function updateTime() {
		$('.countdown .time_left').html(timeLeftForQuestion + 's');
	}

	// Actualiza los puntos en pantalla.
	function updatePoints() {
		$('.points span.points').html(points + ' puntos');
	}

	// Esta función se ejecuta cuando el jugador escoge una respuesta.
	function optionSelected() {
		var selected = parseInt(this.value);
		var correct = questions[currentQuestion-1][5];

		if (selected == correct) {
			points += pointsPerQuestion;
			updatePoints();
			correctAnimation();
		} else {
			wrongAnimation();
		}

		if (currentQuestion == questions.length) {
			clearTimeout(questionTimer);
			return finish();
		}
		moveToNextQuestion();
	}

	// Animación de respuesta correcta e incorrecta.
	function correctAnimation() {
		animatePoints('right');
	}

	// Animación de respuesta correcta e incorrecta.
	function wrongAnimation() {
		animatePoints('wrong');
	}

	// Esta función anima el puntaje en pantalla.
	function animatePoints(cls) {
		$('header .points').addClass('animate ' + cls);
		setTimeout(function() {
			$('header .points').removeClass('animate ' + cls);
		}, 500);
	}

	// Cuando el juego termina, esta función es ejecutada.
	function finish() {
		if (timeLeftForQuestion == 0) {
			$('.times_up').show();
		}
		$('p.final_points').html(points + ' puntos');
		$('.question.card:visible').hide();
		$('.finish.card').show();
	}

	// 24
	restart();

});