import React from "react";

//este componente nos permite poder manipular de una mejor manera cada grid
export default class ImageCard extends React.Component {
  state = { spans: 0 };
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      //lo que se hace es que se agregar un evento para saber cuando termino de cargar la imagen
      this.setSpans();
    });
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;

    let spans = Math.ceil(height / 10);

    this.setState({ spans });
  }
  render() {
    let { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
