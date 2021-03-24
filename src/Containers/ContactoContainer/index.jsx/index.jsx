const ContactoContainer = () => {
  return (
    <>
    <section className="p-2">
      <h2>Contactanos</h2>
      <div className="d-flex flex-row">
        <form
          onsubmit="#"
          method="POST"
          class="formulario blur"
          id="formContact"
        >
          <fieldset class="d-flex flex-column" id="fieldsetForm">
            <label for="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              class="campoForm"
            />
            <label for="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Tu Apellido"
              class="campoForm"
            />
            <div class="checkbox">
              <input
                type="checkbox"
                name="empresa"
                value="si"
                class="check"
                class="campoForm"
              />
              Me contacto en representación de una empresa u organización
            </div>
            <label for="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu correo electronico"
              class="campoForm"
            />
            <label for="opcion_contacto">Motivo de contacto</label>
            <select
              name="opcion_contacto"
              id="opcion_contacto"
              class="campoForm"
            >
              <option>Representación</option>
              <option>Contrataciones</option>
              <option>Servicios profesionales</option>
              <option>Prensa</option>
              <option>Tour</option>
              <option>Otros</option>
            </select>
            <div class="checkbox">
              <input
                type="checkbox"
                name="newsletter"
                value="si"
                class="check"
                class="campoForm"
              />
              Deseo suscribirme al newsletter
            </div>
            <label for="asunto">Asunto</label>
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="Breve descripción del mensaje"
              class="campoForm"
            />
            <textarea
              name="mensaje"
              cols="25"
              rows="10"
              placeholder="Mensaje"
              id="mensajecontact"
            ></textarea>
            <div id="datoinvalido"></div>
            <input
              type="submit"
              name="enviar"
              onclick="resultadoGracias ()"
              value="Enviar"
              class="enviarinput"
              id="enviarinput"
              class="enviaript"
            />
          </fieldset>
          <h3 id="muchasGracias"></h3>
        </form>   
        </div>           
    </section>
      
        </>
  );
};

export default ContactoContainer;
