const Product = (props) => {
    const name = props.name;
    const details = props.details;
    const cat = props.cat;
    const sku = props.sku;
    const price = props.price;
    const quant = props.quant;
    const id = props.id;
    const img = props.img;

    return(
        <div className="productList flex-auto">
    <div className="card" key={props.id}>
       
        <div className="productContent text-center justify-items-center">
            <h1 className="productName text-blue-800 mx-2" >{props.name}</h1>
            <img src={props.img} alt="" className="flex justify-items-center mx-2"/>
        </div>
        <div className="displayStack">
            <div className="productPrice">${props.price}</div>
        </div>

    </div>
    
</div>

    );
    

 }
 export default Product