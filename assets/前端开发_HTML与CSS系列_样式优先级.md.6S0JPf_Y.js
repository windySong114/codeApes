import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.DZKVYKRh.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端开发/HTML与CSS系列/样式优先级.md","filePath":"前端开发/HTML与CSS系列/样式优先级.md"}'),t={name:"前端开发/HTML与CSS系列/样式优先级.md"},l=e(`<div style="text-align:center;"><h1>样式优先级</h1></div><ol><li><h2 id="样式渲染的优先级-由高到低" tabindex="-1">样式渲染的优先级，由高到低 <a class="header-anchor" href="#样式渲染的优先级-由高到低" aria-label="Permalink to &quot;样式渲染的优先级，由高到低&quot;">​</a></h2><ul><li><p>!important：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.main-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#000000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>内联样式：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color: #000000;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>ID选择器：#ID名</p></li><li><p>伪类选择器：:link、:visited、:active：、:hover、:focus</p></li><li><p>属性选择器：如：input[name=value]等</p></li><li><p>类选择器：.类名</p></li><li><p>伪元素选择器：::before 和 ::after</p></li><li><p>标签选择器：如div、p等</p></li></ul></li></ol>`,2),n=[l];function p(h,r,d,k,o,c){return a(),i("div",null,n)}const g=s(t,[["render",p]]);export{u as __pageData,g as default};
