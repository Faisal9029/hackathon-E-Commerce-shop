import EditorsPics from "../app/components/editors-pics";
import FeatureProducts from "../app/components/feature-products";
import FeauresPosts from "../app/components/feaures-posts";
import Hero from "../app/components/hero";
import Header from "../app/components/header";



export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <EditorsPics />
    <FeatureProducts />
    <FeauresPosts /> 
    </>
  );
}