
$(document).ready(function(){
  if($('#tabs').length>0){ 
    //  $('#tabs').tabs(); console.log('main.htm. tabs aufgerufen.'); 
  }
});


// Highlights the current table row under the mouse
function markieren(EintragSpalte) {
  if (typeof(document.getElementsByTagName) != 'undefined') var Spalten = EintragSpalte.getElementsByTagName('td');
  else if (typeof(EintragSpalte.cells) != 'undefined') var Spalten = EintragSpalte.cells;
  else return false;

  for (var c = 0; c < Spalten.length; c++) 
      if (Spalten[c].className.substring(Spalten[c].className.length - 9) == 'row_value') 
          Spalten[c].className = Spalten[c].className + '_important';

  return true;
}

// Un-Highlights the current table row under the mouse
function unmarkieren(EintragSpalte) {
  if (typeof(document.getElementsByTagName) != 'undefined') var Spalten = EintragSpalte.getElementsByTagName('td');
  else if (typeof(EintragSpalte.cells) != 'undefined') var Spalten = EintragSpalte.cells;
  else return false;
  
  for (var c = 0; c < Spalten.length; c++) 
      if (Spalten[c].className.substring(Spalten[c].className.length - 19, Spalten[c].className.length) == 'row_value_important') 
          Spalten[c].className = Spalten[c].className.substring(0, Spalten[c].className.length-10);
  
  return true;
}


// Highlights the current table row under the mouse
function markieren_permanent(EintragSpalte) {
  if (typeof(document.getElementsByTagName) != 'undefined') var Spalten = EintragSpalte.getElementsByTagName('td');
  else if (typeof(EintragSpalte.cells) != 'undefined') var Spalten = EintragSpalte.cells;
  else return false;

  for (var c = 0; c < Spalten.length; c++)
    if (Spalten[c].className.substring(Spalten[c].className.length - 9, Spalten[c].className.length) == 'row_value') {  
        Spalten[c].className = Spalten[c].className + '_highlighted';
        if (c == 0 && typeof(Spalten[c].getElementsByTagName('input')[0]) != 'undefined') Spalten[c].getElementsByTagName('input')[0].checked = true;
    } else if (Spalten[c].className.substring(Spalten[c].className.length - 19, Spalten[c].className.length) == 'row_value_important') {        
        Spalten[c].className = Spalten[c].className.substring(0, Spalten[c].className.length-10) + '_highlighted'
        if (c == 0 && typeof(Spalten[c].getElementsByTagName('input')[0]) != 'undefined') Spalten[c].getElementsByTagName('input')[0].checked = true;
    } else {
        Spalten[c].className = Spalten[c].className.substring(0, Spalten[c].className.length-12);
        if (c == 0 && typeof(Spalten[c].getElementsByTagName('input'[0])) != 'undefined') Spalten[c].getElementsByTagName('input')[0].checked = false;
  }

  return true;
}

// Checks all/none/inverted checkboxes
function change_selection(id, ms_number) {
  resultObj = eval("document.ms_result" + ms_number);
  if (id.value == "") return 0;
    else if (id.value == "select_all") for (z=0; z<=resultObj.length-1; z++){
        resultObj.elements[z].checked = 1;
    } else if (id.value == "select_none") for (z=0; z<=resultObj.length-1; z++){
        resultObj.elements[z].checked = 0;
    } else if (id.value == "select_invert") for (z=0; z<=resultObj.length-1; z++){
        if (resultObj.elements[z].checked) resultObj.elements[z].checked = 0;
        else resultObj.elements[z].checked = 1;
    } else {
    var foundOneChecked = 0;
    for (z=0; z<=resultObj.length-1; z++) if (resultObj.elements[z].checked) foundOneChecked = 1;

    if (!foundOneChecked) alert('Bitte wählen Sie mindestens einen Eintrag aus');
    else {
      if (MultiSelectSecurityQuest[id.value] == 1) {
        if (!confirm("Willst du die Aktion '"+ id.options[id.selectedIndex].text +"' wirklich auf alle ausgewählten Einträge anwenden?")) return 0;
      }
      MultiSelectActions[id.value] = MultiSelectActions[id.value].replace(/&amp;/g, "&");
      resultObj.action = MultiSelectActions[id.value];
      resultObj.submit();
    }
  }
}


//// Search Box ////
function SubmitDropDown(FormObj) {
  var pieces = FormObj.SearchBoxModule.value.split("|");
  FormObj.mod.value = pieces[0];
  FormObj.action.value = pieces[1];
  FormObj.SearchBoxModule.value = '';
  FormObj.SearchBoxModule.name = '';
  FormObj.submit();
}



// Tooltip windows
function TX_getScrollPos() { 
   if (document.body.scrollTop != undefined && navigator.appName.indexOf("Explorer") != -1 ) { 
      var res = (document.compatMode != "CSS1Compat") ? document.body : document.documentElement; 
      return {x : res.scrollLeft, y : res.scrollTop}; 
   } 
   else { 
      return {x : window.pageXOffset, y : window.pageYOffset}; 
   } 
 
} 
 

function TX_hideToolTip() { 
        document.getElementById("tooltip").style.visibility = "hidden"; 
        document.getElementById("tooltip").innerHTML = "false"; 
}