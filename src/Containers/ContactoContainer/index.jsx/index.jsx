const ContactoContainer = () => {
    return (
        <>
        <h3>O nos pueden encontrar en:</h3>
        <div className=" d-flex justify-content-center flex-column">
                        <div className="d-flex flex-column col-12 col-md-12 contact-block">
                            <h4>Representación</h4>
                            <p>
                            C. Alvarez  <br/>
                            Domicilio: Lorem ipsum dolor 1234, of:1, CABA, Argentina<br/>
                            Teléfono: +(123)4567890 int. 1<br/>
                            E-mail: <a href="mailto:management@cisumevil.com">management@cisumevil.com</a>       
                            </p>
                        </div>
                        <div className="d-flex flex-column col-12 col-md-12 contact-block">
                            <h4>Contrataciones</h4>
                            <p>
                            J. Alvarez  <br/>
                            Domicilio: Lorem ipsum dolor 1234, of:1, CABA, Argentina<br/>
                            Teléfono: +(123)4567890 int. 2<br/>
                            E-mail: <a href="mailto:booking@cisumevil.com">booking@cisumevil.com</a>       
                            </p>
                        </div>
                        <div class="d-flex flex-column col-12 col-md-12 contact-block">
                            <h4>Servicios profesionales</h4>
                            <p>
                            N. Alvarez  <br/>
                            Domicilio: Lorem ipsum dolor 1234, of:2, CABA, Argentina<br/>
                            Teléfono: +(123)4567890 int. 3<br/>
                            E-mail: <a href="mailto:services@cisumevil.com">services@cisumevil.com</a>       
                            </p>
                        </div>
                    </div>
        </>
    )
}

export default ContactoContainer;