import './App.css';
import Carousel from './Carousel';

function App() {

  const posts = [
    {
      id: 1,
      title: "Titolo del Post 1",
      image: 'https://picsum.photos/200?random=1',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html", "css"],
      published: true,
    },
    {
      id: 2,
      title: "Titolo del Post 2",
      image: 'https://picsum.photos/200?random=2',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "css"],
      published: true,
    },
    {
      id: 3,
      title: "Titolo del Post 3",
      image: 'https://picsum.photos/200?random=3',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "php"],
      published: true,
    },
    {
      id: 4,
      title: "Titolo del Post 4",
      image: 'https://picsum.photos/200?random=4',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html"],
      published: false,
    },
  ];

  return (
    <>
      <div className="App">

        <h1>React Carousel</h1>

          <Carousel
            image={posts.map(post => post.image)}
            title={posts.map(post => post.title)}
          />

      </div>
    </>
  );

}

export default App;