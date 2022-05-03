import GlobalStyle from "../styles/globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
