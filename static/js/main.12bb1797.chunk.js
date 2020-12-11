(this["webpackJsonpenergy-society-maps"]=this["webpackJsonpenergy-society-maps"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(92),a(24)),l=a(42),s=a.n(l),m=a(158),p=a(161),u=a(103),d=a(144),f=a(71),g=a.n(f),y=a(32),h=Object(d.a)((function(e){return{root:{position:"absolute",bottom:0,left:0,"margin-bottom":24,display:"flex","flex-direction":"column"},aesLogo:{padding:8,height:50},suLogoContainer:{padding:"4px 8px",maxWidth:220,color:"white",fontSize:"9pt"}}}));function v(e){var t=h(),a=y.maps[e.selectedMapId].displayStanfordLogo?"block":"none";return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.suLogoContainer,style:{display:a}},"Developed by American Energy Society in collaboration with Sally Benson, Precourt Family Professor at Stanford University, and Scott Jespersen, MS '20, Stanford."),o.a.createElement("div",{className:t.aesLogoContainer},o.a.createElement("img",{src:g.a,className:t.aesLogo,alt:"American Energy Society Logo"})))}var A=a(160),E=a(148),b=a(72),C=a.n(b),S=a(164),T=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row",backgroundColor:"#fff",border:"1px solid #ccc",borderRadius:5,width:364,position:"relative",height:44},menuButton:{margin:0,padding:7},autocomplete:{margin:2,flexGrow:1},searchInput:{height:40,margin:0}}}));function x(e){var t=T(),a=(e.companies||[]).map((function(e){return e.properties})),n=a.map((function(e){return e.company}));return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{lgUp:!0,implementation:"css"},o.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"menu",className:t.menuButton,onClick:e.onOpenMobileDrawer},o.a.createElement(C.a,{style:{fontSize:"1.8rem"}}))),o.a.createElement(A.a,{freeSolo:!0,selectOnFocus:!0,handleHomeEndKeys:!0,onChange:function(t,a){a&&n.includes(a.company)&&e.onSelectCompany(a)},options:a,getOptionLabel:function(e){return e.company},className:t.autocomplete,renderInput:function(e){return o.a.createElement(S.a,Object.assign({},e,{placeholder:"Search...",className:t.searchInput,margin:"dense",variant:"outlined"}))}}))}var O=a(74),j=a(102),N=a(156),w=a(162),B=a(75),M=a.n(B),I=a(155),D=a(165),L=a(153),k=a(157),H=a(154),P=a(166),W=a(159),G=y.maps,F=function(e){return{label:G[e].shortName,value:e}},z=Object(d.a)((function(e){return{container:{display:"flex","flex-direction":"row"},formControl:{margin:e.spacing(.5),minWidth:120,width:"100%","flex-direction":"row"},locationSelectorDropdown:{"flex-grow":1,"font-family":"Open Sans","font-size":"10pt"},menuItem:{"font-family":"Open Sans","font-size":"10pt"},divider:{height:22,width:2,content:""},goButton:{height:"100%"}}}));function J(e){var t=Object(n.useState)(F(e.selectedMapId)),a=Object(c.a)(t,2),r=a[0],i=a[1],l=z(),s=Object.keys(G).map(F);return o.a.createElement("div",{className:l.container},o.a.createElement(L.a,{variant:"outlined",className:l.formControl},o.a.createElement(W.a,{value:r.value,className:l.locationSelectorDropdown,onChange:function(e){return i(F(e.target.value))}},s.map((function(e,t){return o.a.createElement(P.a,{key:t,value:e.value,className:l.menuItem},e.label)}))),o.a.createElement("div",{className:l.divider}),o.a.createElement(j.a,{color:"primary",variant:"contained",className:l.goButton,onClick:function(){return e.onSelectMap(r.value)}},"Go")))}var Q=function(e){return e.toLowerCase().replace(/[/ ]/g,"-")};var R=Object(d.a)((function(e){return{settingsPane:{background:"rgba(244, 244, 244, 0.93)","max-width":320},drawer:Object(O.a)({},e.breakpoints.up("lg"),{width:320,flexShrink:0}),drawerPaper:{width:320,border:0},settingsPaneHeader:{backgroundColor:"#02346d",color:"#ffffff",border:0,textAlign:"center",padding:8},settingsPaneContent:{padding:4},settingsPaneSubheader:{padding:6},formControlLabel:{padding:1,marginLeft:-4},categoryCheckbox:{padding:2},categoryLabel:{display:"flex",flexDirection:"row",verticalAlign:"middle",fontFamily:"Open Sans",fontSize:"10pt"},categoryLegend:{content:"",width:15,height:15,margin:4,padding:0,borderRadius:3},formControl:{margin:e.spacing(.1)},paneCloseButton:{position:"absolute",top:0,right:8,padding:7}}}));function q(e){var t=R(),a=function(){return e.onToggleOpen(!1)},n=e.taxonomy.map((function(a,n){var r=Q(a.name),i=e.selectedCategories.has(r);return o.a.createElement(H.a,{key:n,className:t.formControlLabel,control:o.a.createElement(w.a,{className:t.categoryCheckbox,checked:i,onChange:e.onToggleCategory,name:r}),label:o.a.createElement("div",{className:t.categoryLabel},o.a.createElement("span",{className:t.categoryLegend,style:{background:a.color}}),a.name)})})),r=o.a.createElement("div",{className:t.settingsPane},o.a.createElement("div",{className:t.settingsPaneHeader},o.a.createElement(u.a,{variant:"h2"},"Options"),o.a.createElement(p.a,{lgUp:!0,implementation:"css"},o.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"close-menu",className:t.paneCloseButton,onClick:a},o.a.createElement(M.a,null)))),o.a.createElement("div",{className:t.settingsPaneContent},o.a.createElement("div",{className:t.settingsPaneSubheader},o.a.createElement(u.a,{variant:"h3"},"Select a location")),o.a.createElement(J,{onSelectMap:e.onSelectMap,selectedMapId:e.selectedMapId}),o.a.createElement(I.a,{style:{margin:4}}),o.a.createElement("div",{className:t.settingsPaneSubheader},o.a.createElement(u.a,{variant:"h3"},"Filter by category")),o.a.createElement("div",null,o.a.createElement(N.a,{color:"primary",variant:"contained"},o.a.createElement(j.a,{id:"select-all",onClick:e.onSelectAllCategories},"Select all"),o.a.createElement(j.a,{id:"select-none",onClick:e.onDeselectAllCategories},"Clear all"))),o.a.createElement(L.a,{component:"fieldset",className:t.formControl},o.a.createElement(k.a,null,n))));return o.a.createElement("div",{className:t.drawer},o.a.createElement(p.a,{lgUp:!0,implementation:"css"},o.a.createElement(D.a,{variant:"temporary",open:e.mobileDrawerOpen,onClose:a,ModalProps:{keepMounted:!0}},r)),o.a.createElement(p.a,{mdDown:!0,implementation:"css"},o.a.createElement(D.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,onClose:a},r)))}function U(e,t){return-1===e?"":t[e].name}function Y(e){for(var t=e.table.columns,a={},n=0;n<t.length;n++)a[t[n]]=n;var o=[];return e.table.data.forEach((function(t,n){var r={type:"Feature",properties:{idx:n,company:t[a.company],city:e.cities[t[a.city]],tax1:U(t[a.tax1],e.taxonomy),tax2:U(t[a.tax2],e.taxonomy),tax3:U(t[a.tax3],e.taxonomy),website:t[a.website]},geometry:{type:"Point",coordinates:[t[a.lng],t[a.lat]]}};["tax1","tax2","tax3"].forEach((function(e){var t="".concat(e,"sanitized"),a=r.properties[e];r.properties[t]=Q(a)})),o.push(r)})),{geojson:{type:"FeatureCollection",features:o},taxonomy:e.taxonomy}}function V(e){var t=""+"/data/".concat(e,".json");return fetch(t).then((function(e){return e.json()})).then(Y)}var X=a(77),Z=Object(X.a)({palette:{primary:{main:"#02346d"},secondary:{main:"#77ddf2"}},typography:{h1:{fontSize:"1.5rem"},h2:{fontSize:"1.4rem"},h3:{fontSize:"1.2rem"}}}),K=a(76),_=a.n(K),$=(a(100),y.maps),ee="energy-companies-point-layer";function te(){var e=document.getElementsByClassName("mapboxgl-popup");e[0]&&e[0].remove()}function ae(e,t){var a=t.geometry.coordinates.slice();te(),new s.a.Popup({}).setLngLat(a).setHTML(function(e){var t=["tax1","tax2","tax3"].map((function(t){return e[t]})).filter((function(e){return e})).join(" | ");return'\n    <div class="popup">\n      <h3 class="company-name">'.concat(e.company,'</h3>\n      <span class="category-info">').concat(t,'</span><br />\n      <span class="city-info">').concat(e.city,"</span><br />\n      <span>\n        <a href=").concat(e.website,' target="blank">').concat(e.website,"</a>\n      </span>\n    </div>")}(t.properties)).setMaxWidth("300px").addTo(e)}function ne(e,t,a){e.setCenter($[t].center),e.setZoom(6),a.then((function(a){e.addSource("companies",{type:"geojson",data:a.geojson});var n=a.taxonomy.map((function(e){return[e.name,e.color]})).flat().concat(["#ccc"]);e.addLayer({id:ee,type:"circle",source:"companies",paint:{"circle-radius":{stops:[[7,5],[14,12],[20,50]]},"circle-opacity":.85,"circle-color":["match",["get","tax1"]].concat(n),"circle-stroke-color":"#fff","circle-stroke-width":.4}}),e.on("mouseenter",ee,(function(t){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave",ee,(function(){e.getCanvas().style.cursor=""})),e.on("click",ee,(function(t){return ae(e,t.features[0])})),e.flyTo({center:$[t].flyTo,zoom:$[t].flyToZoom||8,speed:.5})}))}s.a.accessToken="pk.eyJ1IjoiZW5lcmd5c29jaWV0eW1hcHMiLCJhIjoiY2s4dWJxZXo1MDlmcTNtcXFyYWVuYTlzdCJ9.YS__mAp13-uA_yQlRcOYQw";var oe=function(){return window.location.hash.replace("#","")};var re=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row"},mainContent:{flexGrow:1,position:"relative"},mapContainer:{height:"100vh",top:0,right:0,left:0,bottom:0,backgroundColor:"#333"},mapOverlay:{position:"absolute",top:0,left:0,right:0,bottom:0,padding:0,pointerEvents:"none"},mapOverlayInner:{display:"block",position:"relative",height:"100%",width:"100%",margin:0,padding:0},mainControlOverlay:{position:"absolute",top:0,left:0,padding:0,margin:0,pointerEvents:"auto",display:"flex",flexDirection:"row"},insightLogoContainer:{padding:8},titleAndSearch:{padding:"4px 8px"},mapTitle:{color:"#fff",padding:"4px 0px",marginBottom:4}}}));function ie(){var e,t,a=re(),r=Object(n.useState)(null),i=Object(c.a)(r,2),l=i[0],d=i[1],f=Object(n.useState)(function(){var e=oe();return $.hasOwnProperty(e)?e:y.defaultMapId}()),g=Object(c.a)(f,2),h=g[0],A=g[1],E=Object(n.useState)([]),b=Object(c.a)(E,2),C=b[0],S=b[1],T=Object(n.useState)({}),O=Object(c.a)(T,2),j=O[0],N=O[1],w=Object(n.useState)(new Set([])),B=Object(c.a)(w,2),M=B[0],I=B[1],D=Object(n.useState)(!1),L=Object(c.a)(D,2),k=L[0],H=L[1];function P(e){I(function(e){return new Set(e.map((function(e){return Q(e.name)})))}(e))}function W(e){if(e!==h){te(),l.removeLayer(ee),l.removeSource("companies"),A(e),H(!1);var t=V(e);t.then(G),ne(l,e,t),P(C)}}function G(e){S(e.taxonomy),N(e.geojson),P(e.taxonomy)}return Object(n.useEffect)((function(){if(l||function(){var e=new s.a.Map({container:"map-container",style:"mapbox://styles/mapbox/dark-v10",center:$[h].center,zoom:6,minZoom:6}),t=V(h);t.then(G),e.on("load",(function(){e.addControl(new s.a.FullscreenControl,"bottom-right"),e.addControl(new s.a.NavigationControl,"bottom-right"),ne(e,h,t)})),d(e)}(),l&&l.getLayer(ee)){var e=["any"];[1,2,3].forEach((function(t){var a=["in","tax".concat(t,"sanitized")];M.forEach((function(e){return a.push(e)})),e.push(a)})),l.setFilter(ee,e)}})),e=h,t=function(e){$.hasOwnProperty(e)&&W(e)},Object(n.useEffect)((function(){window.location.hash="#"+e;var a=function(){t(oe())};return window.addEventListener("hashchange",a),function(){window.removeEventListener("hashchange",a)}})),o.a.createElement(m.a,{theme:Z},o.a.createElement("div",{className:a.root},o.a.createElement(q,{selectedMapId:h,mobileDrawerOpen:k,selectedCategories:M,onToggleOpen:H,onSelectMap:W,taxonomy:C,onSelectAllCategories:function(){return P(C)},onDeselectAllCategories:function(){I(new Set)},onToggleCategory:function(e){var t=new Set(M);t.has(e.target.name)?t.delete(e.target.name):t.add(e.target.name),I(t)}}),o.a.createElement("main",{className:a.mainContent},o.a.createElement("div",{id:"map-container",className:a.mapContainer}),o.a.createElement("div",{className:a.mapOverlay},o.a.createElement("div",{className:a.mapOverlayInner},o.a.createElement("div",{className:a.mainControlOverlay},o.a.createElement(p.a,{smDown:!0,implementation:"css"},o.a.createElement("div",{className:a.insightLogoContainer},o.a.createElement("img",{src:_.a,alt:"aes insight logo",height:"80"}))),o.a.createElement("div",{className:a.titleAndSearch},o.a.createElement("div",{className:a.mapTitle},o.a.createElement(u.a,{variant:"h1"},$[h].title)),o.a.createElement(x,{companies:j.features,onSelectCompany:function(e){var t=j.features[e.idx];ae(l,t),l.flyTo({center:t.geometry.coordinates,zoom:14})},onOpenMobileDrawer:function(){return H(!0)}}))),o.a.createElement(v,{selectedMapId:h}))))))}i.a.render(o.a.createElement(ie,null),document.getElementById("root"))},32:function(e){e.exports=JSON.parse('{"defaultMapId":"silicon-valley","maps":{"silicon-valley":{"title":"Silicon Valley Energy Ecosystem","shortName":"Silicon Valley","center":[-121,36.5],"flyTo":[-122.21,37.65],"displayStanfordLogo":true},"chicago":{"title":"Chicago Energy Ecosystem","shortName":"Chicago","center":[-88.5,41.1],"flyTo":[-87.829,41.879]},"msp":{"title":"Minneapolis/St. Paul Energy Ecosystem","shortName":"Minneapolis/St. Paul","center":[-93.1,44.78],"flyTo":[-93.2,44.9]},"milwaukee":{"title":"Milwaukee Energy Ecosystem","shortName":"Milwaukee","center":[-88.1,42.8],"flyTo":[-87.9,43]},"indianapolis":{"title":"Indianapolis Energy Ecosystem","shortName":"Indianapolis","center":[-85.95,39.6],"flyTo":[-86.15,39.8]},"madison":{"title":"Madison Energy Ecosystem","shortName":"Madison","center":[-89.4,42.9],"flyTo":[-89.39,43.07]},"st-louis":{"title":"St. Louis Energy Ecosystem","shortName":"St. Louis","center":[-90.4,38.8],"flyTo":[-90.2,38.63]},"des-moines":{"title":"Des Moines Energy Ecosystem","shortName":"Des Moines","center":[-93.3,41.4],"flyTo":[-93.6,41.6]},"kansas-city":{"title":"Kansas City Energy Ecosystem","shortName":"Kansas City","center":[-94.5,38.8],"flyTo":[-94.6,39.1]},"pittsburgh":{"title":"Pittsburgh Energy Ecosystem","shortName":"Pittsburgh","center":[-79.9,40.3],"flyTo":[-80,40.4]}}}')},71:function(e,t){e.exports="data:image/png;base64,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"},76:function(e,t,a){e.exports=a.p+"static/media/insight-white.34d5565a.png"},87:function(e,t,a){e.exports=a(101)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.12bb1797.chunk.js.map