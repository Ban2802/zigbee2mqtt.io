"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19738],{18940:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-14434ef0",path:"/devices/zbmini-l.html",title:"SONOFF ZBMINI-L control via MQTT",lang:"en-US",frontmatter:{title:"SONOFF ZBMINI-L control via MQTT",description:"Integrate your SONOFF ZBMINI-L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-31T18:55:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Group commands",slug:"group-commands",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/zbmini-l.md",git:{updatedTime:1649180079e3}}},43846:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o=i(66252);const a=(0,o.uE)('<h1 id="sonoff-zbmini-l" tabindex="-1"><a class="header-anchor" href="#sonoff-zbmini-l" aria-hidden="true">#</a> SONOFF ZBMINI-L</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZBMINI-L</td></tr><tr><td>Vendor</td><td>SONOFF</td></tr><tr><td>Description</td><td>Zigbee smart switch (no neutral)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZBMINI-L.jpg" alt="SONOFF ZBMINI-L"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="group-commands" tabindex="-1"><a class="header-anchor" href="#group-commands" aria-hidden="true">#</a> Group commands</h3>',4),d=(0,o.Uk)("This device "),r={href:"https://github.com/Koenkk/zigbee2mqtt/issues/11934",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("does not support"),n=(0,o.Uk)(" group commands."),c=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),h={},u=(0,i(83744).Z)(h,[["render",function(e,t){const i=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[d,(0,o._)("a",r,[s,(0,o.Wm)(i)]),n]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);