// import { useLocation } from "react-router-dom";
// import React from 'react'

import React from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRender';

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
\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25
};
\`\`\`

## Image Example
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

## List Example
- Item 1
- Item 2
- Item 3
  `;

  return (
    <div className=''>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default MyPage;