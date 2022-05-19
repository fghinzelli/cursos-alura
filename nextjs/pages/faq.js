import FAQScreen from '../src/screens/FaqScreen';

export default FAQScreen;

export async function getStaticProps(context) {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then(response => response.json())
        .then(data => data);

    return {
        props: {
            qualquercoisa: 'abcd',
            faq
        }
    }
}