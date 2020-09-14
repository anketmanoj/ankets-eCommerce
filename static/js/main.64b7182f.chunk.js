(this["webpackJsonpankets-shopping-cart"]=this["webpackJsonpankets-shopping-cart"]||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),s=a.n(l),i=(a(25),a(12)),o=a(1),c=a(2),u=a(4),d=a(3),m=a(7);function p(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "}var h=a(6),v=a.n(h),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleInput=function(e){r.setState(Object(m.a)({},e.target.name,e.target.value))},r.createOrder=function(e){e.preventDefault();var t={name:r.state.name,email:r.state.email,address:r.state.address,cartItems:r.props.cartItems};r.props.createOrder(t)},r.state={name:"",email:"",address:"",showCheckOut:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return n.a.createElement("div",null,0===t.length?n.a.createElement("div",{className:"cart cart-header"},"Cart is empty"):n.a.createElement("div",{className:"cart cart-header"},"You have ",t.length," in the cart"," "),n.a.createElement("div",null,n.a.createElement("div",{className:"cart"},n.a.createElement(v.a,{left:!0,cascade:!0},n.a.createElement("ul",{className:"cart-items"},t.map((function(t){return n.a.createElement("li",{key:t._id},n.a.createElement("div",null,n.a.createElement("img",{src:t.image,alt:t.title})),n.a.createElement("div",null,n.a.createElement("div",null,t.title),n.a.createElement("div",{className:"right"},p(t.price)," x ",t.count," "," ",n.a.createElement("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)}},"Remove"))))}))))),0!==t.length&&n.a.createElement("div",null,n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"total"},n.a.createElement("div",null,"Total:"," ",p(t.reduce((function(e,t){return e+t.price*t.count}),0))),n.a.createElement("button",{onClick:function(){e.setState({showCheckOut:!0})},className:"button primary"},"Proceed"))),this.state.showCheckOut&&n.a.createElement(v.a,{right:!0,cascade:!0},n.a.createElement("div",{className:"cart"},n.a.createElement("form",{onSubmit:this.createOrder},n.a.createElement("ul",{className:"form-container"},n.a.createElement("li",null,n.a.createElement("label",null,"Email"),n.a.createElement("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})),n.a.createElement("li",null,n.a.createElement("label",null,"Name"),n.a.createElement("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})),n.a.createElement("li",null,n.a.createElement("label",null,"Address"),n.a.createElement("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})),n.a.createElement("li",null,n.a.createElement("button",{className:"button primary",type:"submit"},"Checkout")))))))))}}]),a}(r.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"filter"},n.a.createElement("div",{className:"filter-results"},this.props.count," Products"),n.a.createElement("div",{className:"filter-sort"},"Order"," ",n.a.createElement("select",{value:this.props.size,onChange:this.props.sortProducts},n.a.createElement("option",null,"Latest"),n.a.createElement("option",{value:"lowest"},"Lowest"),n.a.createElement("option",{value:"highest"},"Highest"))),n.a.createElement("div",{className:"filter-size"},"Filter"," ",n.a.createElement("select",{value:this.props.size,onChange:this.props.filterProducts},n.a.createElement("option",{value:"ALL"},"ALL"),n.a.createElement("option",{value:"XS"},"XS"),n.a.createElement("option",{value:"S"},"S"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L"),n.a.createElement("option",{value:"XL"},"XL"),n.a.createElement("option",{value:"XXL"},"XXL"))))}}]),a}(r.Component),y=a(18),b=a.n(y),g=a(19),S=a.n(g),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).openModal=function(e){r.setState({product:e})},r.closeModal=function(){r.setState({product:null})},r.state={product:null},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.product;return n.a.createElement("div",null,n.a.createElement(v.a,{bottom:!0,cascade:!0},n.a.createElement("ul",{className:"products"},this.props.products.map((function(t){return n.a.createElement("li",{key:t._id},n.a.createElement("div",{className:"product"},n.a.createElement("a",{href:"#"+t._id,onClick:function(){return e.openModal(t)}},n.a.createElement("img",{src:t.image,alt:t.title}),n.a.createElement("p",null,t.title)),n.a.createElement("div",{className:"product-price"},n.a.createElement("div",null,p(t.price)),n.a.createElement("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary"},"Add to cart"))))})))),t&&n.a.createElement(b.a,{isOpen:!0,onRequestClose:this.closeModal},n.a.createElement(S.a,null,n.a.createElement("button",{className:"close-modal",onClick:this.closeModal},"x"),n.a.createElement("div",null),n.a.createElement("div",{className:"product-details"},n.a.createElement("img",{src:t.image,alt:t.title}),n.a.createElement("div",{className:"product-details-description"},n.a.createElement("p",null,n.a.createElement("strong",null,t.title)),n.a.createElement("p",null,t.description),n.a.createElement("p",null,"Available Sizes: "," ",t.availableSizes.map((function(e){return n.a.createElement("span",null," "," ",n.a.createElement("button",{className:"button"},e))}))),n.a.createElement("div",{className:"product-price"},n.a.createElement("div",null,p(t.price)),n.a.createElement("button",{className:"button primary",onClick:function(){e.props.addToCart(t),e.closeModal()}},"Add to cart")))))))}}]),a}(r.Component),C=a(8),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).createOrder=function(e){alert("Need to save order for "+e.name)},e.removeFromCart=function(t){var a=e.state.cartItems.slice();e.setState({cartItems:a.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(a.filter((function(e){return e._id!==t._id}))))},e.addToCart=function(t){var a=e.state.cartItems.slice(),r=!1;a.forEach((function(e){e._id===t._id&&(e.count++,r=!0)})),r||a.push(Object(i.a)(Object(i.a)({},t),{},{count:1})),e.setState({cartItems:a}),localStorage.setItem("cartItems",JSON.stringify(a))},e.sortProducts=function(t){var a=t.target.value;console.log(t.target.value),e.setState((function(t){return{sort:a,products:e.state.products.slice().sort((function(e,t){return"lowest"===a?e.price>t.price?1:-1:"highest"===a?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){""===t.target.value?e.setState({size:t.target.value,product:C.products}):e.setState({size:t.target.value,products:C.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.state={products:C.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:""},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"grid-container"},n.a.createElement("header",null,n.a.createElement("a",{href:"/"},"Ankets Shop")),n.a.createElement("main",null,n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"main"},n.a.createElement(f,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),n.a.createElement(O,{products:this.state.products,addToCart:this.addToCart})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(E,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder})))),n.a.createElement("footer",null,"All rights are reserved"))}}]),a}(n.a.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"/images/dress1.jpg","title":"Midi sundress with shirring detail","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL","XXL"],"price":29.9},{"_id":"dress2","image":"/images/dress2.jpg","title":"Midi sundress with ruched front","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":18.9},{"_id":"dress3","image":"/images/dress3.jpg","title":"Midi dress in pink ditsy floral","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":14.9},{"_id":"dress4","image":"/images/dress4.jpg","title":"cami maxi dress in polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL"],"price":25.9},{"_id":"dress5","image":"/images/dress5.jpg","title":"Frill mini dress in yellow polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL"],"price":10.9},{"_id":"dress6","image":"/images/dress6.jpg","title":"Midi tea dress in blue and red spot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":49.9}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.64b7182f.chunk.js.map