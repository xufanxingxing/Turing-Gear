(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,o,i){e.exports=i(216)},146:function(e,o,i){},147:function(e,o,i){},148:function(e,o,i){},201:function(e,o,i){},213:function(e,o,i){},214:function(e,o,i){},215:function(e,o,i){},216:function(e,o,i){"use strict";i.r(o);var a=i(0),n=i.n(a),t=i(8),l=i.n(t),r=(i(146),i(147),i(148),i(60)),m=i.n(r);i(149);console.log(m.a);for(var s=function(){return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"top-logo"},n.a.createElement("img",{style:{width:40,height:40,padding:5},src:m.a})))},d=i(35),f=i(21),c=i(44),p=i(36),b=i(45),g=i(81),u=(i(217),i(201),i(247)),L=["Nimbo ID","Company","Local Time","Public Wifi","Robox","Nimbo App","Slam","Software Version","Hardware Version","Mode","Live Streaming","Total Patrol Time","Log"],S=new Map,T=0;T<L.length;T++)S.set(L[T],T);var y=function(e){function o(){var e;return Object(d.a)(this,o),(e=Object(c.a)(this,Object(p.a)(o).call(this))).mockData=g,e}return Object(b.a)(o,e),Object(f.a)(o,[{key:"TableColumns",value:function(){for(var e=[],o=0;o<L.length;o++)e.push(n.a.createElement("th",null,L[o]));return n.a.createElement("tr",null,e)}},{key:"TableDataRow",value:function(e,o){return n.a.createElement("tr",{key:o},e.map(function(e,o){return n.a.createElement("td",{key:o},e)}))}},{key:"render",value:function(){for(var e=this,o=[],i=function(i){var a=e.mockData[i],t=L.map(function(e){return a[e]}),l=n.a.createElement("tr",{key:"row".concat(i)},t.map(function(e,o){switch(o){case S.get("Nimbo ID"):return n.a.createElement("td",null,n.a.createElement(u.a,{color:"primary"},e));case S.get("Company"):return n.a.createElement("td",null,n.a.createElement(u.a,{color:"secondary"},e));case S.get("Robox"):case S.get("Nimbo App"):case S.get("Slam"):return e.includes("Online")?n.a.createElement("td",null,n.a.createElement("span",{style:{color:"green"}},e)):n.a.createElement("td",null,n.a.createElement("span",{style:{color:"red"}},e));case S.get("Software Version"):case S.get("Hardware Version"):return e.includes("Updated")?n.a.createElement("td",null,n.a.createElement("span",{style:{color:"green"}},e)):n.a.createElement("td",null,n.a.createElement("span",{style:{color:"red"}},e));default:return n.a.createElement("td",{key:o},e)}}));o.push(l)},a=0;a<this.mockData.length;a++)i(a);return n.a.createElement("div",{className:"table-component"},n.a.createElement("div",{class:"table-wrapper"},n.a.createElement("table",null,n.a.createElement("tbody",null,this.TableColumns(),o))))}}]),o}(a.Component),O=i(46),_=(i(213),i(249)),P=i(259);var N=function(){return n.a.createElement(_.a,{className:"Header",container:!0,direction:"column"},n.a.createElement(O.a,{component:"h1",variant:"h6",color:"initial",align:"left",marginTop:"10"},"Turing Sevice Dashboard"),n.a.createElement(P.a,{className:"text-field",label:"Search",variant:"filled",helperText:"Please input a keyword",fullWidth:!0}))},w=(i(214),i(251)),v=i(252),E=i(254),C=i(257),h=i(258),V=i(250),W=i(253),D=i(255),I=i(256),A=function(e){function o(){var e;return Object(d.a)(this,o),(e=Object(c.a)(this,Object(p.a)(o).call(this))).state={isDevicesCollapseOpen:!0,isLabelsCollapseOpen:!0},e}return Object(b.a)(o,e),Object(f.a)(o,[{key:"modifyDevicesCollapse",value:function(){this.setState({isDevicesCollapseOpen:!this.state.isDevicesCollapseOpen})}},{key:"modifyLabelsCollapse",value:function(){this.setState({isLabelsCollapseOpen:!this.state.isLabelsCollapseOpen})}},{key:"titleText",value:function(e){return n.a.createElement(O.a,{type:"h3",style:{color:"#333"}},e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"sidenav-component",align:"center"},n.a.createElement(w.a,{button:!0,onClick:function(){return e.modifyDevicesCollapse()}},n.a.createElement(v.a,null,n.a.createElement(W.a,null)),n.a.createElement(E.a,{primary:this.titleText("Devices")}),this.state.isDevicesCollapseOpen?n.a.createElement(D.a,null):n.a.createElement(I.a,null)),n.a.createElement(C.a,null),n.a.createElement(h.a,{in:this.state.isDevicesCollapseOpen,timeout:"auto",unmountOnExit:!0},n.a.createElement(V.a,{component:"div",disablePadding:!0},n.a.createElement(w.a,{button:!0,className:"sidenav-list-item"},"Nimbo"),n.a.createElement(w.a,{button:!0,className:"sidenav-list-item"},"AiVR"))),n.a.createElement(w.a,{button:!0,onClick:function(){return e.modifyLabelsCollapse()}},n.a.createElement(v.a,null,n.a.createElement(W.a,null)),n.a.createElement(E.a,{primary:this.titleText("Labels")}),this.state.isLabelsCollapseOpen?n.a.createElement(D.a,null):n.a.createElement(I.a,null)),n.a.createElement(C.a,null),n.a.createElement(h.a,{in:this.state.isLabelsCollapseOpen,timeout:"auto",unmountOnExit:!0},n.a.createElement(V.a,{component:"div",disablePadding:!0},n.a.createElement(w.a,{button:!0,className:"sidenav-list-item"},"Stella's Label"),n.a.createElement(w.a,{button:!0,className:"sidenav-list-item"},"Anpu's Label"))))}}]),o}(a.Component);i(215);var U=function(){return n.a.createElement("div",{className:"Dashboard"},n.a.createElement(N,null),n.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between"},n.a.createElement(A,null),n.a.createElement(y,null)))};var x=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,o,i){e.exports=i.p+"static/media/logo.37f4cf57.jpg"},81:function(e){e.exports=[{"Nimbo ID":"robot_sr_dog_10044",Company:"Turing Video","Local Time":"15:45 PDT","Public Wifi":"Turing_Engineer (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.233)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Patrol","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10045",Company:"Turing Video","Local Time":"15:45 PDT","Public Wifi":"Turing_Engineer (Wifi)",Robox:"Offline (10.42.0.1)","Nimbo App":"Online (10.42.0.233)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Patrol","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10046",Company:"Smat Solution","Local Time":"15:45 PDT","Public Wifi":"Smat_bot (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.233)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Patrol","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10047",Company:"Smat Solution","Local Time":"15:45 PDT","Public Wifi":"Smat_bot (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline (10.42.0.234)",Slam:"Online (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10048",Company:"Smat Solution","Local Time":"15:45 PDT","Public Wifi":"Smat_bot (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.235)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10049",Company:"ACES","Local Time":"8:45 AEST","Public Wifi":"ACES1 (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.236)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10050",Company:"ACES","Local Time":"8:45 AEST","Public Wifi":"ACES1 (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.237)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10051",Company:"ACES","Local Time":"8:45 AEST","Public Wifi":"ACES_51 (LTE)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.238)",Slam:"Online (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10052",Company:"ACES","Local Time":"8:45 AEST","Public Wifi":"ACES_52 (LTE)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.239)",Slam:"Online (10.42.0.1)","Software Version":"Need to update","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10053",Company:"Securitas EU","Local Time":"12:45 EEST","Public Wifi":"Securitas_EU (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.240)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Patrol","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10054",Company:"CBC American","Local Time":"15:45 PDT","Public Wifi":"CBC_123 (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.241)",Slam:"Online (10.42.0.1)","Software Version":"Need to update","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10055",Company:"CBC American","Local Time":"15:45 PDT","Public Wifi":"CBC_123 (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.242)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10056",Company:"Mutual Safety","Local Time":"15:45 PDT","Public Wifi":"M_S (LTE)",Robox:"Online (10.42.0.1)","Nimbo App":"Offline  (10.42.0.243)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10057",Company:"One Piece","Local Time":"15:45 PDT","Public Wifi":"OnePiece Member (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.244)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10058",Company:"One Piece","Local Time":"15:45 PDT","Public Wifi":"OnePiece Member (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.245)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10059",Company:"One Piece","Local Time":"15:45 PDT","Public Wifi":"OnePiece Member (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.246)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Mapping","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10060",Company:"One Piece","Local Time":"15:45 PDT","Public Wifi":"OnePiece Member (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.247)",Slam:"Offline  (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10061",Company:"Ninebot Aisa","Local Time":"6:55 SST","Public Wifi":"Ninebot888 (LTE)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.248)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Idle","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10063",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Online (10.42.0.1)","Nimbo App":"Online (10.42.0.250)",Slam:"Online (10.42.0.1)","Software Version":"Updated","Hardware Version":"Updated",Mode:"Control","Live Streaming":"Playing","Total Patrol Time":"12h",Log:"Log"},{"Nimbo ID":"robot_sr_dog_10062",Company:"Lysys","Local Time":"2:55 GST","Public Wifi":"Lysys_Guest  (Wifi)",Robox:"Offline  (10.42.0.1)","Nimbo App":"Offline  (10.42.0.249)",Slam:"Offline  (10.42.0.1)","Software Version":"Need to update","Hardware Version":"need panda",Mode:"Idle","Live Streaming":"Offline","Total Patrol Time":"12h",Log:"Log"}]}},[[141,1,2]]]);
//# sourceMappingURL=main.ff4814a6.chunk.js.map