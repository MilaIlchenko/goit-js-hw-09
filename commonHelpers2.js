import"./assets/styles-b03c5641.js";console.log("Form");const e=document.querySelector(".feedback-form"),s="feedback-form-state";e.addEventListener("submit",m);e.addEventListener("input",l);r();function m(t){t.preventDefault();const a=e.elements.email.value,o=e.elements.message.value;if(!a||!o){alert("Заповніть всі поля!");return}console.log(JSON.parse(localStorage.getItem(s))),localStorage.removeItem(s),t.currentTarget.reset()}function l(){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}function r(){const t=localStorage.getItem(s);if(t){const a=JSON.parse(t);e.elements.email.value=a.email,e.elements.message.value=a.message}}
//# sourceMappingURL=commonHelpers2.js.map
