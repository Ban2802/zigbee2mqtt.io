"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83707],{88439:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-fa612ea6",path:"/devices/F20T60A.html",title:"BTicino F20T60A control via MQTT",lang:"en-US",frontmatter:{title:"BTicino F20T60A control via MQTT",description:"Integrate your BTicino F20T60A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-27T13:41:36.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Force read power",slug:"force-read-power",children:[]},{level:3,title:"Power Alarm Configuration",slug:"power-alarm-configuration",children:[]},{level:3,title:"Identify",slug:"identify",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Device_mode (enum)",slug:"device-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/F20T60A.md",git:{updatedTime:1649180079e3}}},86290:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var o=a(66252);const n=(0,o.uE)('<h1 id="bticino-f20t60a" tabindex="-1"><a class="header-anchor" href="#bticino-f20t60a" aria-hidden="true">#</a> BTicino F20T60A</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>F20T60A</td></tr><tr><td>Vendor</td><td>BTicino</td></tr><tr><td>Description</td><td>DIN power consumption module (same as Legrand 412015)</td></tr><tr><td>Exposes</td><td>switch (state), power, device_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/F20T60A.jpg" alt="BTicino F20T60A"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>This device ONLY works on channel 11. Once configured on channel 11, put your network in join mode and the device (steady red light) will auto join it.</p><h3 id="force-read-power" tabindex="-1"><a class="header-anchor" href="#force-read-power" aria-hidden="true">#</a> Force read power</h3><ul><li><code>power</code>: Asks the device for the current active power.</li></ul><p>Example of MQTT message payload to ask for the active power. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/get</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;power&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="power-alarm-configuration" tabindex="-1"><a class="header-anchor" href="#power-alarm-configuration" aria-hidden="true">#</a> Power Alarm Configuration</h3><ul><li><code>power_alarm</code>: enables or disables the power alarm, and sets the value: <code>DISABLE</code> (default) / <code>integer</code> (in kWh)</li></ul><p>Example of MQTT message payload to disable the power alarm. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DISABLE&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Example of MQTT message payload to enable the power alarm at 3.3 kWh. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3300&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>When it reaches that value, the <code>power_alarm_active</code> binary_sensor will change to <code>true</code>.</p><h3 id="identify" tabindex="-1"><a class="header-anchor" href="#identify" aria-hidden="true">#</a> Identify</h3><p>Helps to identify the device using the LED.</p><ul><li><p><code>identify[&#39;effect&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>blink3</code></li><li><code>fixed</code></li><li><code>blinkgreen</code></li><li><code>blinkblue</code></li></ul></li><li><p><code>identify[&#39;color&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>default</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>lightblue</code></li><li><code>yellow</code></li><li><code>pink</code></li><li><code>white</code></li></ul></li></ul><p>Example of MQTT message payload to Identify the device. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;identify&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blink3&quot;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',22),i=(0,o.Uk)("How to use device type specific configuration"),s=(0,o.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum" aria-hidden="true">#</a> Device_mode (enum)</h3><p>switch: allow on/off, auto will use wired action via C1/C2 on contactor for example with HC/HP. Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>auto</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),r={},c=(0,a(83744).Z)(r,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[i])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);