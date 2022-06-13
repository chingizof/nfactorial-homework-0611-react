import './App.css';
import { format } from 'date-fns'


function App() {
  let date = format(new Date(), 'MM/dd/yyyy')
  return (
    <>
      <div className="header-wrapper">
        <div className='icon-wrapper'>
          <img src="./1xbet.png"></img>
        </div>
        <div className="date">{date}</div>
      </div>
      <div className="image-container">
        <div className="column">
          <img src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"/>
          <div className="image-text">HEY</div>
        </div>
        <div className="column">
          <img src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"/>
          <div className="image-text">LET'S</div>
        </div>
        <div className="column">
          <img src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"/>
          <div className="image-text">GIVE</div>
        </div>
        <div className="column">
          <img src="https://source.unsplash.com/ITjiVXcwVng/1500x1500"/>
          <div className="image-text">ALL</div>
        </div>
        <div className="column">
          <img src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500"/>
          <div className="image-text">YOU CAN</div>
        </div>
      </div>
    </>
  );
}

export default App;