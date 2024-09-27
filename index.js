const addon = require('./lexer/sQeeZ-Lexer-Node');
const lexer = new addon.LexerNode(require);

console.log(addon.pingLexer());
console.log(lexer.pingInstance());
console.log(addon.info());
console.log(lexer.lex('log("Hello, World!");', false));