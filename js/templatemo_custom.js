jQuery(document).ready(function($) {

	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.blogbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		loadScript();
		return false;
	});

	// Ajout pour la section compétences
	$(".main-menu a.competencebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .competence-section").slideDown('slow');
		return false;
	});

	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});

	// Quand un projet est sélectionné
    $(".project-button").click(function() {
        var projectId = $(this).data("project");
        
        // Masquer la liste des projets
        $("#project-list").slideUp('slow');
        
        // Afficher les détails du projet sélectionné
        $("#project-details").slideDown('slow');
        $(".project-detail").hide(); // Cacher tous les détails des projets
        $("#project-" + projectId + "-details").show(); // Afficher le détail du projet spécifique
    });

    // Quand le bouton "Retour à la sélection des projets" est cliqué
    $("#back-to-list").click(function() {
        // Masquer les détails du projet
        $("#project-details").slideUp('slow');
        
        // Afficher la liste des projets
        $("#project-list").slideDown('slow');
    });
});

function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(16.8496189,96.1288854)
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
}
