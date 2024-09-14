(script.js)

```javascript
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    alert('Formulário enviado com sucesso!');
});
```