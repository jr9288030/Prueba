<!DOCTYPE html>
<html>
  <head>


<style>
    body{background-color:green;padding: 150px;font-family:Arial;}


    #menu{
      background-color:#222;
    }
    #menu ul{
      list-style:none;
      margin:0;
      padding:0;
    }
    #menu ul li{
      display:inline-block;
    }

    #menu ul li a{
      color:green;
      display:block;
      padding:20px 20px;
      text-decoration:none;
    }

    #menu ul li a:hover{
      background-color:yellow;
    }

    </style>








    <title>Competencia Digital</title>
    <meta charset="utf-8">
    <link href="quizzer.css" type="text/css" rel="stylesheet">
    <script src="jquery-2.2.0.min.js"></script>
    <script src="underscore-1.8.3.min.js"></script>
    <script src="quizzer.js"></script>
  </head>
  <body>
    <header>
      <div class="title">
        <h1>COMPETENCIAS DIGITALES</h1>
        <h2>Aprendamos a Compartir Información por Medios Tecnológicos</h2>
      </div>
      <div class="countdown"><span class="time_left">12s</span></div>
      <div class="points"><span class="points">0 points</span></div>
    </header>








     <div id="menu">
  <h1></h1>
  <ul>


                <li><a href="#">inicio</a></li>
                <li><a href="cuestionario.php">Cuestionario</a></li>
                <li><a href="juego.php">Contacto</a></li>






                
    </ul>
    </div>















    <div class="start">
      <div class="card">
        <p>¿comencemos?</p>
        <button class="start">Iniciar juego</button>
      </div>
    </div>
    <div class="play">
      <div class="questions"></div>
    </div>
    <div class="finish card">
      <p class="times_up">¡Se acabó el tiempo!</p>
      <p>Has obtenido</p>
      <p class="final_points">8 puntos</p>
      <div class="play_again">
        <button>Volver a jugar</button>
      </div>
    </div>
  </body>
</html>