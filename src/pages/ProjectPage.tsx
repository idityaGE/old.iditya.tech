// import { useLocation } from "react-router-dom";
// import React from 'react'

import React from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRenderer';

const MyPage: React.FC = () => {
  const markdownContent = `
# TypeScript Markdown Example

## Table Example
| Name | Age | City |
|------|-----|------|
| John | 25  | NYC  |
| Jane | 30  | LA   |

## Video Example
youtube: https://www.youtube.com/watch?v=dQw4w9WgXcQ

## Code Example
**hello.ts**
\`\`\`js
console.log('Hello, World!');
const add = (a: number, b: number): number => a + b;
console.log(add(5, 3));

\`\`\`

## Image Example
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

## List Example
- Item 1
- Item 2
- Item 3

## Numbered List Example
1. First item
2. Second item
3. Third item

## Link Example
[title](https://www.example.com)

## Task List Example
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

~~The world is flat.~~

term
: definition

> blockquote
  `;

  return (
    <div className=''>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default MyPage;