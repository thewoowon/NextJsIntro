
import Layout from "../components/Layout"

export default function App({Component,pageProps}){
    return (
        <div>
            <Layout>
                <Component {...pageProps}></Component>
            </Layout>
            <span>Hello</span>
        </div>
    )
}