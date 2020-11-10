# CommandHandler

Una base hecha para iniciar la creación de un bot de Discord con command Handler

* El prefix puesto es _ pero lo puedes cambiar a tu gusto en la seccion de PREFIX en index.js
* El token deberá ir en la sección de LOGIN en index.js
* Para crear un comando solo basta con crear un archivo nuevo en la carpeta "comandos"
  * El nombre del archivo deberá llevar el mismo nobre del comando
  * Los nuevos comandos deberá llevar la siguiente estructura
  ```javascript
module.exports = {
    Nombre: "ping",
    Alias: ["pg", "ping!"],
    run: async (client, message, args) => {
        //el código aquí
        message.channel.send("pong!");
    }
}
```
