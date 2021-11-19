// the variable site info builds all the info for the site info blocks
/* the format for siteinfo is 
[[title,description],[image link,alt],[true,button text]] 
true iplies that the block ahs a button underr the text*/
// use style =" image"
var siteinfo = [
    [["About us","[insert text here]"],[null,"a cool picture"],[true,"Come dine with us","link"]],
    [["Our food","[insert text here]"],[null,"some cool seafood"],[true,"Check out our menu","link"]],
    [["Our star chefs","[insert text here]"],[null,"a chef i guess"],[false,null,null]]
    // TODO actually insert the proper info later
    ]

var imagelist = []
    //TODO add a bunch of image links to make this work
    
function add_placeholders(number,classes,id)
{
    // this fills a null value with replacement images
    // this can be anything honestly
    // the placeholders are all string fromat or they won't work
    placeholder = ''
    for(var i = 0; i < number; i++)
    {
        placeholder += "<div class='placeholder "+classes+"' id='"+id+i+ "'></div>"
    }
    return placeholder
}

function maincontent(id,rows)
{   
    var content=''
    var flip = false
    for(var i = 0; i < rows.length;i++)
    {
        console.log('it tried')
        content +="<div class='row'>"
        if(flip == false)
        {
            // text content
            console.log(rows[i][0][1]) //remove later
            content+= "<div class='box col-6'>"
            content+= "<h2>" + rows[i][0][0] + "</h2>"
            content+= "<p>" + rows[i][0][1] + "</p> "

            if(rows[i][2][0] == true)
            {
                content+="<a href='" +rows[i][2][2]+"'><button class='cta_button'><span>" + rows[i][2][1] + "</span></button></a></div>"
            }
            else
            {
                content+='</div'
            }
            
            // image content
            if(rows[i][1][0] == null)
            {
                content+= add_placeholders(1,'box col-6','image'+i)
                content+="</div>"
            }
            else
            {
                // altewrnate idea would be to make the image the background
                content+="<div class='box col-6' style='background-image:"+ rows[i][1][0]+";background-position: center; background-repeat: no-repeat; background-size: cover;'></div> "
                content+="</div>"    
            }
            // this is a pain in the ass
            flip = true
        }
        else
        {
            // image content
            if(rows[i][1][0] == null)
            {
                content+= add_placeholders(1,'box col-6','image'+i)
            }
            else
            {
                // altewrnate idea would be to make the image the background
                content+="<div class='box col-6' style='background-image:"+ rows[i][1][0]+";background-position: center; background-repeat: no-repeat; background-size: cover;'></div> "    
            }
            
            // text content
            console.log(rows[i][0][1]) //remove later
            content+= "<div class='box col-6'>"
            content+= "<h2>" + rows[i][0][0] + "</h2>"
            content+= "<p>" + rows[i][0][1] + "</p> "

            if(rows[i][2][0] == true)
            {
                content+="<a href='" +rows[i][2][2]+"'><button class='cta_button'><span>" + rows[i][2][1] + "</span></button></a></div></div>"
            }
            else
            {
                content+='</div></div>'
            }
            
            
            // this is a pain in the ass
            flip = false
        }
    }
    document.getElementById(id).innerHTML=content
}
maincontent('main',siteinfo)