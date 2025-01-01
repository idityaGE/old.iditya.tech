export default `
## 🚀 Assignment PDF Generator with HTML2Canvas and jsPDF

---

This project is a Next.js-based tool that generates a well-structured PDF file by capturing sections of a webpage using \`html2canvas\` and \`jsPDF\`. It is designed specifically for students who want to submit programming assignments in a uniform PDF format, featuring code, questions, and terminal outputs. The tool allows adding multiple questions, changing the code theme, and selecting the programming language.

---

## 🎥 Demo

youtube: https://youtu.be/94L8_5Gqc8A

## ✨ Features

- ✅ **Question and Answer Input**: Add multiple questions with corresponding code snippets and terminal outputs.
- 🌈 **Customizable Themes**: Choose different programming language themes for syntax highlighting.
- 📋 **PDF Generation**: Generate professional PDFs with customizable layouts.
- 🔎 **Dynamic Content Capture**: Include only relevant sections like code and output, excluding unnecessary parts.
- ⚖️ **Standardized Format**: Ensure consistent assignment formatting for ease of grading.

---
## 🚨 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) 🚀
- **Code Highlighting**: [React-Syntax-Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) 🌈
- **PDF Generation**: [html2canvas](https://html2canvas.hertzen.com/) and [jsPDF](https://github.com/parallax/jsPDF) 🔄
- **TypeScript**: For enhanced development experience 💎
- **CSS Modules**: Styled components for scoped CSS 💅

---
## 📃 How to Use

1.**Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/idityaGE/Assignment-Code-to-PDF.git
   cd Assignment - Code - to - PDF
   \`\`\`

2.**Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3.**Run the Application**:
   \`\`\`bash
   npm start
   \`\`\`
   Access the app at \`http://localhost:3000\`.

4. **Generate PDFs**:
   Add questions, code snippets, and terminal outputs.Click "Generate PDF" to download a structured PDF.

---
## 🔧 Customization

### Modify PDF Layout

   - Adjust margins and page sizes in the\`handleGeneratePDF()\` function.
- Include additional DOM elements by updating \`document.querySelector()\` logic.

### Themes and Languages

   - Modify supported languages and themes by updating the \`React-Syntax-Highlighter\` configuration.

---
## ❤️ Support Me

   - ☕ **[Buy Me a Coffee](https://www.buymeacoffee.com/idityage)**: If you appreciate this tool, consider supporting my work.
      - 🐦 **[Follow Me on Twitter](https://twitter.com/your-twitter-handle)**: Stay updated with my latest projects and innovations.

---      
## 🙏 Contributions

Contributions are welcome! Submit issues, fork the repository, and open pull requests.Let’s improve this project together.

---      
## 📜 License

This project is licensed under the MIT License.See the [LICENSE](LICENSE) file for more details.

---      
### 🔗 Repository Link

[GitHub Repository](https://github.com/idityaGE/Assignment-Code-to-PDF)
`