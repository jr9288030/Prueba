<?php
include("conexion.php");
?>






<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Registro</title>

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
</head>

    <body>
    	<div id="menu">
    		<ul>
    			

              >
                
                <li><a href="index.php">inicio</a></li>
                <li><a href="#">cuestionario</a></li>
                <li><a href="juego.php">contacto</a></li>









             </ul>
       </div>








  <section id="contenedor"><br/>

           <img src="img/lojano.jpe" alt="">
                    



            <h3>Aumenta tu conocimiento</h3>


      
                        



<form action="" method="post">
    Id_funcionalidad:<input required name="id_funcionalidad"><br />
    Nombre:<input name="nombre"><br />
    Apellido:<input name="apellido"><br />
    Cedula:<input name="cedula"><br />
    

 <h3>Preguntas</h3>

    <h3>¿Un Archivo es un conjunto de bytes que se transfiere mediantes dispositivos tecnológicos?</h3>
    Pregunta1:<br/>
    Si<input checked value="s" type="radio" name="pregunta1" />
    No<input  value="n" type="radio" name="pregunta1" />

    <br />


    <h3>¿Qué significa compartir información mediante medios tecnológicos, significa tener toda la información disponible?</h3>

    Pregunta2:<br/>
    Si<input checked value="s" type="radio" name="pregunta2" />
    No<input  value="n" type="radio" name="pregunta2" />

    <br />
    <h3>¿Estos tipos de formatos son válidos docx,txt,mp4,mp3.png,jpg? </h3> 

    Pregunta3:<br/>
    Si<input checked value="s" type="radio" name="pregunta3" />
    No<input  value="n" type="radio" name="pregunta3" />

    <br />

    <h3>¿Estas herramientas se utilizan para compartir información googleDrive,Dropbox,whatsApp,Correo?</h3>

    Pregunta4:<br/>
    Si<input checked value="s" type="radio" name="pregunta4" />
    No<input  value="n" type="radio" name="pregunta4" />

    <br />
    <h3>¿Cuál es el primer paso para enviar un archivo entre dispositivos móviles, activar wifi?</h3>

    Pregunta5:<br/>
    Si<input checked value="s" type="radio" name="pregunta5" />
    No<input  value="n" type="radio" name="pregunta5" />

    <br />

     <br />
      <h3>¿Cuál es el segundo paso para enviar información entre dispositivos móviles, tener una aplicación instalada como WhatsApp?</h3>

    Pregunta6:<br/>
    Si<input checked value="s" type="radio" name="pregunta6" />
    No<input  value="n" type="radio" name="pregunta6" />

    <br />
    
    <br />
    <h3>¿Cuál es el tercer paso para enviar información entre dispositivos móviles, abrir teclado y escoger la opción adjuntar mediante el icono &?</h3>

    Pregunta7:<br/>
    Si<input checked value="s" type="radio" name="pregunta7" />
    No<input  value="n" type="radio" name="pregunta7" />

    <br />

    <br />
    <h3>¿Cuál es el cuarto paso para enviar información entre dispositivos móviles, enviar el archivo dando click en send?</h3>

    Pregunta8:<br/>
    Si<input checked value="s" type="radio" name="pregunta8" />
    No<input  value="n" type="radio" name="pregunta8" />

    <br />
    


   



    
    <input type="submit" name="submit" value="Guardar"/>
</form>


</section> 




































<body>
	

	<section class="contenido">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aut magnam eum, aspernatur officia amet quibusdam nam. Nostrum quo dolores vel, enim eos quis excepturi possimus, dolore ipsum perferendis, porro.
		</p>
	</section>
	
</body>
</html>





<?php
if($_POST){
    $i=$_POST['id_funcionalidad'];
    $n=$_POST['nombre'];
    $a=$_POST['apellido'];
    $c=$_POST['cedula'];
    $g=$_POST['pregunta1'];
    $x=$_POST['pregunta2'];
    $y=$_POST['pregunta3'];
    $z=$_POST['pregunta4'];
    $v=$_POST['pregunta5'];
    $l=$_POST['pregunta6'];
    $m=$_POST['pregunta7'];
    $j=$_POST['pregunta8'];
    
   


    
    
    mysql_query("insert into usuario(id_funcionalidad,nombre,apellido,cedula,pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8)values('$i','$n','$a','$c','$g','$x','$y','$z','$v','$l','$m','$j')") or die(mysql_error());
    echo "<h2>Dato Guardado</h2>";
   }
?>

