import "./modules/car.style.css";

function Carreras() {
  return (
      <div className="wrapper">
        <h1>Parallax Flipping Cards</h1>
        <div className="cols">
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/500/500/)">
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="url(https://unsplash.it/511/511/)">
                <div className="inner">
                  <p>Rocogged</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/502/502/)">
                <div className="inner">
                  <p>Strizzes</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/503/503/)">
                <div className="inner">
                  <p>Clossyo</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/504/504/">
                <div className="inner">
                  <p>Rendann</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/505/505/)">
                <div className="inner">
                  <p>Reflupper</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/506/506/)">
                <div className="inner">
                  <p>Acirassi</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col"  onTouchStart="this.classNameList.toggle('hover');">
            <div className="container">
              <div className="front" style="background-image: url(https://unsplash.it/508/508/)">
                <div className="inner">
                  <p>Sohanidd</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Carreras;
