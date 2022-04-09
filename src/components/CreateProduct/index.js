import { useState } from "react";
import { Dialog, Button, DialogContentTextTypeMap, TextField, Grid, DialogContent } from "@mui/material";
import { storeProductShop } from "../../services";

const CreateProduct = (props) => {
    //Abrir y cerrar el modal
    const [open, setOpen] = useState(false);

    //Valores de inputs
    const [values, setValues] = useState({
        id:"",
        name: "",
        dimension: "",
        url: "",
        rango: "",
        precio: "",
        material: "",
        funcion: "",
    });
    const createProductStore = async () => {
        await storeProductShop(values);
        await props.fetchShop();
        OpenDialog();
    }
    const ChangeInput = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const OpenDialog = () => {
        setOpen(!open);
    };



    return (
        <div>
            <Grid container mb={5}>
                <Button variant="contained" color="primary" onClick={OpenDialog}>Crear Producto</Button>
            </Grid>
            <Dialog open={open} onClose={OpenDialog}>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} >
                            <TextField label="ID del Producto" name="id" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} >
                            <TextField label="Nombre del Producto" name="name" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} mt={2}>
                            <TextField label="Dimensiones del producto" name="dimension" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} mt={2}>
                            <TextField label="Url de Foto" name="url" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} mt={2}>
                            <TextField label="Ingrese Rango de Edad" name="rango" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} mt={2}>
                            <TextField label="Material del Producto" name="material" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={12} mt={2}>
                            <TextField label="Funcion del Producto" name="funcion" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={6} mt={2}>
                            <TextField label="Precio" name="precio" fullWidth onChange={ChangeInput} />
                        </Grid>
                        <Grid item md={6} mt={3}>
                            <Button variant="contained" name="btn " onClick={createProductStore} color="success" fullWidth>Aceptar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>

    )
}
export default CreateProduct;