# Treinamento de Capacitação Profissional

Site estático para divulgação e inscrição do evento **Treinamento de Capacitação Profissional**.

## O que foi criado

- Landing page responsiva em `index.html`.
- Estilos visuais em `styles.css`.
- Interações em `script.js`: menu mobile, dark/light, contador regressivo, FAQ, navegação ativa e animações.
- Inscrição via Sympla: <https://www.sympla.com.br/evento/teste-para-site/3399924>.
- QR Code gerado automaticamente para o mesmo link de inscrição.
- Logos reais em `images/logoClara.jpeg` e `images/logoEscura.jpeg`.

## Como editar os dados do evento

Abra o arquivo `index.html` e procure pelos textos que deseja alterar.

Campos importantes para revisar quando os dados definitivos estiverem prontos:

- Nome do projeto.
- Local do treinamento.
- Horários de cada dia.
- Descrição dos conteúdos de cada encontro.
- Palestrantes, iniciais e descrições.
- Link do grupo do WhatsApp, hoje está como `https://chat.whatsapp.com/SEU-LINK-AQUI`.
- Link definitivo do Sympla, se ele mudar.

Se o link do Sympla mudar, troque todas as ocorrências de:

```txt
https://www.sympla.com.br/evento/teste-para-site/3399924
```

Também troque o link codificado usado no QR Code:

```txt
https%3A%2F%2Fwww.sympla.com.br%2Fevento%2Fteste-para-site%2F3399924
```

Para gerar um novo link codificado, acesse um codificador de URL gratuito e cole o novo link do Sympla.

## Como trocar o link do WhatsApp

No `index.html`, procure por:

```txt
https://chat.whatsapp.com/SEU-LINK-AQUI
```

Substitua pelo link real do grupo. Enquanto esse texto estiver como placeholder, o botão mostra um aviso para evitar divulgação com link quebrado.

## Onde editar seções principais

- `#palestrantes`: nomes, iniciais, áreas e descrições dos convidados.
- `#cronograma`: datas, horários e conteúdo de cada dia.
- `#voce-leva`: benefícios diretos para os participantes.
- `#entregas`: bastidores e entregas internas do projeto.
- `#faq`: perguntas frequentes.

## Sobre formulário do Sympla

Pela documentação pública encontrada, o Sympla permite criar formulários personalizados dentro da própria plataforma, mas não fica clara uma opção simples e oficial para incorporar o formulário completo diretamente em um site externo.

Por isso, a solução mais segura para este site é:

- Botão levando para o Sympla.
- QR Code levando para o Sympla.
- O formulário e a lista de inscritos ficam centralizados no painel do Sympla.

## Como abrir o site no computador

1. Abra a pasta do projeto.
2. Clique duas vezes em `index.html`.
3. O site abrirá no navegador.

Se preferir testar como servidor local, instale a extensão **Live Server** no Cursor/VSCode e clique com o botão direito em `index.html` > **Open with Live Server**.

## Publicar de graça com GitHub Pages

Esta é uma opção gratuita e boa para sites estáticos.

### 1. Criar conta e repositório

1. Crie uma conta em <https://github.com>.
2. Clique em **New repository**.
3. Nome sugerido: `treinamento-capacitacao-profissional`.
4. Marque como **Public**.
5. Crie o repositório.

### 2. Enviar os arquivos

Opção simples pelo navegador:

1. Entre no repositório criado.
2. Clique em **Add file** > **Upload files**.
3. Envie estes arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Clique em **Commit changes**.

### 3. Ativar GitHub Pages

1. No repositório, vá em **Settings**.
2. Clique em **Pages**.
3. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
4. Clique em **Save**.

Depois de alguns minutos, o GitHub mostrará um link parecido com:

```txt
https://seu-usuario.github.io/treinamento-capacitacao-profissional/
```

## Publicar de graça com Netlify

O Netlify costuma ser mais fácil para conectar domínio.

1. Acesse <https://www.netlify.com>.
2. Crie uma conta gratuita.
3. Clique em **Add new site** > **Deploy manually**.
4. Arraste a pasta do projeto para a área indicada.
5. O Netlify criará um link gratuito.

Quando editar arquivos, basta fazer um novo deploy manual arrastando a pasta atualizada.

## Publicar de graça com Vercel

1. Acesse <https://vercel.com>.
2. Crie uma conta gratuita.
3. Importe o repositório do GitHub.
4. Como é um site estático simples, a Vercel detecta e publica automaticamente.

## Como usar um domínio comprado

Depois de comprar o domínio, você precisa apontá-lo para a plataforma escolhida.

### Se usar Netlify

1. Entre no site publicado no Netlify.
2. Vá em **Domain management**.
3. Clique em **Add a domain**.
4. Digite seu domínio, por exemplo:

```txt
www.seudominio.com.br
```

5. O Netlify mostrará os registros DNS necessários.
6. Entre no painel onde comprou o domínio e configure os registros indicados.

### Se usar GitHub Pages

1. Vá em **Settings** > **Pages**.
2. Em **Custom domain**, digite o domínio.
3. Configure o DNS no painel da empresa onde comprou o domínio.
4. Ative **Enforce HTTPS** quando estiver disponível.

## Checklist antes de divulgar

- Conferir se o link do Sympla está correto.
- Trocar o placeholder do WhatsApp pelo link real do grupo.
- Testar o QR Code com o celular.
- Confirmar local, horários e contatos.
- Revisar ortografia dos textos.
- Testar o site no celular.
- Testar os temas claro e escuro.
- Confirmar se a página do Sympla está aberta para inscrições.
- Confirmar se os certificados serão entregues no encerramento.

## Estrutura dos arquivos

```txt
.
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── logoClara.jpeg
│   └── logoEscura.jpeg
└── README.md
```
