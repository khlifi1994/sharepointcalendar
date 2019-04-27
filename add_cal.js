    <script>
var siteurl = '/sites/GestionFormation/';
function inserttocal()
{
var clientContext = new SP.ClientContext(siteurl); // Get SPSITEURL
var list = clientContext.get_web().get_lists().getByTitle("Datesf");
    var newEventCreateInfo = new SP.ListItemCreationInformation();
    var newEvent = list.addItem(newEventCreateInfo);
    newEvent.set_item('Emplacement', 'Office');
    newEvent.set_item('Heure de début', 04/04/2019);
    newEvent.set_item('Heure de fin',04/04/2019);
    newEvent.set_item('Description','Discussion about Calendar JSCOM');
    newEvent.set_item('Titre','New Discussion');
 //   newEvent.set_item("fAllDayEvent",false);
    newEvent.set_item('Categorie','Discussion');
        newEvent.update();
    context.executeQueryAsync(function(){ alert("Success");},function(){ alert("Failure");})
}
          </script>
<div >

                <button type="button"  id="buttoninserttocal" onclick="inserttocal()">
                      Ajouter à calendrier
                </button>
          </div>