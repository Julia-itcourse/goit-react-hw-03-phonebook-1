(this["webpackJsonpgoit-hw-react-03-phonebook"]=this["webpackJsonpgoit-hw-react-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form__input:"Filter_form__input__Q2Qzy"}},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n.n(o),r=n(9),i=n.n(r),s=(n(18),n(12)),u=n(3),l=n(4),m=n(6),h=n(5),b=n(7),d=n.n(b),f=function(t){var e=t.contact,n=t.onRemoveContact;return Object(a.jsxs)("li",{className:d.a.item,children:[Object(a.jsxs)("span",{className:d.a.text,children:[e.name,": ",e.number]}),Object(a.jsx)("button",{className:d.a.button,type:"button",onClick:n,children:"Remove"})]})},j=function(t){var e=t.contacts,n=t.onRemoveContact;return console.log("contacts in ContactList",e),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(f,{contact:t,onRemoveContact:function(){return n(t.id)}},t.id)}))})]})},p=n(10),_=n(2),v=n.n(_),O=n(21),C=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.value,o=n.name;t.setState(Object(p.a)({},o,a))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(O.a)(),name:t.state.name,number:t.state.number};t.props.onAddContact(n),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.form__group,children:[Object(a.jsx)("input",{className:v.a.form__input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange,placeholder:"Name",required:!0}),Object(a.jsx)("input",{className:v.a.form__input,name:"number",type:"text",value:this.state.number,onChange:this.handleChange,placeholder:"Phone number",required:!0}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(o.Component),x=n(11),g=n.n(x),y=function(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Filter the contact list"}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:g.a.form__input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}})})]})};y.defaultProps={value:""};var k=y,S=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.onAddContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in the phonebook!")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}})),console.log("Contacts in onAddContact",t.state.contacts)},t.onRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onChangeFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(C,{onAddContact:this.onAddContact}),this.state.contacts.length>1&&Object(a.jsx)(k,{value:this.state.filter,onChangeFilter:this.onChangeFilter}),this.state.contacts.length>0&&Object(a.jsx)(j,{contacts:e,onRemoveContact:this.onRemoveContact})]})}}]),n}(o.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form__group:"PhonebookForm_form__group__1Lie3",form__label:"PhonebookForm_form__label__BuK0i",form__input:"PhonebookForm_form__input__2oVHx",button:"PhonebookForm_button__2sidu"}},7:function(t,e,n){t.exports={text:"ContactItem_text__1faMV",item:"ContactItem_item__3jNiD",button:"ContactItem_button__owliu"}}},[[19,1,2]]]);
//# sourceMappingURL=main.64ce986d.chunk.js.map