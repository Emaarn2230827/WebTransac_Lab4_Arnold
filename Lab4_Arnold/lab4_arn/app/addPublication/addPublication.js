function addPublication()  {

    $('#addPublicationForm').submit(function (event) {
        event.preventDefault();

        // Récupération des valeurs du formulaire
        let title = $('#title').val();
        let author = $('#author').val();
        let content = $('#content').val();

        let currentDate = getCurrentDate();

        // Création de la publication
        let newPublication = {
            titre: title,
            auteur: author,
            contenu: content,
            datePublication: currentDate 
        };

        // Affichage de la boîte de dialogue pour confirmer l'envoi
        $("#confirmationDialog").dialog({
            resizable: false,
            height: "auto",
            modal: true,
            buttons: {
                "Confirmer": function () {
                    // requête POST pour l'ajout d'une  publication
                    $.post('http://localhost:3000/publications', JSON.stringify(newPublication), function () {
                        // Redirection vers la page principale après l'ajout
                        window.location.href = '/';
                    }, 'json')
                    .fail(function (error) {
                        console.error('Erreur lors de l\'envoi de la publication:', error);

                    });

                    $(this).dialog("close");
                },
                "Annuler": function () {
                    $(this).dialog("close");
                }
            }
        });
    });

    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
};
export default addPublication;