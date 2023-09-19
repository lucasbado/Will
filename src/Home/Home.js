import './Home.css';
import BkgHome from "../img/CidWpp.png"

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

function Home() {
    return (
        <div className="Home">
            <div className='Body'>
                <img className='Background' src={BkgHome} alt="" />
                <button className='BtnIniciar'>
                    <a href='#'><span>
                        Iniciar

                    </span>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Home;
