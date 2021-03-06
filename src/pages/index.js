import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed"


export default function Home({ products }) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header Component */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />


        {/* Product Feed */}

        <ProductFeed products={products}/>
        <p></p>
      </main>  
    </div>
  );
}


export async function getServerSideProps(context) {

  const products = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json());
  
    return { 
      props: {
        products,
    },
  }
}

//GET https://fakestoreapi.com/products


//The index.js is what shows the content of every page. The order in which each component is placed is the order in which it appears.