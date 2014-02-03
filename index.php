		<!-- include qui permet l'affichage du menu et de l'en-tête -->
		<?php include('includes/header.php'); ?>
		
		<!-- bloc du caroussel, affichage des différentes prestations -->
		<div class='carrousel-conteneur'>
			<div class='carrousel-selecteur'></div>
			<div class='carrousel'>
				<ul class='diapo'>
					<?php
						function count_files($dir)
						{
							$num = 0;
							 
							$dir_handle = opendir($dir);
							while($entry = readdir($dir_handle))
							if(is_file($dir.'/'.$entry))
							$num++;
							closedir($dir_handle);
							 
							return $num;
						}

						$nbImage = count_files('images/carrousel');

						for ($i = 1; $i <= $nbImage; $i++)
						{
							echo ('<li><img src="images/carrousel/img'.$i.'.jpg"></li>');
						}
					?>
				</ul>
			</div>
			<div class='carrousel-lecture'></div>
		</div>
		
		<!-- bloc qui  affiche les informations de l'entreprise -->
		<div id='contenu'>
			<div id='presentation'>
				<div class='titre'>
					<span class='text'>ARC Informatique - <i>Life</i></span>
					<span class='trait'>
					</span>
				</div>
				
				<p> La société ARC Informatique, 
					créée en 1993, a réussi à hisser 
					parmi les entreprises les plus 
					performantes du Sénégal, 
					il dispose d'une équipe 
					d'ingénieurs expérimentés, 
					maîtrisant l'Audit, le Design, 
					la Gestion de Projets, 
					et les Services managés..
				</p>
			</div>
			
			<!-- bloc qui permet d'accéder au webmail -->
			<div id='webmail'>
				<div class='titre'>
					<span class='text'>Webmail</span>
					<span class='trait'>
						
					</span>
				</div>
				<p> Pour accèder à votre Webmail 
					il vous suffit de taper l'adresse : 
					<a href='http://webmail.arc.sn'>http://webmail.arc.sn</a> 
					ou de cliquer sur l'icone ci-dessous.
				</p>
				<a href='http://webmail.arc.sn'><img class='logo_webmail' src='images/webmail.png'/></a>
			</div>
		</div>
		
		<!-- include qui permet l'affichage du pied de page -->
		<?php include('includes/footer.php'); ?>
