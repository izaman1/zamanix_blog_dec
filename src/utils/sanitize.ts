import sanitizeHtml from 'sanitize-html';

export const sanitizeHtml = (content: string): string => {
  return sanitizeHtml(content, {
    allowedTags: [
      'p', 'h1', 'h2', 'h3', 'strong', 'em', 'u', 'br', 'div', 'span'
    ],
    allowedAttributes: {
      '*': ['style', 'class']
    },
    allowedStyles: {
      '*': {
        'text-align': [/^left$/, /^right$/, /^center$/],
        'font-size': [/.*/]
      }
    }
  });
};