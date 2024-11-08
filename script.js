// Substitua 'YOUR_APP_ID', 'YOUR_API_KEY' e 'YOUR_JAVASCRIPT_KEY' pelas suas chaves do Backendless
const APP_ID = '22AF0CE2-C3D0-4CBD-8544-50826D808F56';
const API_KEY = '61C085A9-8E89-4B00-9FEF-14B06A29DF75';
const JAVASCRIPT_KEY = '8D58351A-7C97-4794-AD3F-06D46E382A87';

Backendless.initApp(APP_ID, API_KEY, JAVASCRIPT_KEY);

const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email-login').value;
  const senha = document.getElementById('senha-login').value;

  // Fazer login no Backendless
  Backendless.UserService.login(email, senha)
    .then((user) => {
      // Login bem-sucedido, redirecionar para admin-dashboard.html
      window.location.href = 'admin-dashboard.html';
    })
    .catch((error) => {
      console.error(error);
      // Exibir mensagem de erro para o usuário
    });
});

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email-cadastro').value;
  const senha = document.getElementById('senha-cadastro').value;

  // Cadastrar usuário no Backendless
  const user = new Backendless.User();
  user.email = email;
  user.password = senha;

  Backendless.UserService.register(user)
    .then(() => {
      // Cadastro bem-sucedido, exibir mensagem de sucesso ou redirecionar
    })
    .catch((error) => {
      console.error(error);
      // Exibir mensagem de erro para o usuário
    });
});
