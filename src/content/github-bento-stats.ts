export default `
# GitHub Bento Stats

A React component to display GitHub stats in a bento-style layout.

## Image
![preview](https://res.cloudinary.com/dwdbqwqxk/image/upload/v1740995404/Screenshot_2025-03-03_030157_kq3hmb.png)

## Installation

Install the package using npm:

\`\`\`sh
npm i github-bento-stats
\`\`\`

## Usage

\`\`\`tsx
'use client';

import { GitHubBento } from 'github-bento-stats';

const Page = () => {
  const gitToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  
  if (!gitToken) {
    console.log("GitHub Token is not found");
    return null;
  }

  return (
    <div>
      <GitHubBento
        username='idityaGE'
        githubToken={gitToken}
        showGraph
      />
    </div>
  );
};

export default Page;
\`\`\`

## Props

| Prop         | Type     | Description                            |
|-------------|---------|--------------------------------|
| \`username\`  | string  | GitHub username.                  |
| \`githubToken\` | string  | GitHub personal access token (PAT). |
| \`showGraph\` | boolean | Show contribution graph (optional). |

## Environment Variables

Make sure to set up your GitHub token as an environment variable:

\`\`\`sh
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
\`\`\`
`