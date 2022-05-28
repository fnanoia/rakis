//crear constructor con rutas y metodos, get post delete para manejar el formulario
//exportar modulo
//importar en app.js para el evento del FORM

class FormRequire{
    
    construtor() {
        this.URI= "http://localhost:4000/api/form";
    }

    //obtener form
    async getForm(){
       const response = await fetch(this.URI);
       const form = await response.json();
       return form;
    }

    //guardar form. envia datos al backend
    async postForm(form){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: form
        });
        const data = await response.json();
    }
/*
    async deleteForm(formID){
        const formResponse = await fetch(`${this.URI}/${formID}`,{
            headers: {
                "Content-type" : "application/json"
            },
            method: "DELETE"
    });
    const deleted = await formResponse.json();
    console.log(deleted);
    }*/
}

export default FormRequire;