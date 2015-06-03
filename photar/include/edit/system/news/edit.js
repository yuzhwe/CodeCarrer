    function trim_only( str )
    {
        while( (str.charAt(0) == " "  || str.charCodeAt(0) == 0x3000) && (str.length > 0) ) // 0x3000 is unicode space
            str = str.substring( 1, str.length );
        while( (str.charAt( str.length-1 ) == " "  || str.charCodeAt(0) == 0x3000) && (str.length > 0) ) // 0x3000 is unicode space
            str = str.substring( 0, str.length-1 );

        return( str );
    }

	
//	alert(urlRoot);

    function submit_message(frm)
    {
	var urlRoot=document.location.href;
	urlRoot=urlRoot.substring(0,urlRoot.indexOf("/",7)+1);

/*
        document.editForm.PageName.value = trim_only(document.editForm.PageName.value)
        document.editForm.PageDesc.value = trim_only(document.editForm.PageDesc.value)

        if (document.editForm.PageName.value == "")
        {
            document.editForm.PageName.value = '鎮ㄧ殑缍查爜'
        }
*/        
        document.editForm.PageHtml.value = document.frames.EditBox.getHTML(true);
//        alert(document.editForm.PageHtml.value);
		var t=document.editForm.PageHtml.value;
//        document.editForm.PageBackground.value = document.frames.EditBox.getBGColor();
		t=replace(t,"\""+urlRoot,"\"/",false,false);
//		alert("t : "+t);
		document.editForm.content.value=t;
		document.editForm.PageHtml.value="";
        document.editForm.submit();
		return true;
    }
    
    function refresh_message()
    {
        document.editForm.action.value='pwp_add_refresh';
        document.editForm.PageHtml.value = document.frames.EditBox.getHTML(true);
        document.editForm.PageBackground.value = document.frames.EditBox.getBGColor();
        document.editForm.submit();        
    }

    function RTELoaded(w)  // 在修改时应调用这个函数. init 页
    {
//    return;
    var arLinks = new Array();
/*    
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/page.msnw', 'aaa - 鐣欒█鏉�'');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/general.msnw', '涓�鑸�'');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/shoebox.msnw', '鐩哥墖');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/page1.msnw', '鑱婂ぉ瀹�'');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/page2.msnw', '琛屼簨鏇�'');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/page3.msnw', '鏂囦欢');
    arLinks[arLinks.length] = new Array('groups.msn.com/cool/page4.msnw', '閫ｇ祼');
*/
	w.setLinks(arLinks);
    
//		先设置 document.editForm.PageHtml.value , 再使用 setHTML & setBGColor
		w.setHTML(document.editForm.PageHtml.value)
        w.setBGColor(document.editForm.PageBackground.value)

    }


function replace(target,oldTerm,newTerm,caseSens,wordOnly) {

  var work = target;
  var ind = 0;
  var next = 0;

  if (!caseSens) {
    oldTerm = oldTerm.toLowerCase();
    work = target.toLowerCase();
  }

  while ((ind = work.indexOf(oldTerm,next)) >= 0) {
    if (wordOnly) {
      var before = ind - 1;
      var after = ind + oldTerm.length; 
      if (!(space(work.charAt(before)) && space(work.charAt(after)))) {
        next = ind + oldTerm.length; 
        continue;
      }
    }
    target = target.substring(0,ind) + newTerm + 
    target.substring(ind+oldTerm.length,target.length); 
    work = work.substring(0,ind) + newTerm + 
    work.substring(ind+oldTerm.length,work.length); 
    next = ind + newTerm.length;
    if (next >= work.length) { break; } 
  }

  return target;

}
