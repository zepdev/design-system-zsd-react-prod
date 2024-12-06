import{j as r}from"./jsx-runtime-1a9d9a93.js";import{r as d}from"./index-8b3efc3f.js";const j=({text:e,...n})=>{const{modifiers:t,missingModifierTypes:i}=p();return Object.keys(n).reduce((o,s)=>{if(!n[s])return o;const c=t[s];return c?r.jsx(c,{children:o}):(i.includes(s)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${s}"`),i.push(s)),o)},r.jsx(r.Fragment,{children:e}))},g=["image"],k=e=>{const{children:n,type:t,...i}=e;if(t==="code"){const l=o=>o.reduce((s,c)=>c.type==="text"?s.concat(c.text):c.type==="link"?s.concat(l(c.children)):s,"");return{...i,plainText:l(e.children)}}return i},h=({content:e})=>{const{children:n,type:t,...i}=e,{blocks:l,missingBlockTypes:o}=p(),s=l[t];if(!s)return o.includes(t)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${t}"`),o.push(t)),null;if(g.includes(t))return r.jsx(s,{...i});if(t==="paragraph"&&n.length===1&&n[0].type==="text"&&n[0].text==="")return r.jsx("br",{});const c=k(e);return r.jsx(s,{...c,children:n.map((a,x)=>{if(a.type==="text"){const{type:b,...f}=a;return d.createElement(j,{...f,key:x})}return r.jsx(h,{content:a},x)})})},u={blocks:{paragraph:e=>r.jsx("p",{children:e.children}),quote:e=>r.jsx("blockquote",{children:e.children}),code:e=>r.jsx("pre",{children:r.jsx("code",{children:e.plainText})}),heading:({level:e,children:n})=>{switch(e){case 1:return r.jsx("h1",{children:n});case 2:return r.jsx("h2",{children:n});case 3:return r.jsx("h3",{children:n});case 4:return r.jsx("h4",{children:n});case 5:return r.jsx("h5",{children:n});case 6:return r.jsx("h6",{children:n})}},link:e=>r.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?r.jsx("ol",{children:e.children}):r.jsx("ul",{children:e.children}),"list-item":e=>r.jsx("li",{children:e.children}),image:e=>r.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>r.jsx("strong",{children:e.children}),italic:e=>r.jsx("em",{children:e.children}),underline:e=>r.jsx("u",{children:e.children}),strikethrough:e=>r.jsx("del",{children:e.children}),code:e=>r.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},m=d.createContext(u),y=({children:e,value:n=u})=>{const t=d.useMemo(()=>n,[n]);return r.jsx(m.Provider,{value:t,children:e})};function p(){return d.useContext(m)}const B=e=>{const n={...u.blocks,...e.blocks},t={...u.modifiers,...e.modifiers},i=d.useRef([]),l=d.useRef([]);return r.jsx(y,{value:{blocks:n,modifiers:t,missingBlockTypes:i.current,missingModifierTypes:l.current},children:e.content.map((o,s)=>r.jsx(h,{content:o},s))})};export{B};
