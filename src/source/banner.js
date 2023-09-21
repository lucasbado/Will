import './Banner.css';
import ImageCard from './Cards/ImageCard';


function Banner() {
  return (
    <>

      <div id="carousel">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div id='carousel-img' class="carousel-inner">
            <div class="carousel-item active" id='car-img'>
              <img src="https://th.bing.com/th/id/R.c1d90b8b4c0052e2dfe6074d1629dc3f?rik=4M06RAmqIj2p0Q&pid=ImgRaw&r=0" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" id='car-img' >
              <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/7-Best-Reasons-To-Use-React.js-Components-In-Your-Project.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" id='car-img'>
              <img src="https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div id='Text'>
          <h1 id='txt'> Welcome to the best place for your shopping needs.</h1>
          <p id='para'><strong><em>"The Best Shopping Experience"</em></strong></p>
          <br />

        </div>

        <div id='card'>
          <ImageCard
            image="https://th.bing.com/th/id/OIP.KwavIwuhhIw20dSqHQA4pAHaHa?pid=ImgDet&rs=1"
          />

          <ImageCard
            image="https://th.bing.com/th/id/OIP.KwavIwuhhIw20dSqHQA4pAHaHa?pid=ImgDet&rs=1"
          />

          <ImageCard
            image="https://th.bing.com/th/id/OIP.KwavIwuhhIw20dSqHQA4pAHaHa?pid=ImgDet&rs=1"
          />

        </div>
      </div>
    </>
  )
}

export default Banner;