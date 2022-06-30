$(document).ready(function() {
    $("#formulario").validate({
        rules: { 
            user: {
                required: true,
                minlength: 3
            },
            petname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            contraseña: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: '#contraseña'
            },
            gender: {
                required: true,
            },
            cmbCiudades:{
                required: true,
                selected: true,
            }

        },
        messages: { 
            user: {
                required: 'Rellenar este campo',
                minlength: 'Min. 3 caracteres'
            },
            petname: {
                required: 'Rellenar este campo',
                minlength: 'Min. 3 caracteres'
            },
            email: {
                required: 'Este campo es requerido',
                email: 'Direccion de correo electronico invalida '
            },
            contraseña: {
                required: 'Campo necesario ingresar contraseña',
                minlength: 'Min. 6 caracteres'
            },
            confirmPassword: {
                required: 'Vuelva a ingresar contraseña',
                equalTo: ' contraseña incorrecta'
            },
            gender:{
                required: "Debe tener al menos un campo seleccionado",
                
            },
            cmbCiudades:{
                required: "Seleccione comuna",
                selected: "debe seleccionar un campo"
                
            }
        } 

    });
});