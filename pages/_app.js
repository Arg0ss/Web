import GlobalStyle from "../styles/globalStyle";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
