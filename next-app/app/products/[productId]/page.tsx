export default async function ProductPage({params} : {
    params: Promise<{productId : string}>
} ){
    const productId = (await params).productId
    return (
        <div>
            <h1>Product Page {productId} </h1>
        </div>
    )
}






// export default async function ProductPage(props: any) {

//   const params = await props.params;

//   const productId = params.productId;

//   return (
//     <div>
//       <h1>Product Page {productId}</h1>
//     </div>
//   );
// }