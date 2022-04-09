import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog, Button, DialogContentTextTypeMap, TextField, Grid, DialogContent } from "@mui/material";
import { deleteProductShop, updateProductShop, getProductId } from "../../services";
import { Container } from "react-bootstrap";


const EditDeleteProduct = (props) => {

    //Abrir y cerrar el modal
    const [open, setOpen] = useState(false);
    //Valores de inputs
    const [values, setValues] = useState({
        nombre: "",
        descripcion: "",
        dimension: "",
        funcion: "",
        url: "",
        rango: "",
        precio: "",
        material: "",
    });

    const [currentId, setCurrentId] = useState("");

    const ChangeInput = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const OpenDialog = async () => {
        setOpen(!open);
    };

    const onDeleteLink = async(id)=>{
        console.log(id);
    };
    
    return (
        <div>
            <Button variant="contained" color="primary" onClick={OpenDialog} >Opciones</Button>
            <Dialog open={open} onClose={OpenDialog}>
                <DialogContent>
                    <Grid container >
                        <Grid item md={12} mt={2} >
                            <TextField label="Nombre del Producto" value={values.nombre} name="nombre" fullWidth onChange={ChangeInput} />
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
                            <Button variant="contained" name="btn" onClick={()=>onDeleteLink} color="error" fullWidth>Eliminar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>

    )
}
export default EditDeleteProduct;