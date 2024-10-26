import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const logCompletionItems: CompletionItem[] = [
  {
    label: 'log',
    kind: CompletionItemKind.Function,
    detail: 'Logs a message',
    documentation: 'Logs a message to the console',
    insertText: 'log("");'
  },
  {
    label: 'warn',
    kind: CompletionItemKind.Function,
    detail: 'Logs a warning',
    documentation: 'Logs a warning message to the console',
    insertText: 'warn("");'
  },
  {
    label: 'error',
    kind: CompletionItemKind.Function,
    detail: 'Logs an error',
    documentation: 'Logs an error message to the console',
    insertText: 'error("");'
  },
  {
    label: 'logc',
    kind: CompletionItemKind.Function,
    detail: 'Logs a color: logc("message", color)',
    documentation: 'Logs a message with a specified color',
    insertText: 'logc("", #FFFFFF);'
  },
];

export function resolveLogCompletionItem(item: CompletionItem): CompletionItem {
  if (item.label === 'log') {
    item.documentation = 'Logs a message to the console';
  } else if (item.label === 'warn') {
    item.documentation = 'Logs a warning to the console';
  } else if (item.label === 'error') {
    item.documentation = 'Logs an error message to the console';
  } else if (item.label === 'logc') {
    item.documentation = 'Logs a message with a color to the console';
  }
  return item;
}