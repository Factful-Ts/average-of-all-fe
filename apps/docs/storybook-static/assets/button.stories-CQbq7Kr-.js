import{j as u}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";var f=Object.defineProperty,_=Object.defineProperties,b=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,y=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&l(r,t,e[t]);if(a)for(var t of a(e))c.call(e,t)&&l(r,t,e[t]);return r},v=(r,e)=>_(r,b(e)),O=(r,e)=>{var t={};for(var o in r)d.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&a)for(var o of a(r))e.indexOf(o)<0&&c.call(r,o)&&(t[o]=r[o]);return t},m=r=>{var e=r,{children:t}=e,o=O(e,["children"]);return u.jsx("button",v(y({type:"button"},o),{children:t}))};const x={component:m,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},n={render:r=>React.createElement(m,{...r,onClick:()=>{alert("Hello from Turborepo!")}},"Hello"),name:"Button",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}};var s,p,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert('Hello from Turborepo!');
  }}>
      Hello
    </Button>,
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
    style: {
      color: 'blue',
      border: '1px solid gray',
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const j=["Primary"];export{n as Primary,j as __namedExportsOrder,x as default};
