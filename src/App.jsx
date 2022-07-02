import styles from './App.module.css';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';

const elemento = { a: 2 };
const elemento2 = ['útil', 'útil2'];
const elemento3 = <span style={{ backgroundColor: 'green' }}>útil 3</span>;
const Title = (props) => (
  <h3 className="title">
    Desarrollo {elemento3} {props.texto} {props.children}
  </h3>
);

const App = () => {
  return (
    <div className={styles.container}>
      {/* <Title texto="hola1" />
    <Title texto="hola2">hijo</Title> */}
      <VideoList title="React">
        <VideoItem
          title="componentes"
          duration={3005}
          uploadDate={new Date(2022, 5, 21)}
          description="componentes en React"
        />
        <VideoItem
          title="useState"
          duration={120}
          uploadDate={new Date(2022, 5, 21)}
          description="como utilizar estados en React"
        />
      </VideoList>
      <VideoList title="Node">
        <VideoItem
          title="Intro a NodeJS"
          duration={3005}
          uploadDate={new Date(2022, 5, 21)}
          description="Introducción al backend con Node"
        />
      </VideoList>
      <VideoList title="Javascript"></VideoList>
    </div>
  );
};

export default App;
