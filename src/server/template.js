export default ({ body }) => `
<!doctype html>
<html>
  <head>
    <title>React Boilerplate</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/bundle.js"></script>
  </body>
</html>
`;
