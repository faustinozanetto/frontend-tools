import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="bg-white text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
