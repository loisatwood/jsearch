;(function (win,doc) {
  'use strict';

  var _js, _blob, _url;

  win.URL = win.URL || win.webkitURL || {};
  win.BlobBuilder = win.BlobBuilder || win.WebKitBlobBuilder || win.MozBlobBuilder || {};
  win.startJSearch = startJSearch;

  _js = "(function(win%2Cdoc)%7Bif(!(%22map%22in%5B%5D%26%26%22filter%22in%5B%5D%26%26%22reduce%22in%5B%5D%26%26%22DOMParser%22in%20win%26%26%22compile%22in%20RegExp.prototype))return%3Bif(!(%22origin%22in%20location))location.origin%3Dlocation.protocol%2B%22%2F%2F%22%2Blocation.host%3Bvar%20_root%3Ddoc.documentElement%2C_searchbutton%2C_search%2C_results%2C_close%2C_links%2C_src%2C_src_el%2C_append_to%2C_attrs%2Cj%3D0%2C_UI%3D%7B%22search%22%3A%22%22%2C%22button%22%3A%22%22%2C%22results%22%3A%22%22%2C%22close%22%3A%22%22%7D%3Bfor(%3BObject.keys(_UI).length%3Ej%3B%2B%2Bj)_UI%5BObject.keys(_UI)%5Bj%5D%5D%3DgenerateID(j)%3Bdoc.head.insertAdjacentHTML(%22beforeend%22%2C%22%3Cstyle%3E%23%22%2B_UI.button%2B%22%2C%23%22%2B_UI.search%2B%22%2C%23%22%2B_UI.search%2B%22%3Einput%2C%23%22%2B_UI.results%2B%22%2C%23%22%2B_UI.close%2B%22%7Bbox-sizing%3Aborder-box%3Bfont-size%3A15px%3B%7D%23%22%2B_UI.button%2B%22%2C%23%22%2B_UI.search%2B%22%7Bposition%3Afixed%3Btransition-property%3A-webkit-transform%2Copacity%2Cvisibility%3Btransition-property%3Atransform%2Copacity%2Cvisibility%3Btransition-duration%3A200ms%3Btransition-timing-function%3Acubic-bezier(0.4%2C0%2C0.2%2C1)%3B%7D%23%22%2B_UI.button%2B%22%2C%23%22%2B_UI.close%2B%22%7B-webkit-appearance%3Anone%3B-moz-appearance%3Anone%3B-ms-appearance%3Anone%3B-o-appearance%3Anone%3Bappearance%3Anone%3B%7D%23%22%2B_UI.button%2B%22%7Bbottom%3A2.5em%3Bright%3A3em%3Bbackground-color%3A%234183C4%3Bbackground-image%3Aurl(data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%2520viewBox%253D%25220%25200%252024%252024%2522%253E%253Cg%253E%253Cpath%2520fill%253D%2522%2523fff%2522%2520d%253D%2522M15.5%252014h-.79l-.28-.27C15.41%252012.59%252016%252011.11%252016%25209.5%252016%25205.91%252013.09%25203%25209.5%25203S3%25205.91%25203%25209.5%25205.91%252016%25209.5%252016c1.61%25200%25203.09-.59%25204.23-1.57l.27.28v.79l5%25204.99L20.49%252019l-4.99-5zm-6%25200C7.01%252014%25205%252011.99%25205%25209.5S7.01%25205%25209.5%25205%252014%25207.01%252014%25209.5%252011.99%252014%25209.5%252014z%2522%253E%253C%2Fpath%253E%253C%2Fg%253E%253C%2Fsvg%253E)%3Bbackground-repeat%3Ano-repeat%3Bbackground-size%3A1.5em%201.5em%3Bbackground-position%3A50%25%2050%25%3Bcolor%3A%23fff%3Bwidth%3A2.75em%3Bheight%3A2.75em%3Bbox-shadow%3A0%200%2030px%20-10px%20rgba(0%2C0%2C0%2C0.4)%3Bz-index%3A100%3Bmargin%3A0%3Bpadding%3A0%3Bborder%3A0%20none%3Bcursor%3Apointer%3Bz-index%3A19001%3B%7D%23%22%2B_UI.search%2B%22%7Bbottom%3A2.5em%3Bright%3A3em%3Bborder%3A0.4em%20solid%20%234183C4%3Bz-index%3A19000%3Bwidth%3Aauto%3Bheight%3Aauto%3Bopacity%3A0%3Bvisibility%3Ahidden%3B-webkit-transform%3AscaleX(0)%3Btransform%3AscaleX(0)%3B-webkit-transform-origin%3A100%25%2050%25%3Btransform-origin%3A100%25%2050%25%3B%7Dhtml%5Bdata-searchinit%5D%20%23%22%2B_UI.search%2B%22%7Bopacity%3A1%3Bvisibility%3Avisible%3B-webkit-transform%3AscaleX(1)%3Btransform%3AscaleX(1)%3B%7Dhtml%5Bdata-searchinit%5D%20%23%22%2B_UI.button%2B%22%2C%23%22%2B_UI.close%2B%22%7Bbackground-image%3Aurl(data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%2520width%253D%252248%2522%2520height%253D%252248%2522%2520viewBox%253D%25220%25200%252048%252048%2522%253E%253Cpath%2520fill%253D%2522none%2522%2520stroke%253D%2522%2523fff%2522%2520stroke-width%253D%25223%2522%2520stroke-miterlimit%253D%252210%2522%2520d%253D%2522M32.5%252016.5l-16%252016m16%25200l-16-16%2522%2520stroke-linecap%253D%2522round%2522%2520stroke-linejoin%253D%2522round%2522%2F%253E%253C%2Fsvg%253E)%3Bbackground-size%3A2em%202em%3Bbackground-repeat%3Ano-repeat%3Bbackground-position%3A50%25%2050%25%3B%7D%23%22%2B_UI.button%2B%22%3Ahover%7Bbackground-color%3A%233e7ab6%7D%23%22%2B_UI.search%2B%22%3Einput%7Bdisplay%3Ablock%3Bborder%3A0%3Bpadding%3A0.25em%200.75em%3Bheight%3A2em%3Bwidth%3Aauto%3B-webkit-border-radius%3A0%3Bborder-radius%3A0%3B%7D%23%22%2B_UI.results%2B%22%7Bdisplay%3Anone%3Bposition%3Afixed%3Btop%3A0%3Bleft%3A0%3Bright%3A0%3Bbottom%3A0%3Bz-index%3A19000%3Bheight%3A100vh%3Bpadding%3A1em%3Bbackground%3Argba(0%2C0%2C0%2C.8)%3B-webkit-overflow-scrolling%3Atouch%3B%7D%23%22%2B_UI.results%2B%22%3Ediv%3Ea%7Bdisplay%3Ablock%3Bbackground%3A%23fff%3Bpadding%3A1em%3Bline-height%3A1.3%3Bmargin-bottom%3A1em%3B%7D%23%22%2B_UI.close%2B%22%7Bbackground-color%3Atransparent%3Bposition%3Afixed%3Btop%3A2em%3Bright%3A2em%3Bbox-shadow%3A0%200%2030px%20-10px%20rgba(0%2C0%2C0%2C0.4)%3Bz-index%3A19001%3Bwidth%3A2.75em%3Bheight%3A2.75em%3Bmargin%3A0%3Bpadding%3A0%3Bborder%3A0%20none%3Bcursor%3Apointer%3B%7D%23%22%2B_UI.results%2B%22%3Ediv%7Bmargin%3A0%20auto%200%20auto%3Bmax-width%3A40em%3Bpadding%3A1em%201.5em%201.3em%201.5em%3B%7D%23%22%2B_UI.results%2B%22%3Ediv%3Eh2%7Bcolor%3A%23fff%3Bfont-size%3A22px%3Bmargin%3A0.2em%200%200.8em%200%3Bpadding%3A0%201.5em%200.2em%200%3B%7Dhtml%5Bdata-displayresults%5D%7Boverflow%3Ahidden%7Dhtml%5Bdata-displayresults%5D%20%23%22%2B_UI.button%2B%22%7Bdisplay%3Anone%3B%7Dhtml%5Bdata-displayresults%5D%20%23%22%2B_UI.results%2B%22%7Bdisplay%3Ablock%3B-webkit-backdrop-filter%3Ablur(4px)%3Boverflow-x%3Ahidden%3Boverflow-y%3Ascroll%3B%7D%3C%2Fstyle%3E%22)%3B_src%3Dlocation.origin%3B_src_el%3D%22%22%3B_append_to%3D%22body%22%3B_attrs%3D%5B%22href%22%2C%22title%22%5D%3Bwin.jsearch%3D%7B%22init%22%3Ainit%7D%3Bfunction%20init(config)%7Bvar%20_xhr%3Dnew%20XMLHttpRequest%3Bif(typeof%20config!%3D%3D%22undefined%22)%7B_src%3D!!config.src%3Fconfig.src%3A_src%3B_append_to%3D!!config.append_to%3Fconfig.append_to%3A_append_to%3B_attrs%3D!!config.attrs%3Fconfig.attrs%3A_attrs%7Ddoc.querySelector(_append_to).insertAdjacentHTML(%22beforeend%22%2C'%3Cbutton%20id%3D%22'%2B_UI.button%2B'%22%20tabindex%3D%221%22%3E%3C%2Fbutton%3E%3Cform%20method%3D%22GET%22%20action%3D%22%2F%22%20id%3D%22'%2B_UI.search%2B'%22%3E%3Cinput%20type%3D%22text%22%20title%3D%22Search%20for%20a%20particular%20example%22%20required%3E%3C%2Fform%3E%3Cdiv%20id%3D%22'%2B_UI.results%2B'%22%20aria-hidden%3D%22true%22%20hidden%3E%3Cbutton%20id%3D%22'%2B_UI.close%2B'%22%20tabindex%3D%221%22%3E%3C%2Fbutton%3E%3Cdiv%3E%3Ch2%3E%3C%2Fh2%3E%3C%2Fdiv%3E%3C%2Fdiv%3E')%3B_searchbutton%3Ddoc.getElementById(_UI.button)%3B_search%3Ddoc.getElementById(_UI.search)%3B_results%3Ddoc.getElementById(_UI.results)%3B_close%3Ddoc.getElementById(_UI.close)%3B_searchbutton.addEventListener(%22click%22%2CshowForm%2Cfalse)%3B_xhr.open(%22GET%22%2C_src%2Ctrue)%3B_xhr.onload%3Dfunction()%7Bvar%20_typ%3Dthis.getResponseHeader(%22content-type%22)%3Bvar%20_doc%3D(new%20DOMParser).parseFromString(this.responseText%2C!!_typ.indexOf(%22xhtml%22)%3F%22application%2Fxhtml%2Bxml%22%3A!!_typ.indexOf(%22html%22)%3F%22text%2Fhtml%22%3A%22application%2Fxml%22)%3Bif(!_doc%7C%7C!_doc.documentElement)return%3B_src_el%3D!!config%26%26!!config.src_el%3Fconfig.src_el%3A_doc.documentElement.tagName%3Bswitch(_doc.documentElement.tagName)%7Bcase%20%22urlset%22%3A_links%3D%5B%5D.slice.call(_doc.getElementsByTagName(%22url%22)).map(function(url)%7Breturn%20url.querySelector(%22loc%22)%7D)%3Bbreak%3Bcase%20%22channel%22%3A_links%3D%5B%5D.slice.call(_doc.getElementsByTagName(%22item%22)).map(function(item)%7Bvar%20_composite%3Ditem.querySelector(%22link%22)%3B_composite.setAttribute(%22title%22%2Citem.querySelector(%22title%22).textContent)%3B_composite.setAttribute(%22href%22%2C_composite.textContent)%3Breturn%20_composite%7D)%3Bbreak%3Bcase%20%22feed%22%3A_links%3D%5B%5D.slice.call(_doc.getElementsByTagName(%22entry%22)).map(function(entry)%7Bvar%20_composite%3Dentry.querySelector(%22link%22)%3B_composite.setAttribute(%22title%22%2Centry.querySelector(%22title%22).textContent)%3Breturn%20_composite%7D)%3Bbreak%3Bcase%20%22html%22%3A_links%3D%5B%5D.slice.call(_doc.querySelector(_src_el).getElementsByTagName(%22a%22))%3Bbreak%3Bdefault%3A_links%3D%5B%5D.slice.call(_doc.querySelector(_src_el).getElementsByTagName(%22*%22)).filter(function(el)%7Breturn!!el.getAttribute(%22href%22)%7D)%7D_search.addEventListener(%22submit%22%2ChandleSearchAttempt%2Cfalse)%3B_close.addEventListener(%22click%22%2CresetSearchResults%2Cfalse)%7D%3B_xhr.onerror%3D_xhr.ontimeout%3D_xhr.onabort%3Dfunction()%7Bconsole.warn(%22Error%20with%20request%3A%20%22%2Bthis.status)%7D%3B_xhr.send(null)%7Dfunction%20handleSearchAttempt(e)%7Bvar%20_query%3Bif(typeof%20_links!%3D%3D%22object%22%7C%7C!Array.isArray(_links)%7C%7C!_links)return%20init()%3Btypeof%20e!%3D%3D%22undefined%22%26%26e.preventDefault()%3B_query%3De.target.querySelector(%22input%22).value%3Bif(typeof%20_query!%3D%3D%22string%22%7C%7C!_query)return%3BdisplaySearchResults(_query%2CgetSearchResults(_query%2C_links))%3Breturn%20false%7Dfunction%20displaySearchResults(query%2Cresults)%7B_root.setAttribute(%22data-displayresults%22%2C%22true%22)%3B_root.removeAttribute(%22data-searchinit%22)%3B_results.removeAttribute(%22aria-hidden%22)%3B_results.removeAttribute(%22hidden%22)%3B_results.querySelector(%22div%3Eh2%22).textContent%3Dresults.length%2B(results.length%3D%3D%3D1%3F%22%20result%22%3A%22%20results%22)%2B'%20found%20for%20%22'%2Bquery%2B'%22'%3Bif(results.length%3C1)return%3B_results.querySelector(%22div%22).insertAdjacentHTML(%22beforeend%22%2CgenerateMarkup(results))%7Dfunction%20getSearchResults(query%2Cdata)%7Breturn%20data.filter(function(link)%7Bvar%20_attr_vals%3D_attrs.map(function(attr)%7Breturn!!link.getAttribute(attr)%3Flink.getAttribute(attr)%3A%22%22%7D)%3B_attr_vals%5B_attr_vals.length%5D%3D!!link.textContent%3Flink.textContent.toLowerCase()%3A%22%22%3Breturn!!occursAtLeastOnce(query.toLowerCase()%2C_attr_vals)%7D).map(function(link)%7Bvar%20_title%3D!!link.getAttribute(%22title%22)%3Flink.getAttribute(%22title%22)%3A%22%22%3Bvar%20_url%3D!!link.getAttribute(%22href%22)%3Flink.getAttribute(%22href%22)%3A%22%22%3Bvar%20_content%3Dsanitize(link.textContent)%3Breturn%7B%22title%22%3A_title%2C%22url%22%3A_url%2C%22content%22%3A_content%2C%22ldistance%22%3AbestOf(query.toLowerCase()%2C%5B_title.toLowerCase()%2C_url.toLowerCase()%2C_content.toLowerCase()%5D)%7D%7D).sort(function(p%2Cq)%7Bif(p.ldistance%3Cq.ldistance)return-1%3Bif(p.ldistance%3Eq.ldistance)return%201%3Breturn%200%7D)%7Dfunction%20generateMarkup(results)%7Breturn%20results.map(function(result)%7Breturn'%3Ca%20href%3D%22'%2Bresult.url%2B'%22%20title%3D%22'%2Bresult.title%2B'%22%3E'%2Bresult.content%2B%22%3C%2Fa%3E%22%7D).reduce(function(acc%2Cnxt)%7Breturn%20acc%2Bnxt%7D)%7Dfunction%20bestOf(query%2Ccandidates)%7Breturn%20candidates.map(function(candidate)%7Breturn%20getLevenshteinDistance(query%2Ccandidate)%7D).sort(function(p%2Cq)%7Bif(p%3Cq)return-1%3Bif(p%3Eq)return%201%3Breturn%200%7D).filter(function(item%2Cidx)%7Breturn%20idx%3D%3D%3D0%7D)%7Dfunction%20occursAtLeastOnce(query%2Cdata)%7Breturn%20data.map(function(datum)%7Bif(datum.length%3Cquery.length)return%20false%3Breturn%20datum.indexOf(query)!%3D%3D-1%7D).reduce(function(w%2Cx)%7Breturn!!(w%7C%7Cx)%7D)%7Dfunction%20getLevenshteinDistance(string%2Cto_match)%7Bvar%20distance%2Crow1%2Crow2%2Ci%2Cj%3Bfor(row2%3D%5Bi%3D0%5D%3Bstring%5Bi%5D%3B%2B%2Bi)for(row1%3D%5Bj%3D0%5D%3Bto_match%5B%2B%2Bj%5D%3B)distance%3Drow2%5Bj%5D%3Di%3FMath.min(row2%5B--j%5D%2CMath.min(row1%5Bj%5D-(string%5Bi-1%5D%3D%3D%3Dto_match%5Bj%5D)%2Crow1%5B%2B%2Bj%5D%3Drow2%5Bj%5D))%2B1%3Aj%3Breturn%20distance%7Dfunction%20sanitize(text)%7Breturn%20text.split(%22%22).map(function(char)%7Breturn%20char%3D%3D%3D%22%3C%22%3F%22%26lt%3B%22%3Achar%3D%3D%3D%22%3E%22%3F%22%26gt%3B%22%3Achar%7D).join(%22%22)%7Dfunction%20resetSearchResults()%7B%5B%5D.slice.call(_results.getElementsByTagName(%22a%22)).forEach(function(result)%7Bresult.parentNode.removeChild(result)%7D)%3B_results.setAttribute(%22aria-hidden%22%2C%22true%22)%3B_results.setAttribute(%22hidden%22%2C%22%22)%3B_root.removeAttribute(%22data-displayresults%22)%7Dfunction%20showForm()%7Bif(typeof%20_links!%3D%3D%22object%22%7C%7C!Array.isArray(_links)%7C%7C!_links)return%20init()%3Bif(!_root.getAttribute(%22data-searchinit%22))%7B_root.setAttribute(%22data-searchinit%22%2C%22true%22)%3Bwin.setTimeout(function()%7B_search.querySelector(%22input%22).focus()%7D%2C220)%7Delse%20_root.removeAttribute(%22data-searchinit%22)%7Dfunction%20generateID(idx)%7Breturn%22jsrch_%22%2Bidx%2B%22_%22%2B(new%20Date).getTime()%7D%7D)(window%2Cdocument)%3B";

  if ('Blob' in win) {
    _blob = new Blob([(decodeURIComponent(_js).toString())], { type: 'application/javascript' });

  } else if ('BlobBuilder' in win) {
    _blob = new BlobBuilder();
    _blob.append((decodeURIComponent(_js).toString()));
    _blob = _blob.getBlob();

  } else {
    return;
  }

  if ('URL' in win) {
    _url = win.URL.createObjectURL(_blob);
  }

  function startJSearch (config) {
    var _iwn;
    var _idoc;
    var _ijs;

    doc.body.insertAdjacentHTML('beforeend', '<iframe id="jsearchFrame" frameborder="no" scrolling="no" allowtransparency="true" sandbox="allow-scripts allow-same-origin" allowFullscreen="allowFullscreen"></iframe>');
    _iwn  = win.frames['jsearchFrame'].contentWindow;

    _idoc = _iwn.document;
    _idoc.open('text/html', 'replace');
    _idoc.write('<!doctype html><head></head><body><div></div></body></html>');
    _idoc.close();

    _ijs = _idoc.createElement('script');
    _ijs.async = !0;
    _ijs.onload = function () { return _iwn.jsearch.init(config) };
    _ijs.src = _url;

    _idoc.head.appendChild(_ijs);
  }

})(window,document);
