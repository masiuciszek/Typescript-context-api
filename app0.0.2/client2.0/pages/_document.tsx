import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// export default class MyDocument extends Document {
//   static getInitialProps ({ renderPage }) {
//     const sheet = new ServerStyleSheet()
//     const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
//     const styleTags = sheet.getStyleElement()
//     return { ...page, styleTags }
//   }

//   render () {
//     return (
//       <html>
//         <Head>
//           <title>My page</title>
//           {this.props.styleTags}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }
