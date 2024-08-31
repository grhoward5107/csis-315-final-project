// Google Internal Site Search Script - By Dr. Westfall and JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit - http://www.javascriptkit.com/
// This notice is intact for copyright reasons. The script is only used for academic purposes that Dr. Westfall used in class on November 19, 2019. 

// Enter domain root of site of search engine 
var domainroot = "www.javascriptkit.com"; 

// Create function that works with a search engine and an object
function Gitsearch(cureobj) {
    
    cureobj.q.value="site:"+domainroot+" "+cureobj.qfront.value
    
}

document.getElementbyId("search").innerHTML; 