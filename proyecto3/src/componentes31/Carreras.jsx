import styles from "./modules/car.module.css";
import React from "react";
function Carreras() {
  return (
    <div className={styles.wrapper}>
      <h1>Parallax Flipping Cards</h1>
      <div className={styles.cols}>
        <div
          className={styles.col}
          onTouchStart="this.classNameList.toggle('hover');">
          <div className={styles.container}>
            <div
              className={styles.front}
              style={{ backgroundImage: "url(../../src/assets/Group.png)" }}>
              <div className={styles.inner}>
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.cols}>
        <div
          className={styles.col}
          onTouchStart="this.classNameList.toggle('hover');">
          <div className={styles.container}>
            <div
              className={styles.front}
              style={{ backgroundImage: "url(../../src/assets/Group.png)" }}>
              <div className={styles.inner}>
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.cols}>
        <div
          className={styles.col}
          onTouchStart="this.classNameList.toggle('hover');">
          <div className={styles.container}>
            <div
              className={styles.front}
              style={{ backgroundImage: "url(../../src/assets/Group.png)" }}>
              <div className={styles.inner}>
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.cols}>
        <div
          className={styles.col}
          onTouchStart="this.classNameList.toggle('hover');">
          <div className={styles.container}>
            <div
              className={styles.front}
              style={{ backgroundImage: "url(../../src/assets/Group.png)" }}>
              <div className={styles.inner}>
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className={styles.cols}>
        <div
          className={styles.col}
          onTouchStart="this.classNameList.toggle('hover');">
          <div className={styles.container}>
            <div
              className={styles.front}
              style={{ backgroundImage: "url(../../src/assets/Group.png)" }}>
              <div className={styles.inner}>
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      

    </div>
  );
}

export default Carreras;
