import { useEffect, useState, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import { getProductShop } from "../../services";
import { Link } from "react-router-dom";
import "./index.css";
import CreateProduct from "../../components/CreateProduct";
import EditDeleteProduct from "../../components/EditDeleteProduct";
const AdminProduct = () => {

    //Traemos los datos de firebase
    const [shop, setShop] = useState([]);
    const fetchShop = async () => {
        const data = await getProductShop();
        setShop(data);
    }
    useEffect(() => {
        fetchShop();
    }, []);


    return (
        <Container maxWidth="xl" className="container">
            <div className="div-container">
                <Grid container mt={5} justifyContent="end">
                    <CreateProduct fetchShop={fetchShop}></CreateProduct>
                </Grid>
                <Grid container ml={18} >
                    {shop.length > 0 && shop.map((product) => (
                        <Grid item md={4} mt={4}>
                            <img className="product-photo" src={product.url} alt=""></img>
                            <div className="description" >
                                <p>{product.name}</p>
                                <p>{product.material}</p>
                                <p className="container-buttons">
                                    <span className="price">S/.
                                        {product.precio}
                                    </span>
                                    {/*<span className="price-tacched">$ {product.price}</span>
                                <ButtonForProduct clothe={product}/>*/}

                                </p>
                                <Link to={`/admin/${product.id}`}>
                                    <Button color="info">Editar</Button>
                                </Link>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </div>

        </Container>
    );
}
export default AdminProduct;