import ItemListContainer from '../ItemListContainer/';

const Home = () => {
    return (
        <>
        <section id="hero" class="d-flex flex-column justify-content-center align-items-start">
            <h1>Cisum Evil</h1>
            <h3>Booking & Management</h3>
        </section>
        <section id="aboutUs">
            <h2 class="blur titulo">Sobre nosotros</h2>
            <h4 class="blur">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid. Officiis, excepturi illum debitis sint quia veniam nostrum quas tenetur consequuntur facilis neque obcaecati quidem veritatis architecto laborum dolorum commodi? Quod sunt illum iste animi maxime quos eius! Hic odit culpa saepe sit, aspernatur molestias beatae obcaecati ratione dolorem quam commodi facere aperiam recusandae natus totam cupiditate consectetur sed fuga deleniti cum. Hic dicta nihil repudiandae quisquam, consequatur, iste id recusandae, consectetur numquam accusantium ad expedita. Deserunt quam dolorem doloremque aut vitae omnis, blanditiis numquam quaerat sit? Velit sequi ea expedita maxime reprehenderit accusamus voluptatum earum aut odio, nam aliquam? In aliquam vero modi velit sint esse nemo laudantium illum eveniet doloribus, dicta enim totam repellendus amet! Illo esse amet tempora eligendi quisquam fugiat, dignissimos sequi voluptas quam voluptates modi minus officia dolorum iure ab nostrum numquam! Aut, doloremque necessitatibus?</h4>
        </section>
        <section id="productos">
            <ItemListContainer />
        </section>
        </>
    )
}

export default Home;