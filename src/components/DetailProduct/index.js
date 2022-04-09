import { useEffect, useState } from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { getProductShopId, getProductShop, db } from "../../services";
import { useParams } from "react-router-dom";
const DetailProduct = () => {

    const { id } = useParams();

    const [open, setOpen] = useState(false);
    //Valores de inputs
    const [values, setValues] = useState({
        name: "",
        descripcion: "",
        dimension: "",
        funcion: "",
        url: "",
        rango: "",
        precio: "",
        material: "",
    });
    const ChangeInput = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const onDeleteLink = async (id) => {
        console.log(id);
    };

    const getProductShopId = async (id) => {
        const p = await getDoc(doc(db, "toys", id)); 
        if (p.exists()) {
            console.log(p.data());
            
            setValues({...values,
                name: p.name,
                descripcion: p.descripcion,
                dimension: p.dimension,
                funcion: p.funcion,
                url: p.url,
                rango: p.rango,
                precio: p.precio,
                material: p.material,
            });
        } else {
            console.log("No existe")
        }
    }
    /*const fetchProducts = async () => {
        const response = await getProductShopId(id);
        setValues(
            {
                
            }
        )

    }
*/
    useEffect(() => {
        getProductShopId(id);
    }, []);

    return (
        <Container>
            <Grid container >
                <Grid item md={12} mt={5} >
                    <TextField label="Nombre del Producto" value={values.name} name="name" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Dimensiones del producto" value={values.dimension} name="dimension" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Url de Foto" value={values.url} name="url" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={6} mt={2}>
                    <TextField label="Ingrese Rango de Edad" value={values.rango} name="rango" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={6} mt={2}>
                    <TextField label="Precio" value={values.precio} name="precio" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Material del Producto" value={values.material} name="material" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Funcion del Producto" value={values.funcion} name="funcion" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Descripcion del Producto" value={values.descripcion} name="descripcion" fullWidth onChange={ChangeInput} />
                </Grid>

                <Grid item md={6} mt={3}>
                    <Button variant="contained" name="btn" color="success" fullWidth>Actualizar</Button>
                </Grid>
                <Grid item md={6} mt={3}>
                    <Button variant="contained" name="btn" color="error" fullWidth>Eliminar</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DetailProduct;