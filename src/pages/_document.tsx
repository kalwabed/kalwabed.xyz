import Document from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import emotionCache from '@/utils/emotionCache'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="emotion-css" data-emotion-css={ids.join(' ')} dangerouslySetInnerHTML={{ __html: css }} />
      ]
    }
  }
}
