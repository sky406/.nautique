var menuitems=[
    // format [image,Name,description]
    [null,"testfood","this is a description don't think too hard about it"],
    ["images/DSC_2958.jpg","testfood2","this is not a description"]
    // changes these later
    
]

function assign_placeholder()
{
    return "<div class='col-9 background-alt'></div>"
}

function fill_menu()
{  
    var content = ''
  for(var i = 0 ; i < menuitems.length ; i++ )
  {
      content+='<div class="row menu-block">'
      if(menuitems[i][0] == null)
      {
        content += assign_placeholder()
      }
      else
      {
        content += "<div class='col-9 background-alt' style='background-image:url("+ menuitems[i][0] +");background-position: center; background-repeat: no-repeat; background-size: cover;' ></div>"
      }
      content += '<div class="col-3 background-alt2"><div class="containter menu">' //this means two closing divs
      content+='<div class="row justify-content-end"><h2 class="cta_txt txt left-align menutitle">'+menuitems[i][1]+'</h2></div>'
      content+='<div class="row justify-content-end"><p class="txt-normal txt right-align menutxt">'+menuitems[i][2]+'<p></div></div></div>'
  }
  document.getElementById('menu').innerHTML=content
}
fill_menu()