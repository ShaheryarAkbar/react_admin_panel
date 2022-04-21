import './widget.scss';

const Widget = ({type}) => {
  return (
    <div className='widget'>
      <div className="left">
        <div className="title">
          {type}
        </div>
        <div className="counter">
          4805
        </div>
      </div>
      <div className="right">
        
      </div>
    </div>
  )
}

export default Widget
